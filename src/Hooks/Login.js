import React from "react";
class Login extends React.Component{
    componentDidMount(){
        console.log("component Did Mount executing");
    }
    componentWillUnmount(){
        console.log("component Will UnMount executing");
    }
    render(){
        return(<>
        <h2>component life cycle methods</h2>
        </>);
    }
}
export default Login;