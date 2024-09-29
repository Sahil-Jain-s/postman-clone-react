import React, { useState } from "react";
import { Tabs } from "antd";
import HeadersForm from "./HeadersForm";
import QueryParamsForm from "./QueryParamsForm";
import BodyForm from "./BodyForm";
const InputSectionTabs = () => {
  const [size, setSize] = useState("small");
  const tabsItems = [
    {
      label: "Params",
      children: <QueryParamsForm />,
      key: "1",
    },
    {
      label: "Headers",
      children: <HeadersForm />,
      key: "2",
    },
    {
      label: "Body",
      children: <BodyForm />,
      key: "3",
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" type="card" size={size} items={tabsItems} />
    </div>
  );
};
export default InputSectionTabs;
