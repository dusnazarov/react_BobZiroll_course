// 1)  ///////////////  Boxes challenge part 1    ////////////////////////////
import React from "react"
import boxes from "./boxes"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <div className="box" key={square.id}></div>
        
    ))
   
    return (
        <main>
            {squareElements}
        </main>
    )
}

// 2)  //////////// Dynamic styles   ///////////////////////////////

// import React from "react"
// import boxes from "./boxes"

// export default function App(props) {
//     const [squares, setSquares] = React.useState(boxes)
    
//     const styles = {
//         backgroundColor: props.darkMode ? "#222222" : "#cccccc"
//     }
    
//     const squareElements = squares.map(square => (
//         <div style={styles} className="box" key={square.id}></div>
//     ))
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

// 3)  ////////////////////  Boxes challenge part 2   ///////////////////////
// import React from "react"
// import boxes from "./boxes"
// import Box from "./Box"

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)
    
//     const squareElements = squares.map(square => (
//         <Box key={square.id} on={square.on} />
//     ))
        
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

// 4)  /////////////////  Boxes challenge part 3.1-local state  //////////////////////////
// import React from "react"
// import boxes from "./boxes"
// import Box from "./Box"

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)
    
//     const squareElements = squares.map(square => (
//         <Box key={square.id} on={square.on} />        
//     ))
 
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

// 5)  ///////////////  Boxes challenge part 3.2-unified state   ////////////////////////////
// import React from "react"
// import boxes from "./boxes"
// import Box from "./Box"

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)
    
//     function toggle(id) {
//         console.log(id)
        
//     }
    
//     const squareElements = squares.map(square => (
//         <Box 
//             key={square.id} 
//             id={square.id}
//             on={square.on} 
//             toggle={toggle}
//         />
//     ))
    
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

// 6)  ///////////////  Boxes challenge part 4  ////////////////////////////

// import React from "react"
// import boxes from "./boxes"
// import Box from "./Box"

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)
    
//     function toggle(id) {
//         setSquares(prevSquares => {
//             const newSquares = []
//             for(let i = 0; i < prevSquares.length; i++) {
//                 const currentSquare = prevSquares[i]
//                 console.log(currentSquare)
//                 console.log(currentSquare.id)


//                 if(currentSquare.id === id) {
//                     const updatedSquare = {
//                         ...currentSquare,
//                         on: !currentSquare.on
//                     }
//                     newSquares.push(updatedSquare)
//                 } else {
//                     newSquares.push(currentSquare)
//                 }
//             }
//             return newSquares
//         })
//     }
    
//     const squareElements = squares.map(square => (
//         <Box 
//             key={square.id} 
//             id={square.id}
//             on={square.on} 
//             toggle={toggle}
//         />
//     ))
    
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

