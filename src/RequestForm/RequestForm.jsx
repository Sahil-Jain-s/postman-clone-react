import React from "react";
import { Divider, Form, Input } from "antd";
import UrlForm from "./UrlForm";
import InputSectionTabs from "./RequestDataForms/RequestDataTabs";
import ResponseTabs from "./ResponseSection/ResponseTabs";
const RequestForm = ({ id, initialValues }) => {
  const [form] = Form.useForm();
  return (
    <Form
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
      {/* <Form.Item name="tab_title">
        <Input />
      </Form.Item> */}
      <Divider></Divider>
      <UrlForm form={form} />
      <Divider></Divider>
      <InputSectionTabs />
      <Divider></Divider>
      <ResponseTabs />
    </Form>
  );
};
export default RequestForm;
