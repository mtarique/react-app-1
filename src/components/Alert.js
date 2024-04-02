import React from 'react'; 

export default function Alert(props) {
    const convertWordToproperCase = (word) => {
        const lowerText = word.toLowerCase();
        return lowerText.charAt(0).toUpperCase() + lowerText.slice(1)
    }

    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{convertWordToproperCase(props.alert.type)}</strong>: {props.alert.message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
        </div>
    )
}