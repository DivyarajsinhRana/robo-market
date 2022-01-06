import { Badge, Drawer } from '@material-ui/core';
import { AddOutlined, AddShoppingCart, Remove, RemoveCircle, RemoveCircleOutline, RemoveOutlined} from '@material-ui/icons';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removecart,IncreaseQuantity,DecreaseQuantity } from '../auth/_redux/authaction';
const Cart = () => {
    const dispatch = useDispatch()
    const cartitem = useSelector(state => state.cart);
    // console.log("cartedItem",cartitem);
    // console.log("carted Item >>> ",cartitem)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const quantity = useSelector(state=> state.quantity); 
    console.log("Count>>>>",quantity);
    // setting total amount
    const [amount,setAmount] = useState(0);
    const price = quantity.map((item)=> item.price = parseFloat(item.price));
    console.log("price>>>>",price);
    const pricerreducer = (previousValue, currentValue) => previousValue + currentValue
   
    // const reducer = (previousValue, currentValue) => previousValue + currentValue;
    // const amountArray=cartitem.map(cart=>cart.price);
    // const amountArrayInt=amountArray.map(price=>price = parseFloat(price));
    // console.log(amountArray);
    // const [count,setCount] = useState(1)
    const totalamount= price.reduce(pricerreducer,0)
    const total = ()=>{ if(cartitem.length === 0) {
        setAmount(0)
    }
    else{
        setAmount(totalamount);
    }}
    useEffect(() => {
        total();
    }, [quantity])

    
    const handleInc = (item) =>{
        dispatch(IncreaseQuantity(item))
    }
    const handleDec = (quantity) =>{
        dispatch(DecreaseQuantity(quantity.length))
    }
    return (
        <div>
            <button className="btn btn-info mx-3" onClick={handleOpen}>
               <AddShoppingCart/> 
               <span><strong>{cartitem.length}</strong></span> 
            </button>
            <Drawer open={open} onClose={handleClose} anchor="right" className="cartDrawer" variant='temporary'>
                <h2>You have {cartitem.length} item in yout cart</h2>
                <div>
        {
              cartitem && cartitem.map((item,index)=>{
                return (
                    <div className="card mx-auto" style={{width: "18rem"}} key={index}>
                                <img className="card-img-top" src={item.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Name</strong>:{item.name}</h5>
                                        <p className="card-text"><strong>Material</strong>:{item.material}</p>
                                        <p className="card-text"><strong>Price</strong>: {item.price}</p>
                                        <p className="card-text"><strong>Stock</strong>:{item.stock}</p>
                                        <p className="card-text"><strong>createdAt</strong>:{item.createdAt}</p>
                                        <button className='btn btn-danger' onClick={()=>{
                                            // console.log("removed")
                                            ;dispatch(removecart(item.name))} }><RemoveCircle/>Remove</button>
                                    </div>
                                    <div className='mx-auto'>
                                                <span onClick={()=>handleDec(item)}><RemoveOutlined/></span>
                                                <span className='mx-2'>Quantity:{quantity.length}</span>
                                                <span onClick={()=>handleInc(item)} ><AddOutlined/></span>
                                    </div>
                                    <div>
                                    <p className="card-text"><strong>Amount</strong>: {amount}</p>
                                    </div>
                            </div>
                )
            })  
        }    
            <div>{
                    amount === 0 ? null :
                <p><strong>Total:</strong>{amount}</p>
                }
               
            </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Cart
