import { combineReducers } from "redux";
import data from "./Data";

const allData = combineReducers({
    data: data
})

export default allData