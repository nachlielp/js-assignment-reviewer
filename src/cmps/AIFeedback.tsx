import React, { useState, useEffect } from "react";
import { aiService } from "../services/aiService";
import "../styles/ai-feedback.css";
import { FEEDBACK_STORAGE_KEY } from "../services/utilService";
import { Spin } from "antd";
import { AlertProps } from "../interface";

interface AIFeedbackProps {
  code: string;
  taskContent: string;
  taskSolution: string;
  guidelines?: string;
  studentName: string;
  taskName: string;
  handleAlert: (alert: Omit<AlertProps, "onClose">) => void;
}

const AIFeedback: React.FC<AIFeedbackProps> = ({
  code,
  taskContent,
  taskSolution,
  guidelines,
  studentName,
  taskName,
  handleAlert,
}) => {
  const [feedback, setFeedback] = useState<{
    works: boolean;
    explanation: string;
    error: string;
  } | null>(null);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState<boolean>(false);
  const autoGenEnabled = localStorage.getItem("autoGenEnabled") === "true";

  useEffect(() => {
    setFeedback(null);

    // Check for existing feedback
    const storedFeedback = localStorage.getItem(FEEDBACK_STORAGE_KEY) || "{}";
    const feedbackMap = JSON.parse(storedFeedback);
    // Create a unique key for this assignment
    const feedbackKey = `${taskName}_${studentName}`;
    if (feedbackMap[feedbackKey]) {
      setFeedback(feedbackMap[feedbackKey]);
    } else if (autoGenEnabled) {
      setIsLoadingFeedback(true);
      getFeedback();
    }
  }, [taskName]);

  const getFeedback = async () => {
    setIsLoadingFeedback(true);

    const storedFeedback = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    const feedbackMap = storedFeedback ? JSON.parse(storedFeedback) : {};
    const feedbackKey = `${taskName}_${studentName}`;

    if (feedbackMap[feedbackKey]) {
      setFeedback(feedbackMap[feedbackKey]);
      setIsLoadingFeedback(false);
      return;
    }

    try {
      const feedback = await aiService.getAssignmentFeedback(
        code,
        taskContent,
        taskSolution,
        guidelines || ""
      );
      if (feedback.error) {
        handleAlert({
          message: feedback.error,
          type: "error",
          isOpen: true,
        });
      }
      setFeedback(feedback);
      feedbackMap[feedbackKey] = feedback;
      localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(feedbackMap));

      // Save feedback to localStorage
    } catch (error) {
      console.error("Error getting feedback:", error);
    } finally {
      setIsLoadingFeedback(false);
    }
  };

  return (
    <div className="section ai-feedback-section">
      {!autoGenEnabled && (
        <button
          onClick={getFeedback}
          disabled={isLoadingFeedback}
          className="js-playground-feedback-btn"
        >
          {isLoadingFeedback ? "Getting Feedback..." : "Get AI Feedback"}
        </button>
      )}

      {isLoadingFeedback && (
        <div className={`feedback-loading`}>
          <Spin size="large" />
        </div>
      )}

      {feedback && (
        <div className="feedback-content">
          <div className="feedback-content-inner">
            {isLoadingFeedback ? (
              <></>
            ) : (
              <>
                <h3>AI Feedback</h3>
                <div
                  className={`feedback-status ${
                    feedback.works ? "success" : "error"
                  }`}
                >
                  {feedback.works ? "Works" : "Does not work"}
                </div>
                <br />
                {feedback.explanation}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIFeedback;
