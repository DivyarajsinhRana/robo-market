import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootreducer from "./combinereducer";

export const store = createStore(rootreducer,applyMiddleware(thunk));

// store.dispatch(getAllRobots())
// console.log(store.getState());  
// store.subscribe(()=>console.log("updated state",store.getState()))