


const Robotcard = ({item,index,handleClick}) => {
        
    return (
        <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src={item.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Name</strong>:{item.name}</h5>
                                        <p className="card-text"><strong>Material</strong>:{item.material}</p>
                                        <p className="card-text"><strong>Price</strong>:{item.price}</p>
                                        <p className="card-text"><strong>Stock</strong>:{item.stock}</p>
                                        <p className="card-text"><strong>createdAt</strong>:{item.createdAt}</p>
                                       <button className='btn btn-success' onClick={() =>handleClick(item)} id={index}>Add to cart</button>
                                    </div>
                            </div>
    )
}

export default Robotcard
