import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Select, Space, Typography } from "antd";
import { REQUEST_METHODS } from "../constants";
import { sendRequest } from "./sendRequest";
const UrlForm = ({ form }) => {
  const onSend = async () => {
    const formData = form.getFieldsValue();
    sendRequest(formData).then((response) => {
      console.log("resp", response);
      form.setFieldValue("responseData", JSON.stringify(response.data));
    });
  };
  return (
    <Space>
      <Form.Item name="method">
        <Select
          popupMatchSelectWidth={true}
          options={REQUEST_METHODS.map((i) => ({
            label: i,
            value: i.toLowerCase(),
          }))}
        />
      </Form.Item>
      <Form.Item name="baseURL">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" onClick={onSend} type="primary">
          Send
        </Button>
      </Form.Item>
    </Space>
  );
};
export default UrlForm;
