import React from 'react'
import {useState} from 'react';
function SetCount({onValueSet}) {
    const[enteredNum,setEnteredNum] = useState(0);
    const handleInputChange = (event) =>
        {
         const newNum = event.target.value;
         setEnteredNum(newNum);
        }
        console.log("SetCount Component Rendering");
    
  return (
    <div>
        <input type='number' onChange={handleInputChange}/>
          <button className='button' onClick={()=>onValueSet(enteredNum)}>Set</button>  
    </div>
  )
}

export default SetCount;