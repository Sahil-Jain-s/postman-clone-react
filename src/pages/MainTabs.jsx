import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tabs } from "antd";
import RequestForm from "../RequestForm/RequestForm";
import { addTab, removeTab, setActiveTab } from "../State/tabsSlice";

const MainTabs = () => {
  const dispatch = useDispatch();
  const { items, activeKey } = useSelector((state) => state.tabs);

  const onChange = (newActiveKey) => {
    dispatch(setActiveTab(newActiveKey));
  };

  const onEdit = (targetKey, action) => {
    if (action === "add") {
      dispatch(addTab());
    } else {
      dispatch(removeTab(targetKey));
    }
  };

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items.map((item) => ({
        ...item,
        children: (
          <RequestForm
            initialValues={item.children.initialValues}
            id={item.children.id}
          />
        ),
      }))}
    />
  );
};

export default MainTabs;
