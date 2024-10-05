import React from "react";
import { Input, Form, Typography } from "antd";
import GenericKeyValueFormItem from "../../components/GenericKeyValFormItem";
const { Paragraph, Text } = Typography;
const ResponseHeaders = () => (
  <div className="desc">
    <h3>{"Response Headers"}</h3>
    <GenericKeyValueFormItem fieldName={"responseHeaders"} editable={false} />
  </div>
);
export default ResponseHeaders;
