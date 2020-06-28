import React from 'react';

const AddToColumn=(props)=>{
if(props.position){
return (
          <div className="box" ><h5 onClick={props.change}>{props.position}</h5></div>
          )
}else return null;
}
export default AddToColumn;