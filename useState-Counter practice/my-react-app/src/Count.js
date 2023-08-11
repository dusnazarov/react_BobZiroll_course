import React from "react"


/////////// props //////
// export default function Count(props) {
//     // console.log(props.number)
//     return (
//          <div className="counter--count">
//             <h1>{props.number}</h1>
//         </div> 
//     )
// }


/////////// distuction //////
export default function Count({number}) {
    // console.log(props.number)
    return (
         <div className="counter--count">
            <h1>{number}</h1>
        </div> 
    )
}