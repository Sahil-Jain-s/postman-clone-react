import React, { useState } from "react";
import { HistoryOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import MainTabs from "./MainTabs";
import History from "./History";
const { Option } = Select;
const HomePage = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<HistoryOutlined />}>
        Show History
      </Button>
      <Drawer
        title="History"
        width={340}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <History />
      </Drawer>
      <MainTabs />
    </>
  );
};
export default HomePage;
