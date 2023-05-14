
/////////////////////////////
// import React from "react"

// export default function App() {
//     const [isImportant, setIsImportant] = React.useState("Yes")
    
    
//     function handleClick() {
//         setIsImportant("No")
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Is state important to know?</h1>
//             <div className="state--value" onClick={handleClick}>
//                 <h1>{isImportant}</h1>
//             </div>
//         </div>
//     )
// };


//////////////////////////////////////////////////////////
// import React from "react"


// export default function App() {    
//     const isGoingOut = false
    
//     let answer = isGoingOut === true ? "Yes" : "No"
//     if(isGoingOut === true) {
//         answer = "Yes"
//     } else {
//         answer = "No"
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div className="state--value">
//                 <h1>{answer}</h1>
//             </div>
//         </div>
//     )
// };

////////////////////////////////////////////
// import React from "react"

// export default function App() {
//     const [isGoingOut, setIsGoingOut] = React.useState(true)
    
//     function changeMind() {
//         setIsGoingOut(prevState => !prevState)
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div onClick={changeMind} className="state--value">
//                 <h1>{isGoingOut ? "Yes" : "No"}</h1>
//             </div>
//         </div>
//     )
// }


////////////////////////////////////////////
// import React from "react"

// export default function App() {
//     const [isGoingOut, setIsGoingOut] = React.useState(true)
    
//     function changeMind() {
//         setIsGoingOut(prevState => !prevState)
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div onClick={changeMind} className="state--value">
//                 <h1>Yes</h1>
//             </div>
//         </div>
//     )
// }
