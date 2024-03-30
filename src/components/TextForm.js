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
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label h3">Enter the text to analyze below</label>
                    <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="mb-3 d-flex justify-content-start">
                    <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Uppercase</button> 
                    <button className="btn btn-primary me-2" onClick={handleLoClick}>Convert to Lowercase</button> 
                    <button className="btn btn-primary me-2" onClick={handleCpClick}>Copy Text</button> 
                    <button className="btn btn-primary me-2" onClick={handleRsClick}>Remove Extra Space</button> 
                    <button className="btn btn-secondary me-2" onClick={handleClClick}>Clear</button>
                </div>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{(text === "") ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>
                <p>Reading time {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{(text.length > 0) ? text : "Enter something in the textbox to preview it here!"}</p>
            </div>
        </>
    )
}
