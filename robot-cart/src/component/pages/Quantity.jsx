import React from 'react'

const Quantity = () => {
    return (
        <>
           <div className='mx-auto'>
                                                <span onClick={()=>handleDec(count)}><RemoveOutlined/></span>
                                                <span className='mx-2'>Quantity:{count}</span>
                                                <span onClick={()=>handleInc(count)} ><AddOutlined/></span>
         </div>  
        </>
    )
}

export default Quantity
