
import { combineReducers } from "redux";
import { messageReducer } from "../GreetComp/greet.reducer";
import {wishReducer} from "../WishMessage/wish.reducer"

let rootReducer = combineReducers ({
   message: wishReducer,
   Wish: messageReducer,
});

export { rootReducer };