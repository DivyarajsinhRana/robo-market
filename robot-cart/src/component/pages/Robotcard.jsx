import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addtocart, removecart} from '../auth/_redux/authaction';
const Robotcard = ({item,index}) => {
    const dispatch = useDispatch();
    const [btnTxt,setbtnTxt]=useState("Add to cart");
    const [click,setClick] = useState(false);
    const [btnStyle,stebtnStyle] = useState("success");
    const handleClick = (item) => {
        console.log(item.name);
        setClick(!click);
        console.log("click>>>",click);
        console.log("btntxt>>>",btnTxt);
        console.log("class>>",btnStyle);
        if(!click){
            setbtnTxt("remove");
            dispatch(addtocart(item))
            stebtnStyle("danger")
        }
        else{
            setbtnTxt("Add to cart");
            stebtnStyle("success");
            dispatch(removecart(item.name));
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
                                       <button className={`btn btn-${btnStyle}`} onClick={() =>handleClick(item)} id={index}>{btnTxt}</button>
                                    </div>
                            </div>
    )
}

export default Robotcard
