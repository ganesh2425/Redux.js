import React from "react";
import ClassCount from "./Hooks-examples/Counter/ClassCount";
import FunCount from "./Hooks-examples/Counter/FunctCount";
let App =()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">Counter-Examples</a>
    </nav>
    <ClassCount/> <hr/>
    <FunCount/>
    </>);
}
export default App;