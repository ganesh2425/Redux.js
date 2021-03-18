import React from "react";
import {useState} from "react";
let Message = ()=>{
    let [greet, setGreet] = useState("Hello...Kashmir")
    return(<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        {greet}
                    </div>
                    <div className="card-body">
                        <button className="btn btn-primary mr-4" onClick={()=>{
                            setGreet("Good morning have a good day")
                        }}>GM</button>
                        <button className="btn btn-success mr-4" onClick={()=>{
                            setGreet("Good night..sweet dreams")
                        }}>GN</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>);
}
export default Message;