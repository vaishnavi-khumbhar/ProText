import React from 'react';

export default function About(props) {
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#1e3a5f' : 'white',
    border: props.mode === 'dark' ? '1px solid #2b4c7e' : '1px solid #ddd',
    borderRadius: '10px'
  };

  return (
    <div className="container py-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <h2 className="fw-bold text-center mb-4 text-primary">About TextPro</h2>

      <div className="accordion" id="accordionExample">
        
        {/* 1️⃣ Analyze Text */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
              style={myStyle}>
              <strong>
                <span role="img" aria-label="magnifying glass">🔍</span> 1. Analyze Your Text
              </strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Quickly analyze your content with word count, character count, and reading time estimation. Perfect for writers, students, and developers who want accurate stats in seconds.
            </div>
          </div>
        </div>

        {/* 2️⃣ Free To Use */}
        <div className="accordion-item mt-3" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
              style={myStyle}>
              <strong>
                <span role="img" aria-label="blue heart">💙</span> 2. 100% Free To Use
              </strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextPro is completely free, with no login or hidden charges. Use it anytime to format and optimize your text without any limits.
            </div>
          </div>
        </div>

        {/* 3️⃣ Browser Compatible */}
        <div className="accordion-item mt-3" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
              style={myStyle}>
              <strong>
                <span role="img" aria-label="globe">🌐</span> 3. Works On All Browsers
              </strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Built with React and optimized for speed, TextPro works flawlessly on Chrome, Firefox, Edge, and Safari. No installation required — just open and start using!
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
