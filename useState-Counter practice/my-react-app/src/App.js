import React from "react"
import Count from "./Count"

/////////////////////////////
// export default function App() {    
//     const [count, setCount] = React.useState(0)    
    
    
//     return (
//         <div className="counter">
//             {/* <button className="counter--minus" onClick={function subtract() {setCount(prevCount => prevCount - 1)} }>–</button> */}
//             <button className="counter--minus" onClick={() => setCount(prevCount => prevCount - 1)}>–</button> 
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             {/* <button className="counter--plus" onClick={function add(){setCount(prevCount => prevCount + 1)} }>+</button> */}
//             <button className="counter--plus" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//         </div>
//     )
// };



/////////////////////////////
// export default function App() {    
//     const [count, setCount] = React.useState(0)
    
//     // function add() {
//     //     setCount(count + 1)
//     // }

//     const add = () => {        
//         setCount(prevCount => prevCount + 1)
        
//     }
    
//     // function subtract() {
//     //     setCount(count - 1)
//     // }

//     const subtract = () => {
//         setCount(prevCount => prevCount - 1)
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
// };


/////////////////////////////
// export default function App() {    
//     const [count, setCount] = React.useState(0)
    
//     // function add() {
//     //     setCount(count + 1)
//     // }

//     const add = () => {        
//         setCount(prevCount => prevCount + 1)
        
//     }
    
//     // function subtract() {
//     //     setCount(count - 1)
//     // }

//     const subtract = () => {
//         setCount(prevCount => prevCount - 1)
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
// };


////////////////////////////////
export default function App() {
    const [count, setCount] = React.useState(0)
   
    function add() {
        setCount(prevCount => prevCount + 1)
        console.log(count+1)
        
    }
    function subtract() {
        setCount(prevCount => prevCount - 1)
        console.log(count-1)
        
    }    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>           
            <Count number={count}/>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

