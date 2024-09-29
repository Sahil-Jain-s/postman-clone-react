import React from "react";
import { Input, Form, Typography } from "antd";
const { Paragraph, Text } = Typography;
const ResponseSection = () => (
  <div className="desc">
    <Form.Item name="responseData" shouldUpdate>
      <Input.TextArea />
    </Form.Item>
  </div>
);
export default ResponseSection;
