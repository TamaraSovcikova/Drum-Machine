import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const handleButtonClick = (e) => {
    e.target.classList.toggle('clicked');
  };

  return (
    <div className="center-box">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="grid-container">
              <button className="btn btn-primary custom-button" onClick={handleButtonClick}>Q</button>
              <button className="btn btn-primary custom-button" onClick={handleButtonClick}>W</button>
              <button className="btn btn-primary custom-button" onClick={handleButtonClick}>E</button>
              <button className="btn btn-primary custom-button" onClick={handleButtonClick}>A</button>
              <button className="btn btn-primary custom-button" onClick={handleButtonClick}>S</button>
              <button className="btn btn-primary custom-button" onClick={handleButtonClick}>D</button>
              <button className="btn btn-primary custom-button" onClick={handleButtonClick}>Z</button>
              <button className="btn btn-primary custom-button" onClick={handleButtonClick}>X</button>
              <button className="btn btn-primary custom-button" onClick={handleButtonClick}>C</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="power-band-container">
              <div>
                <button className="btn btn-success power-button">Power</button>
              </div>
              <div className="info-field">
                <span className="text-background">Text</span>
              </div>
              <div>
                <input type="range" className="form-control-range mt-3" min="0" max="100" value="50" />
              </div>
              <div className="bank-square">
                <button className="btn btn-success bank-button">Bank</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
