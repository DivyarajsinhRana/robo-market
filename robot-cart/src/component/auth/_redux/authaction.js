import axios from "axios"
import { getRobots } from "./_authcrud"
import { GET_ROBOTS } from "./_authcrud"

export const getrobots = (robots) => {
    return ({
        type : "getrobots",
        payload : robots
    })
}
export const addtocart = (item) => {
    return (
        {
            type : "addtocart",
            payload : item
        }
    )
}
export const removecart = (name) => {
    return {
        type : 'removecart',
        payload : name
    }
}
export const IncreaseQuantity = (item) => {
    // console.log(item)
    return {
        type : "IncreaseQuantity", 
        payload:item
    }
}
export const DecreaseQuantity = (end) => {
    return {
        type : "DecreaseQuantity",
        payload : end
    }
}
export const stockInc = (count) =>{
    return{
        type : "stockincrease",
        payload : count
    }
}
export const stockDec = (count) =>{
    return{
        type : "stockdecrease",
        payload : count
    }
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