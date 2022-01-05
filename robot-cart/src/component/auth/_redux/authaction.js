import axios from "axios"
import { getRobots } from "./_authcrud"
import { GET_ROBOTS } from "./_authcrud"

export const getrobots = (robots) => {
    return ({
        type : "getrobots",
        payload : robots
    })
}
export const getAllRobots = () => {
    return (dispatch) => {
            axios.get(GET_ROBOTS).then((res)=>{
                // console.log("data>>>",res.data);
                const robot = res.data
                dispatch(getrobots(robot));
                return res.data
            }).catch(error=> error.message);
    }
}   