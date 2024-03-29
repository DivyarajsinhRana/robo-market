import moment from 'moment';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRobots } from '../auth/_redux/authaction';
import Cart from './Cart';
import Filter from './Filter';
import Robotcard from './Robotcard';
const Robot = () => {

    const dispatch = useDispatch();
    const robotdata = useSelector(state => state.robots.data);
    console.log(robotdata);
    // const [itemstock,setItemStock] = useState();
    // console.log("robotstock>>>",robotdata.stock);
    const [allrobots, setAllrobots] = useState([]);
    // const [filterRobots, setFilterRobots] = useState([]);
    useEffect(() => {
        dispatch(getAllRobots());
    }, [])
    const filterRobots = robotdata && robotdata.filter((item) =>
        item.createdAt = moment(item.createdAt).format("DD/MM/YYYY")
    )

    useEffect(() => {
        setAllrobots(filterRobots);
    }, [robotdata])
    const length = allrobots && allrobots.length;
    const handleChange = (e) => {
        if (e.target.value === "Available material") {
            setAllrobots(filterRobots)
        }
        else {
            setAllrobots(filterRobots.filter(item => item.material === e.target.value))
        }
    }
    const stock = useSelector(state => state.stock);
    // console.log("stock>>>",stock)
    return (
        <div className='row mt-2'>
            <Cart />
            <Filter length={length} handleChange={handleChange} />
            {
                allrobots && allrobots.map((item, index) => {
                    // console.log("item>>>",item)
                    return (
                        <div className='col-3 mt-3 gx-5' key={index}>
                            <Robotcard index={index} item={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Robot