import React from "react";
import Counter from "./Counter";
import Message from "./Message";
import Product from "./Product";
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