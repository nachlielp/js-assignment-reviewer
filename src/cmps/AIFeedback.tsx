import React, { useState } from "react";
import { aiService } from "../services/aiService";
import "../styles/ai-feedback.css";
interface AIFeedbackProps {
  code: string;
  taskContent: string;
  taskSolution: string;
  guidelines?: string;
}

const AIFeedback: React.FC<AIFeedbackProps> = ({
  code,
  taskContent,
  taskSolution,
  guidelines,
}) => {
  const [feedback, setFeedback] = useState<{
    works: boolean;
    explanation: string;
  } | null>(null);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState<boolean>(false);

  const getFeedback = async () => {
    setIsLoadingFeedback(true);
    try {
      const feedback = await aiService.getAssignmentFeedback(
        code,
        taskContent,
        taskSolution,
        guidelines || ""
      );
      setFeedback(feedback);
    } catch (error) {
      console.error("Error getting feedback:", error);
    } finally {
      setIsLoadingFeedback(false);
    }
  };

  return (
    <div className="section ai-feedback-section">
      <button
        onClick={getFeedback}
        disabled={isLoadingFeedback}
        className="js-playground-feedback-btn"
      >
        {isLoadingFeedback ? "Getting Feedback..." : "Get AI Feedback"}
      </button>

      {feedback && (
        <div className="feedback-content">
          <h3>AI Feedback</h3>
          <div>
            <div
              className={`feedback-status ${
                feedback.works ? "success" : "error"
              }`}
            >
              {feedback.works ? "Works" : "Does not work"}
            </div>
            <br />
            {feedback.explanation}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIFeedback;
