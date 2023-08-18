import React from "react"

// 1) ////////////////////////////////////////

// export default function Form() {
//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//             />
//         </form>
//     )
// }

// 2) ////////////////////////////////////////
// export default function Form() {   

//     function handleChange() {
//         console.log("changed")        
//     }

//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={ handleChange }
//             />
//         </form>
//     )
// }


// 3) ////////////////////////////////////////

// export default function Form() {   

//     function handleChange(event) {
//         // console.log(event)
//         // console.log(event.target)
//         console.log(event.target.value)        
//     }

//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//             />
//         </form>
//     )
// }

// 4) ////////////////////////////////////////
// export default function Form() {
//     const [firstName, setFirstName] = React.useState("")

//     console.log(firstName)

//     function handleChange(event) {
//         console.log(event.target.value)      
//         setFirstName(event.target.value)
//     }

//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//             />
//         </form>
//     )
// }

// 5) ////////////////////////////////////////
// export default function Form() {
//     const [firstName, setFirstName] = React.useState("")
//     const [lastName, setLastName] = React.useState("")
    
//     console.log(firstName, lastName )
    

//     function handleFirstChange(event) {      
//         setFirstName(event.target.value)
//     }

//     function handleLastChange(event) {      
//         setLastName(event.target.value)
//     }

//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleFirstChange}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleLastChange}
//             />
//         </form>
//     )
// }

// 6) ////////////////////////////////////////
// export default function Form() {
//     const [formData, setFormData] = React.useState (
//         {
//             firstName: "",
//             lastName: "",
//             email: ""               
//         }
//     )   
   
//     // console.log(formData)                    

//     function handleChange(event) {      
      
//         setFormData(prevFormData => {
//             // console.log(prevFormData)            
//             // console.log(event.target.value)
//             // console.log(event.target.name)
//             console.log({[event.target.name]:event.target.value})            
                     

//             return {
//                 ...prevFormData,
//                 [event.target.name]: event.target.value
                              
//             }
             
//         })
//     }
//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//             />

//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//             />
            
//         </form>
//     )
// }

// 7) ////////////////////////////////////////
// export default function Form() {
//     const [formData, setFormData] = React.useState (
//         {
//             firstName: "",
//             lastName: "",
//             email: ""               
//         }
//     )   
//     // console.log(formData)
//     console.log(formData.firstName)

//     function handleChange(event) {
//         const {name, value} = event.target  

//         setFormData(prevFormData => {
//             // console.log(prevFormData)
//             // console.log(name)
//             // console.log(value)            
//             // console.log({[name]:value})            
                     

//             return {
//                 ...prevFormData,              
//                 [name]: value
               
//             }
             
//         })
//     }
//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//             />

//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//             />
            
//         </form>
//     )
// }

// 8) /////////////////  Form Controlled    ///////////////////////
// export default function Form() {
//     const [formData, setFormData] = React.useState (
//         {
//             firstName: "",
//             lastName: "",
//             email: "",
//             comments : "" 
//         }
//     )
//     console.log(formData)
//     // console.log(formData.firstName)   
    
//     function handleChange(event) {
//         // console.log(event.target.value)
      
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [event.target.name]: event.target.value
//             }
//         })
//     }

//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//                 value={formData.lastName}
//             />

//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//             />
//             <textarea               
//                 placeholder="Comments"
//                 onChange={handleChange}
//                 name="comments"
//                 value={formData.comments}

//             />

//         </form>
//     )
// }

// 9) /////////////////   Forms in React: Checkbox   ///////////////////////
// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "",
//             lastName: "",
//             email: "",
//             comments : "",
//             isFriendly : true
//         }
//     )
//     // console.log(formData.comments)
    
    
//     function handleChange(event) {
//         const {name, value, type, checked } = event.target
      
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }


//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//                 value={formData.lastName}
//             />

//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//             />
//             <textarea               
//                 placeholder="Comments"
//                 onChange={handleChange}
//                 name="comments"
//                 value={formData.comments}

//             />

//             <input
//                 type="checkbox"
//                 id="isFriendly"
//                 checked={formData.isFriendly}
//                 onChange={handleChange}
//                 name="isFriendly" 
//             />
//             <label htmlfor="isFriendly">Are you friendly?</label>
//             <br/>

//         </form>
//     )
// }

// 10) /////////////////   Forms in React: Radio buttons _1   ///////////////////////
// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "",
//             lastName: "",
//             email: "",
//             comments : "",
//             isFriendly : true,
//             employment: ""

//         }
//     )
   
//     console.log(formData.employment)
    
//     function handleChange(event) {
//         const {name, value, type, checked } = event.target
      
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }


//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//                 value={formData.lastName}
//             />

//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//             />
//             <textarea               
//                 placeholder="Comments"
//                 onChange={handleChange}
//                 name="comments"
//                 value={formData.comments}

//             />

//             <input
//                 type="checkbox"
//                 id="isFriendly"
//                 checked={formData.isFriendly}
//                 onChange={handleChange}
//                 name="isFriendly" 
//             />
//             <label htmlfor="isFriendly">Are you friendly?</label>
//             <br/>
//             <br />
            
//             <fieldset>
//                 <legend>Current employment status</legend>
                
//                 <input 
//                     type="radio"
//                     id="unemployed"
//                     name="employment"
//                     value="unemployed"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="unemployed">Unemployed</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="part-time"
//                     name="employment"
//                     value="part-time"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="part-time">Part-time</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="full-time"
//                     name="employment"
//                     value="full-time"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="full-time">Full-time</label>
//                 <br />
                
//             </fieldset>
//         </form>


       
//     )
// }

// 11) /////////////////   Forms in React: Radio buttons _2   ///////////////////////
// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "",
//             lastName: "",
//             email: "",
//             comments : "",
//             isFriendly : true,
//             employment: "",           

//         }
//     )
//         console.log(formData.employment)   
 
    
//     function handleChange(event) {
//         const {name, value, type, checked } = event.target
      
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }


//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"                
//                 value={formData.lastName}
//             />

//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//             />
//             <textarea               
//                 placeholder="Comments"
//                 onChange={handleChange}
//                 name="comments"
//                 value={formData.comments}

//             />

//             <input
//                 type="checkbox"
//                 id="isFriendly"
//                 checked={formData.isFriendly}
//                 onChange={handleChange}
//                 name="isFriendly" 
//             />
//             <label htmlfor="isFriendly">Are you friendly?</label>
//             <br/>
//             <br />
            
//             <fieldset>
//                 <legend>Current employment status</legend>
                
//                 <input 
//                     type="radio"
//                     id="unemployed"
//                     name="employment"
//                     value="unemployed"
//                     checked={formData.employment === "unemployed"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="unemployed">Unemployed</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="part-time"
//                     name="employment"
//                     value="part-time"
//                     checked={formData.employment === "part-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="part-time">Part-time</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="full-time"
//                     name="employment"
//                     value="full-time"
//                     checked={formData.employment === "full-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="full-time">Full-time</label>
//                 <br />
                
//             </fieldset>
            
//         </form>

       
//     )
// }


// 12) /////////////////  Forms in React: Select & Option   ///////////////////////
// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "",
//             lastName: "",
//             email: "",
//             comments : "",
//             isFriendly : true,
//             employment: "",
//             favColor: ""

//         }
//     )
   
//     console.log(formData.favColor)
    
//     function handleChange(event) {
//         const {name, value, type, checked } = event.target
      
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }


//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"                
//                 value={formData.lastName}
//             />

//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//             />
//             <textarea               
//                 placeholder="Comments"
//                 onChange={handleChange}
//                 name="comments"
//                 value={formData.comments}

//             />

//             <input
//                 type="checkbox"
//                 id="isFriendly"
//                 checked={formData.isFriendly}
//                 onChange={handleChange}
//                 name="isFriendly" 
//             />
//             <label htmlfor="isFriendly">Are you friendly?</label>
//             <br/>
//             <br />
            
//             <fieldset>
//                 <legend>Current employment status</legend>
                
//                 <input 
//                     type="radio"
//                     id="unemployed"
//                     name="employment"
//                     value="unemployed"
//                     checked={formData.employment === "unemployed"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="unemployed">Unemployed</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="part-time"
//                     name="employment"
//                     value="part-time"
//                     checked={formData.employment === "part-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="part-time">Part-time</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="full-time"
//                     name="employment"
//                     value="full-time"
//                     checked={formData.employment === "full-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="full-time">Full-time</label>
//                 <br />
                
//             </fieldset>

//             <br />
            
//             <label htmlFor="favColor">What is your favorite color?</label>
//             <br />
//             <select 
//                 id="favColor"
//                 value={formData.favColor}
//                 onChange={handleChange}
//                 name="favColor"
//             >
//                 <option value="">-- Choose --</option>
//                 <option value="red">Red</option>
//                 <option value="orange">Orange</option>
//                 <option value="yellow">Yellow</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="indigo">Indigo</option>
//                 <option value="violet">Violet</option>
//             </select>
//         </form>

       
//     )
// }



// 13) /////////////////  Forms in React: Submitting the form   ///////////////////////

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "",
//             lastName: "",
//             email: "",
//             comments : "",
//             isFriendly : true,
//             employment: "",
//             favColor: ""

//         }
//     )
   
//     console.log(formData.favColor)
    
//     function handleChange(event) {
//         const {name, value, type, checked } = event.target
      
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }

//     function handleSubmit(event) {
//         // event.preventDefault()
//         // SubmitToApi(formData)
//         console.log(formData)

//     }


//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"                
//                 value={formData.lastName}
//             />

//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//             />
//             <textarea               
//                 placeholder="Comments"
//                 onChange={handleChange}
//                 name="comments"
//                 value={formData.comments}

//             />

//             <input
//                 type="checkbox"
//                 id="isFriendly"
//                 checked={formData.isFriendly}
//                 onChange={handleChange}
//                 name="isFriendly" 
//             />
//             <label htmlfor="isFriendly">Are you friendly?</label>
//             <br/>
//             <br />
            
//             <fieldset>
//                 <legend>Current employment status</legend>
                
//                 <input 
//                     type="radio"
//                     id="unemployed"
//                     name="employment"
//                     value="unemployed"
//                     checked={formData.employment === "unemployed"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="unemployed">Unemployed</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="part-time"
//                     name="employment"
//                     value="part-time"
//                     checked={formData.employment === "part-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="part-time">Part-time</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="full-time"
//                     name="employment"
//                     value="full-time"
//                     checked={formData.employment === "full-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="full-time">Full-time</label>
//                 <br />
                
//             </fieldset>

//             <br />
            
//             <label htmlFor="favColor">What is your favorite color?</label>
//             <br />
//             <select 
//                 id="favColor"
//                 value={formData.favColor}
//                 onChange={handleChange}
//                 name="favColor"
//             >
//                 <option value="">-- Choose --</option>
//                 <option value="red">Red</option>
//                 <option value="orange">Orange</option>
//                 <option value="yellow">Yellow</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="indigo">Indigo</option>
//                 <option value="violet">Violet</option>
//             </select>
//             <br/>
//             <br/>
//             <button type="submit">Submit</button>
//         </form>

       
//     )
// }






