import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Select, Space, Typography } from "antd";
import { REQUEST_METHODS } from "../constants";
import { sendRequest } from "./sendRequest";
import { convertObjectToKVobjectArray } from "../Utils/objectFunctions";
const UrlForm = ({ form }) => {
  const onSend = async () => {
    const formData = form.getFieldsValue();
    sendRequest(formData).then((response) => {
      console.log("resp", response);
      form.setFieldValue("responseData", response.data);
      form.setFieldValue(
        "responseHeaders",
        convertObjectToKVobjectArray(response.headers)
      );
      form.setFieldValue("responseStatusCode", response.status);
      form.setFieldValue("responseStatusMessage", response.statusText);
    });
  };
  return (
    <Space.Compact block>
      <Form.Item name="method" style={{ width: "15%" }}>
        <Select
          popupMatchSelectWidth={false}
          options={REQUEST_METHODS.map((i) => ({
            label: i,
            value: i.toLowerCase(),
          }))}
        />
      </Form.Item>
      <Form.Item name="baseURL" style={{ width: "60%" }}>
        <Input />
      </Form.Item>
      <Form.Item style={{ width: "20%" }}>
        <Button htmlType="submit" onClick={onSend} type="primary">
          Send
        </Button>
      </Form.Item>
    </Space.Compact>
  );
};
export default UrlForm;
