import React from "react";
import Greet from "./Redux-Basics/GreetComp/Greet";
/*import Wish from "./Redux-Basics/WishMessage/Wish";*/
import {Store} from "./Redux-Basics/Redux/Store";
import {Provider} from "react-redux";

let App=() => {
  return(<React.Fragment>
    <nav className="navbar navbar-dark bg-dark">
      <a href="/">React-Redux Example</a>
    </nav>
    
    <Provider store={Store}>
    <Greet/>
  
    </Provider>
  </React.Fragment>)
  
}
export default App;