import React from "react";
import {
  DownOutlined,
  FrownFilled,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Space, Tree } from "antd";

const treeData = [
  {
    title: "March 24",
    key: "0-0",
    type: "Date",
    children: [
      {
        title: "leaf",
        type: "Entry",
        key: "0-0-0",
      },
      {
        title: "leaf",
        type: "Entry",
        key: "0-0-1",
      },
    ],
  },
];

const TreeTitleRenderer = (nodeData) => {
  console.log(nodeData);
  return (
    <Space>
      {nodeData.title}
      {nodeData.type == "Entry" && <PlusOutlined />}
      {nodeData.type == "Entry" && <DeleteOutlined />}
    </Space>
  );
};

const History = () => (
  <Tree
    showIcon
    defaultExpandAll
    defaultSelectedKeys={["0-0-0"]}
    switcherIcon={<DownOutlined />}
    treeData={treeData}
    titleRender={TreeTitleRenderer}
    selectable={false}
  />
);
export default History;
