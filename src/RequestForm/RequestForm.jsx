import React from "react";
import { Form } from "antd";
import UrlForm from "./UrlForm";
import InputSectionTabs from "./RequestDataForms/RequestDataTabs";
import ResponseTabs from "./ResponseSection/ResponseTabs";
const RequestForm = ({ id, initialValues }) => {
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
      name={"dynamic_form_complex" + id}
      style={
        {
          // maxWidth: 600,
        }
      }
      autoComplete="off"
      initialValues={initialValues}
    >
      <UrlForm form={form} />
      <InputSectionTabs />
      <ResponseTabs />
    </Form>
  );
};
export default RequestForm;
