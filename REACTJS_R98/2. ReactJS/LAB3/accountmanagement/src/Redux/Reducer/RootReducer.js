import { combineReducers } from "redux";
import { formReducer } from "./FormReducer";

const RootReducers = combineReducers({
    formState: formReducer,
});

export default RootReducers;


