import React, { useState} from 'react'

export default function TextForm() {
    const [text, setText] = useState("Enter your text here"); 

    const handleUpClick = () => {
        // setText("You have clicked on Convert to uppercase button "); 
        setText(text.toUpperCase())
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClClick = () => {
        setText("")
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label h3">Enter the text to analyze below</label>
                <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange}></textarea>
            </div>
            <div className="mb-3 d-flex justify-content-end">
                <button className="btn btn-secondary me-2" onClick={handleClClick}>Clear</button>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button> 
            </div>
        </div>
    )
}
