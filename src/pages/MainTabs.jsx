import React, { useRef, useState } from "react";
import { Button, Tabs } from "antd";
import RequestForm from "../RequestForm/RequestForm";
const initialItems = [
  {
    label: "Tab 1",
    children: <RequestForm tab_key={"1"} />,
    key: "1",
  },
];
const MainTabs = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current}`;
    const newPanes = [...items];
    newPanes.push({
      label: "New Tab " + (1 + newTabIndex.current),
      children: <RequestForm tab_key={newActiveKey} />,
      key: newActiveKey,
    });
    newTabIndex.current++;

    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <Tabs
      type="editable-card"
      more
      tabBarExtraContent={<Button>rr</Button>}
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
};
export default MainTabs;
