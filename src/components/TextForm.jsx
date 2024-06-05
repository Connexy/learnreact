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
    const handleonClickTitle = () => {
        // split text into an array of words 
        const words = text.split(" ");
        // capitalize the first letter of each word 
        const titleCaseWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        // join the title-cased words back into a single string

        const titleCasedText = titleCaseWords.join(" ");
        // update the state
        setText(titleCasedText);
    }
    const handleonClickClear = () => {
        setText("");
    }
    return (
        <>
            <div className='container'>
                <h2>{props.title}</h2>
                <div className="mb-3">
                    <textarea type="text" onChange={handleonChange} value={text} className="form-control " rows="8" />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleonClickUpper} >Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleonClickLower} >Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleonClickTitle} >Titlecase</button>
                <button className="btn btn-danger mx-2" onClick={handleonClickClear} >Clear Text</button>

            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
