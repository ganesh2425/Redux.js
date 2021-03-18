import React from "react";
import { sayGMAction,sayGNAction } from "./greet.action";
import {useSelector, useDispatch} from "react-redux";

let Greet=() =>  {

    let messageData = useSelector((state)=>{return state.messageReducer});
    let dispatch = useDispatch();
    let sayGM =()=>{
        dispatch(sayGMAction());
    }
    let sayGN =()=>{
        dispatch(sayGNAction());
    }
    return(<React.Fragment>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <pre>{JSON.stringify(messageData)}</pre>
                            <h4>Message: Hello World</h4>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-primary mr-3" onclick={sayGM}>GM</button>
                            <button className="btn btn-success" onClick={sayGN}>Gn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>)
}
export default Greet;