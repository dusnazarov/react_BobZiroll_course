
/////////////////////////////
// import React from "react"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Done",
//         phone: "+998 (94) 125-03-00",
//         email: "jon@gmail.com",
//         isFavorite: false
//     })
    
    
//     function toggleFavorite() {
//         console.log("Toggle Favorite")
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img 
//                         src={`../images/star-empty.png`} 
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }


////////////////////////////////////////
// import React from "react"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Done",
//         phone: "+998 (94) 125-03-00",
//         email: "john@gmail.com",
//         isFavorite: true
//     })
    
//     let starIcon = contact.isFavorite ? "star-filled.png": "star-empty.png"
    
//     function toggleFavorite() {
//         console.log("Toggle Favorite")
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" alt="" />
//                 <div className="card--info">
//                     <img 
//                         src={`../images/${starIcon}`} 
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
//             </article>
//         </main>
//     )
// }


///////////////////////////////////////////////////////

// import React from "react"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Done",
//         phone: "+998 (94) 125-03-00",
//         email: "john@gmail.com",
//         isFavorite: true
//     })
    
//     let starIcon = contact.isFavorite ? "star-filled.png": "star-empty.png"
    
//     function toggleFavorite() {
//         setContact(prevContact => {
//             // console.log(prevContact)
//             // console.log(prevContact.isFavorite)
           
//             return {
//                 // ...prevContact,
//                 isFavorite: !prevContact.isFavorite

//             }
//         })
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" alt="" />
//                 <div className="card--info">
//                     <img 
//                         src={`../images/${starIcon}`} 
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
//             </article>
//         </main>
//     )
// }


///////////////////////////////////////////////////////

// import React from "react"
// import Star from "./Star"


// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Done",
//         phone: "+998 (94) 125-03-00",
//         email: "john@gmail.com",
//         isFavorite: true
//     })
      
    
//     function toggleFavorite() {
//         setContact(prevContact => {     
           
//             return {
//                 ...prevContact,
//                 isFavorite: !prevContact.isFavorite

//             }
//         })
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" alt="" />
//                 <div className="card--info">
//                     < Star isFilled={contact.isFavorite}/>
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
//             </article>
//         </main>
//     )
// }


///////////////////////////////////////////////////////

// import React from "react"
// import Star from "./Star"


// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Done",
//         phone: "+998 (94) 125-03-00",
//         email: "john@gmail.com",
//         isFavorite: true
//     })
      
    
//     function toggleFavorite() {
//         setContact(prevContact => {     
           
//             return {
//                 ...prevContact,
//                 isFavorite: !prevContact.isFavorite

//             }
//         })
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" alt="" />
//                 <div className="card--info">
//                     < Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
//             </article>
//         </main>
//     )
// }

