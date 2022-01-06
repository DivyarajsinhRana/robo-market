import { combineReducers } from "redux";
import cartReducer from "./cartreducer";
import quantityreducer from "./quantityreducer";
import robotreducer from "./robotreducer";
const rootreducer = combineReducers({
    robots : robotreducer,
    cart : cartReducer,
    quantity:quantityreducer
})
export default rootreducer