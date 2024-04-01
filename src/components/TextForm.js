import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log('Onchange');
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(' Text has been converted to upperCase', 'success ')
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(' Text has been converted to lowerCase', 'success ')
    }
    

    const handleCopyClick = () =>{
        var text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(' Text has been Copied to clipboard', 'success ')
    }
    

    const handleClearClick = ()=>{
        let newText = "";
    setText(newText);
    props.showAlert(' Text area has been cleared', 'success ')
    }
    
    
    const [text, setText] = useState('')
    // setText("Enter text here ");
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h3 >{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#042743' , color:props.mode==='dark'?'white':'#042743'}} id="my-box" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-1" style={{color:props.mode==='dark'?'white':'#042743'}}  onClick={handleUpClick}>Convert to upper case</button>
                <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-1" style={{color:props.mode==='dark'?'white':'#042743'}} onClick={handleLowClick}>Convert to lower case</button>
                <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-1" style={{color:props.mode==='dark'?'white':'#042743'}} onClick={handleCopyClick}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-1" style={{color:props.mode==='dark'?'white':'#042743'}} onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h3>Your text summary</h3>
                <p> {text.length>0 ? text.split(" ").filter((element)=>{return element.length!==0}).length : '0'} words, {text.length} characters</p>
                <p>You can read it in {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Nothing to preview!'}</p>
            </div>

        </>
    )
}
