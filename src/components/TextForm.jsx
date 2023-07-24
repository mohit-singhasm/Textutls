import React, { useState } from 'react'

const textCounter = (arr) => {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > 0){
            arr1.push(arr[i])
        }     
    }
    return arr1.length
}


export default function TextForm(props) {
    const handleCopyClick = () => {
        // console.log('upperCase was clicked');
        navigator.clipboard.writeText(text);
        props.showAlter('Copied to clipboard', 'success')
    }

    const handleUpClick = () => {
        // console.log('upperCase was clicked');
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlter('Converted to UpperCase', 'success')
    }

    const handlelowClick = () => {
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlter('Converted to LowerCase', 'success')
    }

    const handleCap1st = () => {
        let newText = text.replace(/\b\w/g, function(match){
            return match.toUpperCase();
        })
        setText(newText);
        props.showAlter('Converted to Capitalize', 'success')

    }

    const clear = () => {
        let newText = ''
        setText(newText);
        props.showAlter('Cleared', 'success')
    }

    const handleOnChange = (event) => {
        // console.log(event.target.value);
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container my-3 " style={{color: props.mode ==="light"?"black": 'white'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==="light"?"#ffffff": '#404851', color: props.mode ==="light"?"black": 'white'}} id="myBox" rows="5"></textarea>
                </div>
                <button className={`btn btn-${props.btnclr} mx-2 my-2 mat`} onClick={handleCopyClick} >Copy Text</button>
                <button className={`btn btn-${props.btnclr} mx-2 my-2 mat`} onClick={handleUpClick} >Convert to Uppercase</button>
                <button className={`btn btn-${props.btnclr} mx-2 my-2 mat`} onClick={handlelowClick} >Convert to Lowercase</button>
                <button className={`btn btn-${props.btnclr} mx-2 my-2 mat`} onClick={handleCap1st} >Capitalize</button>
                <button className={`btn btn-${props.btnclr} mx-2 my-2 mat`} onClick={clear} >Clear</button>
            </div>
        {/* </div > */}
            <div className="container my-3" style={{color: props.mode ==="light"?"black": 'white'}}>
                <h1>Word and Character Counter</h1>
                <p>Number of Words: {textCounter(text.split(' '))} and Number of Charaters: {text.length}</p>
                <p>{0.08 * text.split(' ').length} Minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length <= 0? 'Write something to preview here.': text}</p>
            </div>
        </>
    )
}
