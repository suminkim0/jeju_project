import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import rootReducer from "./reducers/rootReducer"; // 리듀서 가져오기

const store = createStore(rootReducer);

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

export default AppWrapper;
