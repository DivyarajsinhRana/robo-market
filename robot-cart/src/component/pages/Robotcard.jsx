import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addtocart, removecart,IncreaseQuantity, stockDec} from '../auth/_redux/authaction';

const Robotcard = ({item,index,stock}) => {
    const dispatch = useDispatch();
    const [btnTxt,setbtnTxt]=useState("Add to cart");
    const [click,setClick] = useState(false);
    const handleClick = (item) => {
        // console.log(item.name);
        setClick(true);
        // console.log("click>>>",click);
        // console.log("btntxt>>>",btnTxt);
        // console.log("class>>",btnStyle);
        if(!click){
            setbtnTxt("Add to cart");
            dispatch(addtocart(item))
            dispatch(IncreaseQuantity(item));
            dispatch(stockDec(item.stock));
        }
        else{
            setbtnTxt("Added to cart");
            alert("Already added to cart")
        }
    }
    // const stock = useSelector(state=>state.stock);
    // console.log("stock>>>",stock)
    return (
        <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src={item.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Name</strong>:{item.name}</h5>
                                        <p className="card-text"><strong>Material</strong>:{item.material}</p>
                                        <p className="card-text"><strong>Price</strong>:{item.price}</p>
                                        <p className="card-text"><strong>Stock</strong>:{item.stock}</p>
                                        <p className="card-text"><strong>createdAt</strong>:{item.createdAt}</p>
                                       <button className="btn btn-success" onClick={() =>handleClick(item)} id={index}>{btnTxt}</button>
                                    </div>
                            </div>
    )
}

export default Robotcard
