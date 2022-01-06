const initialstock = 0 ;

const stockreducer = (state=initialstock,action) => {
    if(action.type==="stockdecrease"){
            state= action.payload - 1
            return state
    }else if(action.type==="stockincrease"){
            state = action.payload + 1
            return state
    }
    else {
        return state
    }

}
export default stockreducer