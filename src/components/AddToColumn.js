import React from 'react';

const AddToColumn=(props)=>{
return (
          <p ><h5 onClick={props.change}>{props.position}</h5></p>
    )
}
export default AddToColumn;