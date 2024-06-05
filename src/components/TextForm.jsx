import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const handleonClickUpper = () => {

        var uppercase = text.toUpperCase();
        setText(uppercase);



    }
    const handleonClickLower = () => {
        var lowercase = text.toLowerCase();
        setText(lowercase);
    }
    return (
        <>
            <div className='container'>
                <h2>{props.title}</h2>
                <div className="mb-3">
                    <textarea type="text" onChange={handleonChange} value={text} className="form-control " rows="8" />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleonClickUpper} >Convert to Uppercase</button>

                <button className="btn btn-primary mx-2" onClick={handleonClickLower} >Convert to Lowercase</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
            </div>
        </>
    )
}
