import React from 'react'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

function Product(props) {
    return (
        <div className="products">
            <ol>
                <RemoveCircleIcon onClick={()=>props.DeleteItem(props.id)}/>
                <li>{props.Data}</li>
            </ol>
        </div>
    )
}

export default Product
