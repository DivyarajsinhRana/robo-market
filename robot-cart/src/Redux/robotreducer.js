const initialstate  = {
    robots : []
};
// const robots = [] 
const robotreducer = (state = initialstate,action)=> {
        if(action.type==="getrobots"){
            // console.log("payload>>>",action.payload);
            // console.log("state",state);
            state=action.payload 
            // console.log("state",state);
            return state 
         }
        else {
            return state
        }
} 

export default robotreducer;