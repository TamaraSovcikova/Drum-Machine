import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [powerOn, setPowerOn] = useState(false);
  const [bankOn, setBankOn] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const handlePowerClick = () => {
    setPowerOn(!powerOn);
  };

  const handleBankClick = () => {
    setBankOn(!bankOn);
  };

  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };

  const keySoundMap = {
    Q: 'Heater-1.mp3',
    W: 'Heater-2.mp3',
    E: 'Heater-3.mp3',
    A: 'Heater-4_1.mp3',
    S: 'Heater-6.mp3',
    D: 'Dsc_Oh.mp3',
    Z: 'Kick_n_Hat.mp3',
    X: 'RP4_KICK_1.mp3',
    C: 'Cev_H2.mp3',
  };

  const handleButtonClick = (key) => {
    const audio = new Audio(`audio/${keySoundMap[key]}`);
    audio.play();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      if (key in keySoundMap) {
        handleButtonClick(key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="center-box">
      <div id="drum-machine" className="container rounded">
        <div className="row">
          <div className="col-md-7">
            <div id="display" className="grid-container">
              <button className="btn btn-primary drum-pad" onClick={() => handleButtonClick('Q')}>
                Q
              </button>
              <button className="btn btn-primary drum-pad" onClick={() => handleButtonClick('W')}>
                W
              </button>
              <button className="btn btn-primary drum-pad" onClick={() => handleButtonClick('E')}>
                E
              </button>
              <button className="btn btn-primary drum-pad" onClick={() => handleButtonClick('A')}>
                A
              </button>
              <button className="btn btn-primary drum-pad" onClick={() => handleButtonClick('S')}>
                S
              </button>
              <button className="btn btn-primary drum-pad" onClick={() => handleButtonClick('D')}>
                D
              </button>
              <button className="btn btn-primary drum-pad" onClick={() => handleButtonClick('Z')}>
                Z
              </button>
              <button className="btn btn-primary drum-pad" onClick={() => handleButtonClick('X')}>
                X
              </button>
              <button className="btn btn-primary drum-pad" onClick={() => handleButtonClick('C')}>
                C
              </button>
            </div>
          </div>
          <div className="col-md-5">
            <div className="power-band-container">
              <div className="switch-container">
                <div className="switch-label">Power</div>
                <label className="switch">
                  <input type="checkbox" checked={powerOn} onChange={handlePowerClick} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="info-field">
                <span className="text-background centered">Text</span>
              </div>
              <div>
                <input
                  type="range"
                  className="form-control-range mt-3"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
              </div>
              <div className="switch-container">
                <div className="switch-label">Bank</div>
                <label className="switch">
                  <input type="checkbox" checked={bankOn} onChange={handleBankClick} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
