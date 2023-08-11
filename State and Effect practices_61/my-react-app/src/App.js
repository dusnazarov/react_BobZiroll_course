import React from "react"
import WindowTracker from "./WindowTracker"

// 1) - 1) WindowTracker.js //////////   State and Effect practices  61/////////////

// export default function App() {    
//     return (
//         <div className="container">
//             <button>
//                 Toggle WindowTracker
//             </button>
//             <WindowTracker />
//         </div>
//     )
// }


// 2) - 2),3) WindowTracker.js////////////// State and Effect practices  61 //////

export default function App() {
   
    const [show, setShow] = React.useState(true)

    function toggle() {
        setShow(prevShow => !prevShow)
    }
    
    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            { show && <WindowTracker />}
        </div>
    )
}


// 3) - 2),3) WindowTracker.js  ////////////// useEffect cleanup function 62  //////
// import React from "react"
// import WindowTracker from "./WindowTracker"

// export default function App() {
   
//     const [show, setShow] = React.useState(true)

//     function toggle() {
//         setShow(prevShow => !prevShow)
//     }
    
//     return (
//         <div className="container">
//             <button onClick={toggle}>
//                 Toggle WindowTracker
//             </button>
//             { show && <WindowTracker />}
//         </div>
//     )
// };