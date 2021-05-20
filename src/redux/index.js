import {createStore} from "redux";
import counterReducer from "./reducer/counterReducer";

export let store = createStore(counterReducer);