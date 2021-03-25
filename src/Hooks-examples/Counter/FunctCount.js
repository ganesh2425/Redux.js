import React from "react";
import {useState} from "react"

let FunCount =()=>{
    let [count, setCount] = useState(0);
    return(<>
         <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h2>Functional Component Counter</h2>
                                <h3>Count: {count}</h3></div>
                            <div className="card-body">
                                <button className="btn btn-danger mr-4" 
                                onClick={()=>{setCount(count+1)}}>Incr</button>
                                 <button className="btn btn-warning" 
                                onClick={()=>{setCount(count-1)}}>Decr</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    
    </>);
}
export default FunCount;