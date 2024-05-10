import './Content.css';
import {memo} from 'react';
//  const Content = memo (function Counter ({counterValue})
// {
//     console.log("Content component rendering");
//     return(
//         <div className="counter-container">
//             <p className="counter-value">This is a Counter App!
//             <p className="counter-value">
//                 {counterValue}
//             </p>
//             </p>
//         </div>
//     )
// })
function Content ({counterValue})
{
    console.log("Content component rendering");
    return(
        <div className="counter-container">
            <p className="counter-value">This is a Counter App!
            <p className="counter-value">
                {counterValue}
            </p>
            </p>
        </div>
    )
}

export default Content;