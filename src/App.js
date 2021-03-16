import React from "react";
import Wish from "./WishMessage/Wish";
import store from "./Redux/Store";
import {Provider} from "react-redux";
let App = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark ">
        <a href="/">React Redux Basic Example</a>
      </nav>
      <Provider store={store}>
      <Wish/>
      </Provider>

    </>
  )
}
export default App;