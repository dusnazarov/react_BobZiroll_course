/////////////////////////////

import React from "react"

export default function App() {    
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(count + 1)
    }
    
    function subtract() {
        setCount(count - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
};

////////////////////////////////
// import React from "react"

// export default function App() {
//     const [count, setCount] = React.useState(0)
    
   
//     function add() {
//         setCount(prevCount => prevCount + 1)
//         console.log(count+1)
        
//     }
//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//         console.log(count-1)
        
//     }    
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={subtract}>–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }


////////////////////////////////
// import React from "react"
// import Count from "./Count"

// export default function App() {
//     const [count, setCount] = React.useState(0)
   
//     function add() {
//         setCount(prevCount => prevCount + 1)
//         console.log(count+1)
        
//     }
//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//         console.log(count-1)
        
//     }    
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={subtract}>–</button>
           
//             <Count number={count}/>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }


