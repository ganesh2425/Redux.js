import {rootReducer} from "./rootReducer";
import {createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

let Store = createStore(rootReducer,composeWithDevTools());

export {Store};