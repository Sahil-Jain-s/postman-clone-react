import React from "react";
import { Input, Form, Typography } from "antd";
import JsonView from "@uiw/react-json-view";
import { monokaiTheme } from "@uiw/react-json-view/monokai";
//https://raw.githack.com/uiwjs/react-json-view/v1-docs/index.html
const JsonViewWrapper = ({ value, onChange }) => {
  console.log("ddd", value);
  return (
    <div
      style={{
        maxHeight: "300px", // Set max height for the container
        overflow: "auto", // Enable scrolling when content exceeds height
        padding: "10px",
        border: "1px solid #ccc", // Optional styling
        borderRadius: "4px",
      }}
    >
      <JsonView collapsed={1} style={monokaiTheme} value={value ? value : ""} />
    </div>
  );
};
const ResponseBody = () => (
  <div className="desc">
    <h3>{"Response Body"}</h3>
    <Form.Item name="responseData" shouldUpdate valuePropName="value">
      <JsonViewWrapper />
    </Form.Item>
  </div>
);
export default ResponseBody;
