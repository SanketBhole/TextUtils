import React,{useState} from 'react'

function TextForm(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpClick =() =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick= () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success");
    }
    const [text,setText] = useState('');    
  return (
    <>
    <div className="mb-3" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#0e4776':'white',color:props.mode ==='dark'?'white':'black'}} rows="8"></textarea>
    </div>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

    <div className="container my-3"  style={{color:props.mode ==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <h5> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</h5>
        <h5> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</h5>
        <h3 >Preview</h3>
        <h5>{text.length>0?text:'Nothing To Preview'}</h5>
    </div>
    </>
  )
}

export default TextForm;    