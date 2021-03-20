import React from 'react';
import { sayGMorningAction, sayGAfternoonAction, sayGNightAction} from "./greet.action";
import {useSelector, useDispatch} from "react-redux";

let Wish =()=>{
    const dispatch = useDispatch()
    let Msg=useSelector((state)=>{
        return state.message;
    })
    let sayGMorning =()=>{
        dispatch(sayGMorningAction());
    }
    let sayGAfternoon =()=>{
        dispatch(sayGAfternoonAction());
    }
    let sayGNight =()=>{
        dispatch(sayGNightAction());
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
                            <button className="btn btn-info ml-3" onClick={sayGMorning}>GM</button>
                            <button className="btn btn-warning ml-3" onClick={sayGAfternoon}>GA</button>
                            <button className="btn btn-success ml-3" onClick={sayGNight}>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Wish;