import './Button.css';
import {memo} from 'react';

const Button = memo(function Button({onButtonClick,children})
{
   console.log("Button component rendering");
 return(
    <>
    <button className="button" onClick={onButtonClick}>{children}</button>
    </>
 )
})

export default Button;