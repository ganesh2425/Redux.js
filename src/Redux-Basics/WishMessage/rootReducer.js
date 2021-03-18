
import { combineReducers } from "redux";
import { wishReducer } from "./wish.reducer";
let rootReducer = combineReducers ({
   message: wishReducer,
});

export { rootReducer };