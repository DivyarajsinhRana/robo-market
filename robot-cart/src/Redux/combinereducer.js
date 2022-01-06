import { combineReducers } from "redux";
import cartReducer from "./cartreducer";
import quantityreducer from "./quantityreducer";
import robotreducer from "./robotreducer";
import stockreducer from "./stockreducer";
const rootreducer = combineReducers({
    robots : robotreducer,
    cart : cartReducer,
    quantity:quantityreducer,
    stock : stockreducer
})
export default rootreducer