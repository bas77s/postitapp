import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { store } from "./Store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* put a <Provider> around your
    <App>, and pass the store as a prop:*/}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
