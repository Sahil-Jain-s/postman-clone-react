import React, { useState } from "react";
import { Tabs } from "antd";
import ResponseBody from "./ResponseBody";
import ResponseHeaders from "./ResponseHeaders";
import ResponseStatus from "./ResponseStatus";
const ResponseTabs = () => {
  const [size, setSize] = useState("small");
  const tabsItems = [
    {
      label: "Body",
      children: <ResponseBody />,
      key: "1",
    },
    {
      label: "Headers",
      children: <ResponseHeaders />,
      key: "2",
    },
    {
      label: "Status",
      children: <ResponseStatus />,
      key: "3",
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" type="card" size={size} items={tabsItems} />
    </div>
  );
};
export default ResponseTabs;
