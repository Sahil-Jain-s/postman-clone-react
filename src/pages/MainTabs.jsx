import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Tabs } from "antd";
import RequestForm from "../RequestForm/RequestForm";
import { DEFAULT_HTTP_NEW_TAB_VALUES } from "../constants";
import { v4 as uuidv4 } from "uuid";

const initialItems = [
  {
    label: "Tab 1",
    children: (
      <RequestForm id={"1"} initialValues={DEFAULT_HTTP_NEW_TAB_VALUES} />
    ),
    key: "1",
  },
];

// Forwarding ref to allow parent to control the add function
const MainTabs = forwardRef((props, ref) => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);

  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };

  // Add tab function
  const add = (
    tabKey = uuidv4(),
    label = "New Tab",
    form_initial_values = DEFAULT_HTTP_NEW_TAB_VALUES
  ) => {
    const newPanes = [...items];
    const newTab = (
      <RequestForm initialValues={form_initial_values} id={tabKey} />
    );

    newPanes.push({
      label: label,
      children: newTab,
      key: tabKey,
    });

    setItems(newPanes);
    setActiveKey(tabKey);
  };

  // Remove tab function
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

  // Expose the add function to the parent through ref
  useImperativeHandle(ref, () => ({
    addTab: (form_initial_values) => add(form_initial_values),
  }));

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
});

export default MainTabs;
