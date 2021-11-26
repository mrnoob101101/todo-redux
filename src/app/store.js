import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import taskReducer from "./reduser";

export const store = createStore(taskReducer, devToolsEnhancer(undefined));
