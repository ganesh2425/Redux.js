import React from "react";
import Counter from "./React-Hooks/Counter";
import Message from "./React-Hooks/Message";
import Product from "./React-Hooks/Product";
let App =()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">React- Hooks</a>
    </nav>
    <Message /> <hr/>
    <Counter /> <hr/>
    <Product />
    
    </>);
}
export default App;