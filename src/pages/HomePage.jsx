import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Menu,
  Input,
  Layout,
  Row,
  Select,
  Space,
} from "antd";
import {
  DesktopOutlined,
  FolderOpenOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import MainTabs from "./MainTabs";
import History from "./History";
import Collections from "./Collections";
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const HomePage = () => {
  const [openHistory, setOpenHistory] = useState(false);
  const showHistoryDrawer = () => {
    setOpenHistory(true);
  };
  const onCloseHistoryDrawer = () => {
    setOpenHistory(false);
  };

  const [openCollection, setOpenCollection] = useState(false);
  const showCollectionDrawer = () => {
    setOpenCollection(true);
  };
  const onCloseCollectionDrawer = () => {
    setOpenCollection(false);
  };
  const items = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("Option 3", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Collections", 8, <FolderOpenOutlined />),
    getItem("History", 9, <HistoryOutlined />),
  ];

  const onMenuClick = (e) => {
    console.log("click ", e);
    if (e.key == 9) {
      showHistoryDrawer();
    } else if (e.key == 8) {
      showCollectionDrawer();
    }
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        {/* <Header style={{ display: "flex", alignItems: "center" }}>
          header
        </Header> */}
        <Layout>
          <Sider
            width={200}
            breakpoint="lg"
            collapsedWidth="0"
            collapsible
            collapsed={false}
          >
            <Menu
              theme="dark"
              selectable={false}
              // defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
              onClick={onMenuClick}
            />
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
              onClose={onCloseHistoryDrawer}
              open={openHistory}
              styles={{
                body: {
                  paddingBottom: 80,
                },
              }}
            >
              <History />
            </Drawer>
            <Drawer
              title="Collections"
              width={340}
              onClose={onCloseCollectionDrawer}
              open={openCollection}
              styles={{
                body: {
                  paddingBottom: 80,
                },
              }}
            >
              <Collections />
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
