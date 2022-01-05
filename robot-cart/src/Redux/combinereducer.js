import { combineReducers } from "redux";
import cartReducer from "./cartreducer";
import robotreducer from "./robotreducer";

const rootreducer = combineReducers({
    robots : robotreducer,
    cart : cartReducer,
})
export default rootreducer