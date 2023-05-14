//  3)  ///////////////////////////////////////////
// import React from "react"

// export default function Box(props) {
//     const styles = {
//         backgroundColor: props.on ? "#222222" : "none"
//     }
    
//     return (
//         <div style={styles} className="box"></div>
//     )
// }

// 4) /////////////////   Boxes challenge part 3.1-local state     //////////////////////////
// import React from "react"

// export default function Box(props) {
//     const [on, setOn] = React.useState(props.on)
//     // console.log(props.on)
    
//     const styles = {
//         backgroundColor: on ? "#222222" : "transparent"
//     }
    
//     function toggle() {
//         setOn(prevOn => !prevOn)
//     }
    
//     return (
//         <div style={styles} className="box" onClick={toggle}></div>
//     )
// }

// 5) //////////////////// Boxes challenge part 3.2-unified state   ///////////////////////
// import React from "react"

// export default function Box(props) {
//     const styles = {
//         backgroundColor: props.on ? "#222222" : "transparent"
//     }
    
//     return (
//         <div 
//             style={styles} 
//             className="box"
//             onClick={()=>props.toggle(props.id)}
//         >
//         </div>
//     )
// }

// 6) //////////////////// Boxes challenge part 4  ///////////////////////
import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id)}
        >
        </div>
    )
}