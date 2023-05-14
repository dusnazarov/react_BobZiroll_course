// 1) //////////// 53- Making API calls     /////////////////////////
// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarData] = React.useState({})
    
//     // 1. GET the data (fetch)
//     // 2. Save the data to state
    
//     fetch("https://swapi.dev/api/people/1")
//         .then(res => res.json())
//         .then(data => console.log(data)) 
                        
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>            
//         </div>
//     )
// }

// 2) /////////////// 53- Making API calls    //////////////////////
// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
    
//     // 1. GET the data (fetch)
//     // 2. Save the data to state
  
    
//     fetch("https://swapi.dev/api/people/1")
//       .then(res => res.json())
//       // .then(data =>setStarWarsData(data))   // infinite loop becouse of setStarWarsData() 
//       .then(data =>console.log(data))   // finite loop  becouse of  console.log()
    
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>           
//         </div>
//     )
// }

// 3)  /////////////////////////////////////
// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})    
//     console.log("Component rendered")  
        
   
//     React.useEffect(function() {
//       console.log("Effect run")

//       fetch("https://swapi.dev/api/people/1")
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))  // infinite loop   becouse of without any dependency .         
//     })    
//     return (
//       <div>
//         <pre>{JSON.stringify(starWarsData, null, 2)}</pre>            
//       </div>
//     );
// };


// 4)  ////////////////////////////////////////////////////
// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})    
//     console.log("Component rendered")  
        
   
//     React.useEffect(function() {
//       console.log("Effect run")

//       fetch("https://swapi.dev/api/people/1")
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))  // finite loop  becouse of dependency [].          
//     },[])    
//     return (
//       <div>
//         <pre>{JSON.stringify(starWarsData, null, 2)}</pre>            
//       </div>
//     );
// };


// 5) /////////////////////////////////////
// import React from "react"

// export default function App() {
//   const [starWarsData, setStarWarsData] = React.useState({})
//   const [count, setCount] = React.useState(0)

//   console.log("Component rendered")
    
//     // side effects - 1 
//     // React.useEffect(function() {
//     //   console.log("Effect ran")
//     //   fetch("https://swapi.dev/api/people/1")
//     //     .then(res => res.json())
//     //     // .then(data => console.log(data))
//     //     .then(data => setStarWarsData(data))
          
//     // })
    
//     // side effects - 2 
//     // React.useEffect(function() {
//     //   console.log("Effect ran")
//     //   fetch("https://swapi.dev/api/people/1")
//     //     .then(res => res.json())
//     //     // .then(data => console.log(data))
//     //     .then(data => setStarWarsData(data))          
//     // },[])  
   
    
//     // side effects - 3
//     React.useEffect(function() {
//       console.log("Effect ran")
//       fetch("https://swapi.dev/api/people/1")
//         .then(res => res.json())
//         // .then(data => console.log(data))
//         .then(data => setStarWarsData(data))    
//     },[count])
  
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
//         </div>
//     );
// };



// 6) /////////////////////////////////////
// import React from "react"

// export default function App() {
//   const [starWarsData, setStarWarsData] = React.useState({})
//   const [count, setCount] = React.useState(1)
    
    
//   React.useEffect(function() {
//     console.log("Effect ran")
//     fetch(`https://swapi.dev/api/people/${count}`)
//       .then(res => res.json())
//       .then(data => setStarWarsData(data))
//   }, [count])
  
//   return (
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// };

// 7) //////////////  test ///////////////////////
// import React from "react"

// export default function App() {
//   const [starWarsData, setStarWarsData] = React.useState({})
//   const [count, setCount] = React.useState(0)

//   console.log("Component rendered")
    
//   // 1) //////////////////  
//   // React.useEffect(function() {
//   //   console.log("Effect function ran")
   
//   // })

//   // 2) ////////////////  
//   // React.useEffect(function() {
//   //   console.log("Effect function ran")
   
//   // },[])

//   // 3) ////////////////////// 
//   // React.useEffect(function() {
//   //   console.log("Effect function ran")
   
//   // },[count])

 
//   return (
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>Counter</button>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// };


// 8) /////////////////////////////////////
import React from "react"

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)
    
    
  React.useEffect(function() {
    console.log("Effect ran")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])
  
  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};



