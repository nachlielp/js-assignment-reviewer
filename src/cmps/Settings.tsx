import React, { useState, useEffect } from "react";
import { Button, Modal, Input, Form, Switch } from "antd";
import { SettingOutlined } from "@ant-design/icons";

export function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const geminiKey = localStorage.getItem("geminiApiKey") || "";
    const hebrewName = localStorage.getItem("hebrewUserName") || "";
    const autoGen = localStorage.getItem("autoGenEnabled") !== "false";
    form.setFieldsValue({
      geminiApiKey: geminiKey,
      hebrewUserName: hebrewName,
      autoGenEnabled: autoGen,
    });
  }, [form]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Save to localStorage
        localStorage.setItem("geminiApiKey", values.geminiApiKey);
        localStorage.setItem("hebrewUserName", values.hebrewUserName);
        localStorage.setItem(
          "autoGenEnabled",
          values.autoGenEnabled.toString()
        );
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Form validation failed:", error);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<SettingOutlined />}>
        הגדרות
      </Button>
      <Modal
        title="הגדרות"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" dir="rtl">
          <Form.Item
            label="Gemini API Key"
            name="geminiApiKey"
            style={{ textAlign: "right" }}
            extra={
              <span>
                Get your API key from{" "}
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google AI Studio
                </a>
              </span>
            }
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="שם משתמש"
            name="hebrewUserName"
            rules={[{ required: true, message: "נא להזין שם משתמש!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Auto Generate Feedback"
            name="autoGenEnabled"
            valuePropName="checked"
            initialValue={true}
          >
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
