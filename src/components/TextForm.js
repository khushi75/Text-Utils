import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpclick = (event)=>{
    event.preventDefault()
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase.", "Success")
}
const handleLoclick = (event)=>{
    event.preventDefault()
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase.", "Success")

}
const handleClearclick = (event)=>{
    event.preventDefault()
    let newText = '';
    setText(newText);
    props.showAlert("Text has been Cleared.", "Success")

}

const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
}

const[text, setText] = useState('')
// text = 'asdfgh' // Wrong way to change the state
// setText("New text") //Correct way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <form>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{color: props.mode==='dark'?'white':'#042743' , backgroundColor: props.mode==='dark'?'grey':'white'}} id="MyBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear Text</button>

            </form>
        </div>
        <div className='conatiner my-3' style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter text to Preview it here'}</p>
        </div>
        </>
    )
}
