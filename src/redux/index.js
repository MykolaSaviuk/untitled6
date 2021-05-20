import {createStore} from "redux";
import Todo from "./reducer/Todo";
export let store = createStore(Todo);