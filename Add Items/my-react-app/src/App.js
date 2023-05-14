
////////////////////////////////
// import React from "react"

// export default function App(){
//     const thingsArray = ["Thing 1", "Thing 2", "Thing 3", "Thing 3" ]
//     const ThingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)    

//     return (
//         <div>           
//             {ThingsElements}
//         </div>
//     )
// };

//////////////////////////////////////////////
// import React from "react"


// export default function App(){
//     const thingsArray = ["Thing 1", "Thing 2"]    

//     function addItem(){
//         const newThingText = `Thing ${thingsArray.length + 1}`
//         thingsArray.push(newThingText)
//         console.log(thingsArray)
//     }
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsArray}
           
//         </div>
//     )
// };

//////////////////////////////////////////////
// import React from "react"

// export default function App(){
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1","Thing 2"])
    

//     function addItem() {        
//         setThingsArray(prevState => {
//             const newList = [...prevState, `Thing ${prevState.length + 1}`]           
            
//             console.log(...prevState)
//             console.log([...prevState])
//             console.log(newList)

//             return newList               
        
//         })     
//     }
//     // console.log(thingsArray)


//     const ThingsElements = thingsArray.map(thing => <p key="thing">{thing}</p>)
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {ThingsElements}
//         </div>
//     )
// };


////////////////////////////////
// import React from "react"


// export default function App(){
//     const [things, setThings] = React.useState(["Thing 1","Thing 2"])
   
//     function addItem(){
//         const newThingText = `Thing ${things.length +1 }`      
//         setThings(prevState => [...prevState, newThingText] )
            
        
//     };
//     const ThingsElements = things.map(thing => <p key="thing">{thing}</p>)
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {ThingsElements}
//         </div>
//     )

// };
