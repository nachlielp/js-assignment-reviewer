export const aiService = {
  async getAssignmentFeedback(
    studentCode: string,
    taskDescription: string,
    exampleSolution: string,
    guidelines: string
  ) {
    try {
      const prompt = `
        Please review this student's JavaScript assignment and provide a very brief response:

        Task Description:
        ${taskDescription}

        Student's Solution:
        ${studentCode}

        Example Solution:
        ${exampleSolution}

        Specific Guidelines:
        ${guidelines}

        General Guidelines:
        1. name variables in english in a way that aAccurately describes the data they hold
        2. name functions in english in a way that accurately describes what they do

        Respond in this exact format:
        {
          works: true/false,
          explanation: [1-2 sentences only] in Hebrew
        }
      `;

      const geminiApiKey = localStorage.getItem("geminiApiKey");
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log("data", data);
      if (data.error) {
        return {
          works: false,
          explanation: "Error getting feedback. Please try again.",
          error: data.error.status,
        };
      }
      if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
        throw new Error("Invalid response format from API");
      }
      const responseText = data.candidates[0].content.parts[0].text;
      // Remove markdown code blocks and clean the JSON structure
      const cleanedResponse = responseText
        .replace(/```json|```/g, "") // Remove markdown code blocks
        .trim()
        .replace(/(\r\n|\n|\r)/gm, "") // Remove newlines
        .replace(/works:\s*(true|false)/, '"works": $1') // Quote the works property
        .replace(/explanation:\s*"/, '"explanation": "'); // Quote the explanation property

      // console.log("cleanedResponse", cleanedResponse);
      const parsedResponse = JSON.parse(cleanedResponse);
      // console.log("parsedResponse", parsedResponse);
      return parsedResponse;
    } catch (error) {
      console.error("Error getting AI feedback:", error);
      return "Error getting feedback. Please try again.";
    }
  },
};
