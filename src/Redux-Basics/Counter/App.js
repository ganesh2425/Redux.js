import React from "react";
import Counter from "./Redux-Basics/Counter/Counter";
import {Store} from "./Redux-Basics/Counter/Store";
import {Provider} from "react-redux";
let App = ()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">React-Redux</a>
    </nav>
    <Provider store={Store}>
    <Counter/>
    </Provider>
    </>);
}
export default App;