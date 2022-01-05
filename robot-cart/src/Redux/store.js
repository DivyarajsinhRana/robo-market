import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllRobots } from "../component/auth/_redux/authaction";
import robotreducer from "./robotreducer";
export const store = createStore(robotreducer,applyMiddleware(thunk));

// store.dispatch(getAllRobots())
// console.log(store.getState());  
// store.subscribe(()=>console.log("updated state",store.getState()))