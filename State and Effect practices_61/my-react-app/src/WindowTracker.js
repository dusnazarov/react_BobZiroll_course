import React from "react"

// 1) ////////////////////////////////////////////

// export default function WindowTracker() {
//     return (
//         <h1>Window width: { window.innerWidth }</h1>
//     )
// }

// 2)  ////////////////////////////////////////////

export default function WindowTracker() {

    React.useEffect(() => {
        window.addEventListener("resize", function() {
            console.log("Resized")
        })
    }, [])
    return (
        <h1>Window width: {window.innerWidth}</h1>
    )
}

// 3)  ////////////////////////////////////////////

// export default function WindowTracker() {

//     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

//     React.useEffect(() => {
//         window.addEventListener("resize", function() {
//             setWindowWidth(window.innerWidth)
           
//         })
//     },[])
//     return (
//         <h1>Window width: {windowWidth}</h1>
//     )
// }