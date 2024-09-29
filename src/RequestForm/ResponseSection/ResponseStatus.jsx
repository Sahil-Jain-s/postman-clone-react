import React from "react";
import { Input, Form, Typography } from "antd";
const ResponseStatus = () => (
  <div className="desc">
    <h3>{"Response Body"}</h3>
    <Form.Item name="responseStatusCode" shouldUpdate label="Status">
      <Input readOnly />
    </Form.Item>
    <Form.Item name="responseStatusMessage" shouldUpdate label="Status Message">
      <Input readOnly />
    </Form.Item>
  </div>
);
export default ResponseStatus;
