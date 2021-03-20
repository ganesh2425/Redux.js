import {combineReducers} from "redux";
import {counterReducer} from "./Counter.reducer";

let rootReducer = combineReducers({
    counter : counterReducer,
})
export {rootReducer};