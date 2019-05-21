import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { LoginScene, ListScene } from "./Scenes";
import { Layout } from "./Components";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout login={LoginScene} list={ListScene} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
