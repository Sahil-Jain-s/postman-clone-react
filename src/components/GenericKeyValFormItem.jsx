import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
const GenericKeyValueFormItem = ({ label, fieldName }) => {
  return (
    <Form.Item>
      <Form.List name={fieldName}>
        {(subFields, subOpt) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 16,
            }}
          >
            {subFields.map((subField) => (
              <Space key={subField.key} align="center">
                <Form.Item
                  noStyle
                  name={[subField.name, "enabled"]}
                  valuePropName="checked"
                >
                  <Checkbox defaultChecked={true} />
                </Form.Item>
                <Form.Item noStyle name={[subField.name, "key"]}>
                  <Input placeholder="Key" />
                </Form.Item>
                <Form.Item noStyle name={[subField.name, "value"]}>
                  <Input placeholder="Value" />
                </Form.Item>
                <CloseOutlined
                  onClick={() => {
                    subOpt.remove(subField.name);
                  }}
                />
              </Space>
            ))}
            <Button
              style={{ width: "fit-content" }}
              type="dashed"
              onClick={() => subOpt.add({ enabled: true })}
              block
            >
              + Add
            </Button>
          </div>
        )}
      </Form.List>
    </Form.Item>
  );
};
export default GenericKeyValueFormItem;
