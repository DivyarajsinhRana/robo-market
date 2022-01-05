const initialstate = []

const cartReducer = (state=initialstate,action) =>{
    if(action.type==="addtocart"){
        state = [...state,action.payload];
        return state
    }
    else if(action.type==="removecart") {
        const filterRobot = state.filter(robot=>robot.name!==action.payload ? robot:null    
            && robot )
            state=filterRobot;
            // console.log("filtered robor >>>",state);
        return state
    }
    else {
        return state
    }
}


export default cartReducer