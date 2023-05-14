
// 1) /////////////////////////////////////////////////
// import React from "react"
// import memesData from "../memesData.js"


// export default function Meme() {   
    
//     function getMemeImage() {
//         const memesArray = memesData.data.memes       
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         const url = memesArray[randomNumber].url       

//         // console.log(memesArray)
//         // console.log(randomNumber)  
//         console.log(memesArray[randomNumber])
//         console.log(url)
        
//     }    
//     return (
//         <main>
//             <div className="form">
//                 <input 
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                 />
//                 <button 
//                     className="form--button"
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
           
//         </main>
//     )
// }



///////////////////////////////////////////////////
// import React from "react"
// import memesData from "../memesData.js"

// export default function Meme() {
//     // const [memeImage, setMemeImage] = React.useState("")
//     const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
//     console.log(memeImage)
    
//     function getMemeImage() {
//         const memesArray = memesData.data.memes       
//         const randomNumber = Math.floor(Math.random() * memesArray.length)       

//         // console.log(memesArray)
//         // console.log(randomNumber)         

//         setMemeImage(memesArray[randomNumber].url)
//         // console.log(memesArray[randomNumber])
//         // console.log(memesArray[randomNumber].url)
        
//     }    
//     return (
//         <main>
//             <div className="form">
//                 <input 
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                 />
//                 <button 
//                     className="form--button"
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//             <img src={memeImage} className="meme--image" alt="memeimg"/>
//         </main>
//     )
// }



///////////////////////////////////////////////////
import React from "react"
import memesData from "../memesData.js"



export default function Meme() {    
    
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    // console.log(allMemeImages)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        // console.log(allMemeImages)
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url

        setMeme(prevMeme =>
            console.log(prevMeme)            
            ({
            ...prevMeme,
            randomImage: url
            
        }));       
    }   
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" alt="memeimg" />
                        
        </main>
    )
}