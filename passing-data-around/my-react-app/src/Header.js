
// 1) ///////////////////////////////////////
import React from "react"

export default function Header() {
    const [user, setUser] = React.useState("Joe")
    
    return (
        <header>
            <p>Current user: {user}</p>
        </header>
    )
}


// 2) ///////////////////////////////////////
// import React from "react"

// export default function Header(props) {
//     return (
//         <header>
//             <p>Current user: {props.user}</p>
//         </header>
//     )
// }
