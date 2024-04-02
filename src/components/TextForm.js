import React, { useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(""); 

    // To uppercase
    const handleUpClick = () => {
        // setText("You have clicked on Convert to uppercase button "); 
        setText(text.toUpperCase())
        props.showAlert("Text converted to uppercase", "success")
    }

    // To lowercase
    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Text converted to lowercase", "success")
    }

    // Write own text
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // Clear
    const handleClClick = () => {
        setText("")
        props.showAlert("Textbox cleared", "success")
    }

    // Copy
    const handleCpClick = () => {
        let textToCopy = document.getElementById('myBox');
        textToCopy.select()
        navigator.clipboard.writeText(textToCopy.value); 
        props.showAlert("Text copied!", "success")
    }

    // Remove extra space
    const handleRsClick = () => {
        let textWithRemovedSpace = text.split(/[ ]+/); 
        setText(textWithRemovedSpace.join(" ")); 
        props.showAlert("Extra spaces has been successfully removed", "success")
    }

    return (
        <>
            <div className="container mt-3">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label h3">Enter the text to analyze below</label>
                    <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-2 d-grid gap-2 mb-2">
                        <button disabled={text.length === 0} className="btn btn-primary btn-block" onClick={handleUpClick}>Convert to Uppercase</button> 
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 d-grid gap-2 mb-2">
                        <button disabled={text.length === 0} className="btn btn-primary btn-block" onClick={handleLoClick}>Convert to Lowercase</button> 
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 d-grid gap-2 mb-2">
                        <button disabled={text.length === 0} className="btn btn-primary btn-block" onClick={handleCpClick}>Copy Text</button> 
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 d-grid gap-2 mb-2">
                        <button disabled={text.length === 0} className="btn btn-primary btn-block" onClick={handleRsClick}>Remove Extra Space</button> 
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-2 d-grid gap-2 mb-2">
                        <button disabled={text.length === 0} className="btn btn-secondary btn-block" onClick={handleClClick}>Clear</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{(text === "") ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>
                <p>Reading time {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{(text.length > 0) ? text : "Nothing to preview, please enter some text!"}</p>
            </div>
        </>
    )
}
