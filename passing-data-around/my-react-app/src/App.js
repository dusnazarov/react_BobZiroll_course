
// 1) /////////////////////////////
import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
    return (
        <main>
            <Header />
            <Body />
        </main>
    )
}


// 2) /////////////////////////////
// import React from "react"
// import Header from "./Header"
// import Body from "./Body"

// export default function App() {
//     const [user, setUser] = React.useState("Bob")
    
//     return (
//         <main>
//             <Header user={user} />
//             <Body user={user} />
//         </main>
//     )
// }
