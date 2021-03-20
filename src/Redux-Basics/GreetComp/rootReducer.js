import {combineReducers} from "redux";
import {messageReducer} from "./greet.reducer";

let rootReducer = combineReducers({
    message: messageReducer,
})
export {rootReducer};