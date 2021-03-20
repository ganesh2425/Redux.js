import {GOOD_MORNING,GOOD_AFTERNOON,GOOD_NIGHT} from "./greet.action";
let initialState ={
    message: "Hello",
}
let messageReducer = (state= initialState, action)=>{
    switch(action.type){
        case GOOD_MORNING:{
            return{
                message: "Hello World Good Morning",
            }
        }
        case GOOD_AFTERNOON:{
            return{
                message: "Hello World Good Afternoon",
            }
        }
        case GOOD_NIGHT:{
            return{
                message: "Hello World Good Night",
            }
        }
        default:
            return state;
    }
}
export {messageReducer};