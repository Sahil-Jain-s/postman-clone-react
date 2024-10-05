import React, { useState } from "react";
import { HistoryOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Layout,
  Row,
  Select,
  Space,
} from "antd";
import MainTabs from "./MainTabs";
import History from "./History";
const { Header, Content, Footer, Sider } = Layout;
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
      <Layout style={{ minHeight: "100vh" }}>
        {/* <Header style={{ display: "flex", alignItems: "center" }}>
          header
        </Header> */}
        <Layout>
          <Sider width={200} breakpoint="lg" collapsedWidth="0">
            <Button
              type="primary"
              onClick={showDrawer}
              icon={<HistoryOutlined />}
            >
              Show History
            </Button>{" "}
          </Sider>
          <Content
            style={{
              padding: "24px 48px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
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
          </Content>
          {/* <Sider>right sidebar</Sider> */}
        </Layout>
        {/* <Footer style={{ textAlign: "center" }}>footer</Footer> */}
      </Layout>
    </>
  );
};
export default HomePage;
