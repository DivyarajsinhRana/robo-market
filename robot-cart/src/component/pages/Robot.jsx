import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, getAllRobots } from '../auth/_redux/authaction';
import Cart from './Cart';
import Robotcard from './Robotcard';


const Robot = () => {
    const dispatch = useDispatch();
    const robotdata = useSelector(state => state.robots.data);
    console.log("selected state >>>", robotdata);
    const [allrobots, setAllrobots] = useState(robotdata);
    useEffect(() => {
        dispatch(getAllRobots());
    }, [])
    useEffect(() => {
        setAllrobots(robotdata)
        // console.log("useStatedata>>>", robotdata);
    }, [robotdata])
    
    const handleClick = (item)=>{
            console.log(item);
            
            dispatch(addtocart(item))
    }
    
    return (
       
        <div className='row mt-2'>
            <Cart/>
            {
                allrobots && allrobots.map((item, index) => {
                    // console.log("item>>>", item.name)
                    return (
                        <div className='col-3 mt-3 gx-5' key={index}>
                            <Robotcard index={index} item={item} handleClick={handleClick} />
                            {/* <button className='btn btn-success' onClick={() =>handleClick(item)} id={index}>Add to cart</button> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Robot
