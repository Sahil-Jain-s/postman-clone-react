import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_HTTP_NEW_TAB_VALUES } from "../constants";
import { v4 as uuidv4 } from "uuid";

// Initial state for tabs
const initialState = {
  activeKey: "1",
  items: [
    {
      label: "Tab 1",
      children: {
        initialValues: DEFAULT_HTTP_NEW_TAB_VALUES,
        id: "1",
      },
      key: "1",
    },
  ],
  history: [], // Optional: To keep track of added/removed tabs over time
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    addTab: (state, action) => {
      console.log(action);
      const newTabKey = uuidv4();
      const newTab = {
        label: `New Tab`,
        children: {
          initialValues: action.payload || DEFAULT_HTTP_NEW_TAB_VALUES,
          id: newTabKey,
        },
        key: newTabKey,
      };
      state.items.push(newTab);
      state.activeKey = newTabKey;
      state.history.push({ action: "add", tab: newTab });
    },
    removeTab: (state, action) => {
      const targetKey = action.payload;
      const newItems = state.items.filter((item) => item.key !== targetKey);
      state.items = newItems;

      // Set new active key after deletion
      if (newItems.length > 0) {
        state.activeKey = newItems[0].key;
      }

      state.history.push({ action: "remove", key: targetKey });
    },
    setActiveTab: (state, action) => {
      state.activeKey = action.payload;
    },
    saveTabs: (state, action) => {
      // Save the current state of tabs to a collection
      // You can store this in local storage, database, or elsewhere
      const collectionName = action.payload;
      // Implement logic to save the current state of `state.items` to a collection
      console.log(`Saving tabs to collection: ${collectionName}`, state.items);
    },
  },
});

export const { addTab, removeTab, setActiveTab, saveTabs } = tabsSlice.actions;
export default tabsSlice.reducer;
