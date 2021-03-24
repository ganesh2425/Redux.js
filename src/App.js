import React from "react";
import ContactApp from "./ContactAppFunctional/ContactApp";
let App =()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">ContactApp-with-Functional-Component</a>
    </nav>
    <ContactApp/>
    </>);
}
export default App;