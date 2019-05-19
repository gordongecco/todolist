import React from "react";
import { Provider } from "react-redux";

import { LoginScene } from "./Scenes";
import { Layout } from "./Components";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <h1>Hali</h1>
      <Layout component={LoginScene} />
    </Provider>
  );
}

export default App;
