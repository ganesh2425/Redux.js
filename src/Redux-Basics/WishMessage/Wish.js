import React from 'react';
import { sayGMAction, sayGAAction, sayGNAction} from "./wish.action";
import {useSelector, useDispatch} from "react-redux";

let Wish =()=>{
    const dispatch = useDispatch()
    let Msg=useSelector((state)=>{
        return state.message;
    })
    let sayGM =()=>{
        dispatch(sayGMAction());
    }
    let sayGA =()=>{
        dispatch(sayGAAction());
    }
    let sayGN =()=>{
        dispatch(sayGNAction());
    }
    
    return(
        <>
        <div className="container m-5">
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>Message: {Msg.message}</h2>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-primary ml-3" onClick={sayGM}>GM</button>
                            <button className="btn btn-danger ml-3" onClick={sayGA}>GA</button>
                            <button className="btn btn-success ml-3" onClick={sayGN}>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Wish;