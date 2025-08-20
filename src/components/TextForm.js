import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase", "success");
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div 
        className="container p-4 rounded shadow-lg" 
        style={{ 
          backgroundColor: props.mode === 'dark' ? '#f9f9f9' : 'white',
          color: props.mode === 'dark' ? '#0f172a' : '#042743'
        }}
      >
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control rounded" 
            id="myBox" 
            rows="8" 
            value={text} 
            onChange={handleOnChange} 
            style={{
              backgroundColor: props.mode === 'dark' ? '#e2e8f0' : 'white',
              color: props.mode === 'dark' ? '#0f172a' : '#042743',
              border: '1px solid #cbd5e1'
            }}
          ></textarea>
        </div>

        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-secondary mx-2 my-1" onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={text.length === 0} className="btn btn-info mx-2 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Spaces
        </button>
      </div>

      <div 
        className="container my-3 p-3 rounded" 
        style={{ 
          backgroundColor: props.mode === 'dark' ? '#f1f5f9' : 'white', 
          color: props.mode === 'dark' ? '#0f172a' : '#042743'
        }}
      >
        <h2>Your Text Summary</h2>
        <p>{text.trim().split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
