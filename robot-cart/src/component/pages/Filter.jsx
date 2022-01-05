import React from 'react'

const Filter = (props) => {
    return (
        <div className='d-flex justify-content-between mt-3 ml-3'>
            <div className='text-center mx-3 '>
                <h3>{props.length} robots</h3>
            </div>
                    <div className='mx-3'>
                        <select className="form-select" aria-label="Default select example" value={props.material} onChange={props.handleChange}>
                            <option value="Available material">Available by material</option>

                            <option value="Soft">Soft</option>
                            <option value="Granite">Granite</option>
                            <option value="Cotton">Cotton</option>
                            <option value="Concrete">Concrete</option>
                            <option value="Steel">Steel</option>
                            <option value="Frozen">Frozen</option>
                            <option value="Metal">Metal</option>
                            <option value="Plastic">Plastic</option>
                            <option value="Rubber">Rubber</option>
                            <option value="Fresh">Fresh</option>
                            <option value="Wooden">Wooden</option>
                        </select>
                    </div>
        </div>
    )
}

export default Filter
