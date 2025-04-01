import React, { useState, useEffect } from "react";
import { Button, Modal, Input, Form } from "antd";
import { SettingOutlined } from "@ant-design/icons";

export function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    // Load initial values from localStorage
    const geminiKey = localStorage.getItem("geminiApiKey") || "";
    const hebrewName = localStorage.getItem("hebrewUserName") || "";
    form.setFieldsValue({
      geminiApiKey: geminiKey,
      hebrewUserName: hebrewName,
    });
  }, [form]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      // Save to localStorage
      localStorage.setItem("geminiApiKey", values.geminiApiKey);
      localStorage.setItem("hebrewUserName", values.hebrewUserName);
      setIsModalOpen(false);
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
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Gemini API Key"
            name="geminiApiKey"
            rules={[
              { required: true, message: "Please input your Gemini API key!" },
            ]}
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
        </Form>
      </Modal>
    </>
  );
}
