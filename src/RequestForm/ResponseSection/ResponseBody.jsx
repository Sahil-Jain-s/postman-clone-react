import React from "react";
import { Input, Form, Typography } from "antd";
const ResponseBody = () => (
  <div className="desc">
    <h3>{"Response Body"}</h3>
    <Form.Item name="responseData" shouldUpdate>
      <Input.TextArea />
    </Form.Item>
  </div>
);
export default ResponseBody;
