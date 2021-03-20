import {INCR, DECR} from "./Counter.action";
let initialState = {
    counter : {
        qty: 1,
    }
}
let counterReducer = (state = initialState, action)=>{
    switch(action.type){
        case INCR:{
            return{
                counter:{
                    qty: state.counter.qty + 1,
                }
            }
        }
        case DECR:{
            return{
                counter:{
                    qty: state.counter.qty - 1,
                }
            }
        }
        default:
            return state;
    }
}
export {counterReducer};