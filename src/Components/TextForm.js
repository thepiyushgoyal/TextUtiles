import React,{useState} from 'react'

export default function Textform(props) {
// useStates
const[text,settext]= useState("");

// DarkMode code below

//   const[myStyle,setMyStyle]=useState({
    //     backgroundColor:"white",
    //     color: "black"
//   })
//  const[btnText,setBtnText]=useState("Enable Dark Mode")

//  // events
//   const toggleMode =()=>
//   {
//       if(myStyle.color === "black"){
//         setMyStyle({
//             color:"white",
//             backgroundColor:"black"
//         })
//         setBtnText("Enable Light Mode")
//         // setBtnClassText("btn-light")
        
//     }
//     else{
//         setMyStyle({
//             color:"black",
//             backgroundColor:"white"
//           })
//           setBtnText("Enable Dark Mode ")
//         //   setBtnClassText("btn-dark")
          
//         }
//   }
const handleOnChange =(e)=>
  {
      settext(e.target.value);
  }
  const handleUppercase =()=>
  {
      let newtext = text.toUpperCase();
      settext(newtext);
      props.showAlert("Text has been changed to UpperCase!","success")
    } 
    const handlelowercase =()=>
    {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Text has been changed to LowerCase!","success")
    }
    const clear =()=>
    {
        
        settext("");
        props.showAlert("Text has been Cleared!","success")
  }
  return (
    <>
    <div className='container mt-3 p-3 ' style={{color:props.mode==="dark"?"white":"black"}}>
     <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea  id="mybox"  rows="8" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#212529":"white",color:props.mode==="dark"?"white":"black"}} placeholder='Enter text here ' ></textarea>
        </div>
        <button className="btn btn-primary my-1 mx-1" onClick={handleUppercase}>Convert to Uppercase </button>
        <button className="btn btn-primary my-1 mx-1" onClick={handlelowercase}>Convert to lowercase</button>
        <button className="btn btn-primary my-1 mx-1" onClick={clear}>Clear</button>
        {/* <button className="btn btn-dark mx-1" onClick={toggleMode}>{btnText}</button> */}
    </div>
<div className="container  p-3" style={{color:props.mode==="dark"?"white":"black"}}>
    <h2 >Your Text Summury</h2>
    <p> {text.split(" ").length} Words and {text.length}  Characters</p>
    <p>{text.split(" ").length*0.008}  Minutes</p>
        <h2> Preview</h2>
    <p>{text.length>0?text:"Enter Text above to see the Preview"}</p>
</div>

</>
    
  )
}