import React from "react";
import {useState} from "react";
let One =()=>{
    let [name, setName] = useState({firstName:"", lastName:""})
    return(<>
    <form>
        <div>
            <input type="text"
            value={name.firstName}
            onChange={(event)=>setName({...name, firstName:event.target.value})}/>
            <input type="text"
            value={name.lastName}
            onChange={(event)=>setName({...name, lastName:event.target.value})}/>
            <h2>Your first name is -{name.firstName}</h2>
            <h2>Your lastName is -{name.lastName}</h2>
        </div>
    </form>
    </>);
}
export default One;