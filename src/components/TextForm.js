import React, { useState} from 'react'

export default function TextForm() {
    const [text, setText] = useState("Enter your text here"); 

    const handleUpClick = () => {
        // setText("You have clicked on Convert to uppercase button "); 
        setText(text.toUpperCase())
    }

    const handleLoClick = () => {
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClClick = () => {
        setText("")
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
                    <button className="btn btn-secondary me-2" onClick={handleClClick}>Clear</button>
                </div>
            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Reading time {0.008 * text.split(" ").length} minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
