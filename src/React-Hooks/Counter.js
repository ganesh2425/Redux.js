import React from "react";
import {useState} from "react";
let Counter =()=>{
    let [counter, setCounter] = useState(1);
    return(<>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">{counter}</div>
                    <div className="card-body">
                        <button className="btn btn-info mr-4" onClick={()=>{
                            setCounter(counter + 1)
                        }}>incrCounter</button>
                        <button className="btn btn-dark" onClick={()=>{
                            setCounter(counter - 1)
                        }}>decrCounter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>);
}
export default Counter;