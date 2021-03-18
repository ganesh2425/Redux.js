import { GOOD_MORNING, GOOD_NIGHT } from "./greet.action";

let initialState ={
    message: "Hello..Bangalore",
}
let messageReducer =(state = initialState, action)=>{
    switch (action.type){
        case GOOD_MORNING:
        return{
            message: "Good Morning",
        };
        case GOOD_NIGHT:
        return{
            message: "Good night have a sweet dreams",
        };
        default:
        return state;
    }
}
export {messageReducer};