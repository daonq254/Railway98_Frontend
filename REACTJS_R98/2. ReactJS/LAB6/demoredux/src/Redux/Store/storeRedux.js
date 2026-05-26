import { createStore } from "redux";
import RootReducer from "../Reducers/rootReducer";

export let store = createStore(RootReducer);
