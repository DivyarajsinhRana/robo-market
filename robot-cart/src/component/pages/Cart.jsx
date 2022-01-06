import { Drawer } from '@material-ui/core';
import { RemoveCircle} from '@material-ui/icons';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removecart } from '../auth/_redux/authaction';
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
    // setting total amount
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const amountArray=cartitem.map(cart=>cart.price);
    const amountArrayInt=amountArray.map(price=>price = parseFloat(price));
    console.log(amountArray);
    const [amount,setAmount] = useState(0);
    const total = ()=>{ if(cartitem.length === 0) {
        setAmount(0)
    }
    else{
        const totalamount = amountArrayInt.reduce(reducer);
        setAmount(totalamount);
    }}
    useEffect(() => {
        total();
    }, [cartitem])
    return (
        <div>
            <button className="btn btn-info" onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none" /><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" /></svg>
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
                                        <p className="card-text"><strong>Price</strong>:<mdiCurrencyInr/> {item.price}</p>
                                        <p className="card-text"><strong>Stock</strong>:{item.stock}</p>
                                        <p className="card-text"><strong>createdAt</strong>:{item.createdAt}</p>
                                        <button className='btn btn-danger' onClick={()=>{
                                            // console.log("removed")
                                            ;dispatch(removecart(item.name))} }><RemoveCircle/>Remove</button>
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
