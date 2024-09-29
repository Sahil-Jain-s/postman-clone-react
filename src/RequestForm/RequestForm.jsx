import React from "react";
import { Form } from "antd";
import UrlForm from "./UrlForm";
import InputSectionTabs from "./RequestDataForms/RequestDataTabs";
import ResponseTabs from "./ResponseSection/ResponseTabs";
const RequestForm = ({ tab_key = 999 }) => {
  const [form] = Form.useForm();
  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18,
      }}
      form={form}
      name={"dynamic_form_complex" + tab_key}
      style={
        {
          // maxWidth: 600,
        }
      }
      autoComplete="off"
      initialValues={{
        method: "get",
        baseURL: "https://jsonplaceholder.typicode.com/posts",
        params: [{ enabled: true }],
        headers: [{ enabled: true }],
        data: [{ enabled: true }],
      }}
    >
      <UrlForm form={form} />
      <InputSectionTabs />
      <ResponseTabs />
    </Form>
  );
};
export default RequestForm;
