import React from "react";
import CountReset from "./Hooks-examples/CounterReset/CountReset";
let App =()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">Reset-Counter</a>
    </nav>
    <CountReset/>
    </>);
}
export default App;