import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRobots } from '../auth/_redux/authaction';
const Robot = () => {
    const dispatch = useDispatch();
    const robotdata = useSelector(state => state.data);
    console.log("selected state >>>", robotdata);
    const [allrobots, setAllrobots] = useState(robotdata);
    useEffect(() => {
        dispatch(getAllRobots());
    }, [])
    useEffect(() => {
        setAllrobots(robotdata)
        console.log("useStatedata>>>", robotdata);
    }, [robotdata])
    return (
        <div className='row'>
            {
                allrobots && allrobots.map((item, index) => {
                    console.log("item>>>", item.name)
                    return (
                        <div className='col-3 mt-3 gx-5'>
                            <div class="card" style={{width: "18rem"}}>
                                <img class="card-img-top" src={item.image} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>Name</strong>:{item.name}</h5>
                                        <p class="card-text"><strong>Material</strong>:{item.material}</p>
                                        <p class="card-text"><strong>Price</strong>:{item.price}</p>
                                        <p class="card-text"><strong>Stock</strong>:{item.stock}</p>
                                        <p class="card-text"><strong>createdAt</strong>:{item.createdAt}</p>
                                       <button className='btn btn-success'>Add to cart</button>
                                    </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Robot
