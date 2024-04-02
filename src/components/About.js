import React from 'react'

export default function About(props) {
    
    // var darkStyle = {
    //     color: 'white', 
    //     backgroundColor: 'black'
    // }

    // var lightMode = {
    //     color: 'black', 
    //     backgroundColor: 'white'
    // }

    // const [mode, setMode] = useState(lightMode)
    // const [btnText, setBtnText] = useState('Enable Dark Mode')

    // const changeTheme = () => {
    //     if(mode.color === 'black') {
    //         setMode(darkStyle)
    //         setBtnText('Enable Light Mode')
    //     } else {
    //         setMode(lightMode)
    //         setBtnText('Enable Dark Mode')
    //     }
    // }

    let darkStyle = {
        color: props.mode === 'light' ? 'black' : 'white', 
        backgroundColor: props.mode === 'light' ? 'white' : 'black'
    }

    let darkStyle2 = {
        color: props.mode === 'light' ? 'black' : 'white', 
        backgroundColor: props.mode === 'light' ? 'white' : '#212529',
        // border: props.mode === 'light' ? '1px solid #dfe2e6' : '1px solid #495057',
        boxShadow: props.mode === 'light' ? "" : "inset 0 -1px 0 #495057"
    }

    return (
        <div className="container my-3">
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={darkStyle2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <strong>Analyze your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={darkStyle}>
                        Text utils gives you a way to analyze your text quickly and efficiently. Be it word or character count.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={darkStyle2} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={darkStyle}>
                        TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={darkStyle2} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={darkStyle}>
                        This word counter software works in any web browser such as Google Chrome, Mozilla Firefox, Internet Explorer, safari, Opera. It suits to count character in facebook, blog, books, excel document, pdf document, essays etc.
                    </div>
                    </div>
                </div>
            </div>
            {/* <button className='btn btn-primary mt-3' onClick={changeTheme}>{btnText}</button> */}
        </div>
    )
}
