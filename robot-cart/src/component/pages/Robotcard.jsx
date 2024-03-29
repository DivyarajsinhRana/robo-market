import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addtocart, removecart,IncreaseQuantity, stockDec} from '../auth/_redux/authaction';

const Robotcard = ({item,index}) => {
    const dispatch = useDispatch();
    const [btnTxt,setbtnTxt]=useState("Add to cart");
    const [click,setClick] = useState(false);
    const quantity = useSelector(state=> state.quantity); 
    const handleClick = (item) => {
        // console.log("cartquantitu>>>",i) 
        // console.log(item.name);
        setClick(true);
        // console.log("click>>>",click);
        // console.log("btntxt>>>",btnTxt);
        // console.log("class>>",btnStyle);
        if(!click){
            setbtnTxt("Add to cart");
            dispatch(addtocart(item))
            dispatch(IncreaseQuantity(item,item.name));
            // console.log("stock>>>",item);
            dispatch(stockDec(item));
        }
        else{
            setbtnTxt("Added to cart");
            alert("Already added to cart")
        }
    }
    return (
        <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src={item.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Name</strong>:{item.name}</h5>
                                        <p className="card-text"><strong>Material</strong>:{item.material}</p>
                                        <p className="card-text"><strong>Price</strong>:{item.price}</p>
                                        <p className="card-text"><strong>Stock</strong>:{item.stock}</p>
                                        <p className="card-text"><strong>createdAt</strong>:{item.createdAt}</p>
                                       <button className="btn btn-success" onClick={() =>handleClick(item,item.name)} id={index}>{btnTxt}</button>
                                    </div>
                            </div>
    )
}

export default Robotcard
