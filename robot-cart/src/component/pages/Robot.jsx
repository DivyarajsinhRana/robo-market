import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, getAllRobots } from '../auth/_redux/authaction';
import Cart from './Cart';
import Filter from './Filter';
import Robotcard from './Robotcard';


const Robot = () => {
    const dispatch = useDispatch();
    const robotdata = useSelector(state => state.robots.data);
    // console.log("selected state >>>", robotdata);
    // const material = robotdata.map((item)=> item.material);
    // console.log("material>>>", material);
    // const set = new Set(material);
    // console.log("set>>",set);
    const [allrobots, setAllrobots] = useState([]);
    const [filterRobots,setFilterRobots] = useState([]);
    useEffect(() => {
        dispatch(getAllRobots());
    }, [])
    useEffect(() => {
        setAllrobots(robotdata)
        setFilterRobots(robotdata);
        // console.log("useStatedata>>>", robotdata);
    }, [robotdata])
    
    const handleClick = (item)=>{
            // console.log(item);
            
            dispatch(addtocart(item))
    }
  const length = filterRobots && filterRobots.length;
    const handleChange = (e)=>{
        // console.log(e.target.value);
        if(e.target.value === "Available material") {
            setFilterRobots(allrobots)
        }
        else {
            setFilterRobots(allrobots.filter(item => item.material === e.target.value))
        }
    }
    return (
       
        <div className='row mt-2'>
            <Cart/>
            <Filter length={length} handleChange={handleChange} />
            {
                filterRobots && filterRobots.map((item, index) => {
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
