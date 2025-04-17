import { InputHTMLAttributes } from "react";

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
  }
}

export type Task = {
  name: string;
  title: string;
  content: string;
  solution: string;
};

export {};
