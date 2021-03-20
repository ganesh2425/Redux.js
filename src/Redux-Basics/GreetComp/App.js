import React from "react";
import Greet from "./Redux-Basics/GreetComp/Greet";
import {Store} from "./Redux-Basics/GreetComp/Store";
import {Provider} from "react-redux"
let App =()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">React-Redux basics</a>
    </nav>
        
    <Provider store = {Store}>
    <Greet/>
    </Provider>
    
    
    </>);
}
export default App;