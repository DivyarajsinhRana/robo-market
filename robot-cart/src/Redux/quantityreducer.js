const initialstate = [] ;

const quantityreducer = (state=initialstate,action)=>{
    if(action.type==="IncreaseQuantity"){
        // console.log(state)
        // console.log(action.payload);
        state=[...state,action.payload]
        return state
    }
    else if(action.type==="DecreaseQuantity"){
        console.log(state);
        state = state.slice(1,action.payload);
        console.log(state);
        return state
    }
    else {
        return state
    }
}
export default quantityreducer