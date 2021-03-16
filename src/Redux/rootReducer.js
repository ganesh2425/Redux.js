
import { combineReducers } from "redux";
import { wishReducer } from "../WishMessage/wish.reducer";

let rootReducer = combineReducers ({
   message: wishReducer
});

export { rootReducer };