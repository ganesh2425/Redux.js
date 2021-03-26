import React from "react";
import {useState} from "react";
let CounterReset =()=>{
   const initialCount = 0
    let [count, setCount] = useState(initialCount);
    let incrHandler=()=>{
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return(<>
    <div>
        <h3>Count: {count}</h3>
        <button className="btn btn-primary mr-4"
        onClick={()=>{setCount(prevCount => prevCount + 1)}}>Increment</button>
        <button className="btn btn-success mr-4"
        onClick={()=>{setCount(count - 1)}}>Decrement</button>
        <button className="btn btn-danger mr-4"
        onClick={()=>{setCount(initialCount)}}>Reset</button>
        <button className="btn btn-warning"
        onClick={incrHandler}>Incr5</button>
    </div>
    </>);
}
export default CounterReset;