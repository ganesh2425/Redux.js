import React from "react";
import Wish from "./Redux-Basics/WishMessage/Wish";
import {Store} from "../WishMessage/Store";
import {Provider} from "react-redux";

let App=() => {
  return(<React.Fragment>
    <nav className="navbar navbar-dark bg-dark">
      <a href="/">React-Redux Example</a>
    </nav>
    
    <Provider store={Store}>
    <Wish/>
    
  
    </Provider>
  </React.Fragment>)
  
}
export default App;