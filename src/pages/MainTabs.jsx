import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Tabs } from "antd";
import RequestForm from "../RequestForm/RequestForm";
import {
  addTab,
  removeTab,
  setActiveTab,
  updateTabTitle,
} from "../State/tabsSlice";

const MainTabs = () => {
  const dispatch = useDispatch();
  const { items, activeKey } = useSelector((state) => state.tabs);

  // const onChange = (newActiveKey) => {
  //   dispatch(setActiveTab(newActiveKey));
  // };

  // const onEdit = (targetKey, action) => {
  //   if (action === "add") {
  //     dispatch(addTab());
  //   } else {
  //     dispatch(removeTab(targetKey));
  //   }
  // };

  const [editingKey, setEditingKey] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

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

  const onDoubleClick = (targetKey, currentTitle) => {
    setEditingKey(targetKey);
    setEditingTitle(currentTitle);
  };

  const onTitleChange = (e) => {
    setEditingTitle(e.target.value);
  };

  const onTitleBlur = (targetKey) => {
    if (editingTitle.trim()) {
      dispatch(updateTabTitle({ key: targetKey, title: editingTitle }));
    }
    setEditingKey(null);
  };

  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items.map((item) => ({
        ...item,
        label:
          editingKey === item.key ? (
            <Input
              value={editingTitle}
              onChange={onTitleChange}
              onBlur={() => onTitleBlur(item.key)}
              onPressEnter={() => onTitleBlur(item.key)}
              autoFocus
              style={{ width: 100 }}
            />
          ) : (
            <span onDoubleClick={() => onDoubleClick(item.key, item.label)}>
              {item.label}
            </span>
          ),
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
