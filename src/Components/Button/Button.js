import './Button.css';
function Button({onButtonClick,children})
{
 return(
    <>
    <button className="button" onClick={onButtonClick}>{children}</button>
    </>
 )
}
export default Button;