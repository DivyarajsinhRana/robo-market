const initialstock = [];

const stockreducer = (state = initialstock, action) => {
    if (action.type === "stockdecrease") {
        // console.log(state)
        const stateDec = action.payload.filter((item) => item.stock = item.stock - 1)
        state = [...state, ...stateDec]
        // console.log(state);
        return state
    } else if (action.type === "stockincrease") {
        const stateInc = action.payload.filter((item) => item.stock = item.stock + 1)
        state = [...state, ...stateInc]
        return state
    }
    else {
        return state
    }

}
export default stockreducer