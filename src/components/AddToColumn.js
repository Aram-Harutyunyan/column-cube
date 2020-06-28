import React from 'react';

const AddToColumn=(props)=>{
if(props.position){
return (
          <p ><h5 onClick={props.change}>{props.position}</h5></p>
          )
}else return null;
}
export default AddToColumn;