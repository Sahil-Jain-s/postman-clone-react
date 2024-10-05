import "./App.css";
import MainTabs from "./pages/MainTabs";
import HomePage from "./pages/HomePage";
import store from "./State/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </>
  );
}

export default App;
