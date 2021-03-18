import {createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

let Store = createStore(rootReducer, composeWithDevTools());

export {Store};
