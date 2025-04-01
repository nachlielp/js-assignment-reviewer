import React from "react";
import { Modal } from "antd";
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

interface AlertProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
  isOpen: boolean;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, isOpen, onClose }) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircleOutlined style={{ color: "#52c41a" }} />;
      case "error":
        return <CloseCircleOutlined style={{ color: "#ff4d4f" }} />;
      case "warning":
        return <ExclamationCircleOutlined style={{ color: "#faad14" }} />;
      case "info":
        return <InfoCircleOutlined style={{ color: "#1890ff" }} />;
      default:
        return null;
    }
  };

  return (
    <Modal
      title={
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {getIcon()}
          <span style={{ textTransform: "capitalize" }}>{type}</span>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={[
        <button key="close" onClick={onClose} className="close-btn">
          Close
        </button>,
      ]}
    >
      {message === "PERMISSION_DENIED" ? (
        <p>
          Please check your API key in the settings.
          <br />
          <br />
          If the problem persists, please contact the developer.
        </p>
      ) : (
        <p>{message}</p>
      )}
    </Modal>
  );
};

export default Alert;
