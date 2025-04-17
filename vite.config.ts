import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { glob } from "glob";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "exercise-content-loader",
      configResolved() {
        // Get all exercise HTML files
        const exerciseFiles = glob
          .sync(resolve(__dirname, "src/material/ex-runner/exercises/*.html"))
          .sort();

        // Create tasks object
        const tasksContent = exerciseFiles
          .map((file, index) => {
            const num = index + 1;
            const paddedNum = String(num).padStart(2, "0");
            const content = readFileSync(file, "utf-8");

            // Try to read solution file if it exists
            let solution = "";
            try {
              solution = readFileSync(
                resolve(
                  __dirname,
                  `src/material/ex-runner/solutions/${paddedNum}.js`
                ),
                "utf-8"
              );
            } catch (e) {
              // If solution file doesn't exist, use empty string
              solution = "";
            }

            return `  ${num}: {
        name: "${paddedNum}.js",
        title: "Exercise ${num}",
        content: ${JSON.stringify(content)},
        solution: ${JSON.stringify(solution)}
      }`;
          })
          .join(",\n");

        // Generate the tasks.ts file content
        const fileContent = `// This file is auto-generated during build. Do not edit directly.
    import { Task } from "./types";

    interface Tasks {
      [key: string]: Task;
    }

    export const tasks: Tasks = {
    ${tasksContent}
    };
    `;

        // Write the generated file
        writeFileSync(resolve(__dirname, "src/tasks.ts"), fileContent);
      },
    },
  ],
  server: {
    port: 5173,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["antd"],
          editor: ["@codemirror/lang-javascript", "@uiw/react-codemirror"],
        },
      },
    },
  },
});
