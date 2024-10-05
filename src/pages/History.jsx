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
import { addTab } from "../State/tabsSlice";
import { useDispatch } from "react-redux";
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

const History = () => {
  const dispatch = useDispatch();

  const addNewCustomTab = () => {
    const customInitialValues = {
      method: "POST",
      url: "https://example.com",
      headers: [{ key: "Authorization", value: "Bearer token" }],
    };
    dispatch(addTab(customInitialValues)); // Dispatch an action to add a tab with custom values
  };

  return (
    <>
      <Button onClick={addNewCustomTab}>Load E.g</Button>
      <Tree
        showIcon
        defaultExpandAll
        defaultSelectedKeys={["0-0-0"]}
        switcherIcon={<DownOutlined />}
        treeData={treeData}
        titleRender={TreeTitleRenderer}
        selectable={false}
      />
    </>
  );
};
export default History;
