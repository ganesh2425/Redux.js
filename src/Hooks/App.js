import React from "react";
import User from "./Hooks/User";
import Login from "./Hooks/Login";
import Navbar from "./Hooks/Navbar";
import Time from "./Hooks/Time";
import {Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
let App =()=>{
    return(<>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/User" component={User}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Time" component={Time}></Route>
        </Switch>
      </Router>
    
    
    </>);
}
export default App;