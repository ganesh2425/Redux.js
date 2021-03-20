import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {incrAction,decrAction} from "./Counter.action";
let Counter =()=>{
    const dispatch = useDispatch();
    let counterValue = useSelector((state)=>{
        return state.counter
    })

    let incrHandler =()=>{
        dispatch(incrAction());
    }
    let decrHandler =()=>{
        dispatch(decrAction());
    }
    return(<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h3>Counter Example</h3>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-secondary mr-2" onClick={incrHandler}>+</button>
                        {counterValue.counter.qty}
                        <button className="btn btn-success ml-2" onClick={decrHandler}>-</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>);
}
export default Counter;