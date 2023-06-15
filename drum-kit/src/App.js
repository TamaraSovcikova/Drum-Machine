import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const DrumPad = ({ keyName, handleButtonClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    handleButtonClick(keyName);
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <button
      className={`btn btn-primary drum-pad ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      {keyName}
    </button>
  );
};

function App() {
  const [powerOn, setPowerOn] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [lableValue, setLableValue] = useState('Turn On the Power');

  const handlePowerClick = () => {
    setPowerOn(!powerOn);
    if (powerOn)
    handleLabelChange('OFF');
    else
    handleLabelChange('');
  };

  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };

  const keySoundMap = {
    Q: 'Heater-1.mp3',
    W: 'Heater-2.mp3',
    E: 'Heater-3.mp3',
    A: 'Heater-4.mp3',
    S: 'Clap.mp3',
    D: 'Open-HH.mp3',
    Z: 'Kick_n_Hat.mp3',
    X: 'Kick.mp3',
    C: 'Closed-HH.mp3',
  };

  const handleButtonClick = (key) => {
     if (!powerOn) return;

     handleLabelChange(key);
     const audio = new Audio(`audio/${keySoundMap[key]}`);
    audio.play();
  };

  const handleLabelChange = (key) => {
    switch (key) {
      case 'Q':
        setLableValue('Heater 1');
        break;
      case 'W':
        setLableValue('Heater 2');
        break;
      case 'E':
        setLableValue('Heater 3');
        break;
      case 'A':
        setLableValue('Heater 4');
        break;
      case 'S':
        setLableValue('Clap');
        break;
      case 'D':
        setLableValue('Open HH');
        break;
      case 'Z':
        setLableValue('Kick n" Hat');
        break;
      case 'X':
        setLableValue('Kick');
        break;
      case 'C':
        setLableValue('Closed HH');
        break;
      case '':
        setLableValue('');
        break;
      case 'OFF':
        setLableValue('Power OFF');
        break;
      default:
        setLableValue('');
        break;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      switch (key) {
        case 'Q':
        case 'W':
        case 'E':
        case 'A':
        case 'S':
        case 'D':
        case 'Z':
        case 'X':
        case 'C':
          handleButtonClick(key);
          handleLabelChange(key);
          break;
        default:
          break;
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
            <div className="grid-container">
              <DrumPad keyName="Q" handleButtonClick={handleButtonClick} />
              <DrumPad keyName="W" handleButtonClick={handleButtonClick} />
              <DrumPad keyName="E" handleButtonClick={handleButtonClick} />
              <DrumPad keyName="A" handleButtonClick={handleButtonClick} />
              <DrumPad keyName="S" handleButtonClick={handleButtonClick} />
              <DrumPad keyName="D" handleButtonClick={handleButtonClick} />
              <DrumPad keyName="Z" handleButtonClick={handleButtonClick} />
              <DrumPad keyName="X" handleButtonClick={handleButtonClick} />
              <DrumPad keyName="C" handleButtonClick={handleButtonClick} />
            </div>
          </div>
          <div className="col-md-5">
            <div className="power-band-container">
              <div>
                <input
                  id="volume-slider"
                  type="range"
                  className="form-control-range mt-3"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
              </div>
              <div id="display" className="info-field">
                <span className="text-background centered">{lableValue}</span>
              </div>
              <div className="switch-container">
                <div className="switch-label">Power</div>
                <label className="switch">
                  <input type="checkbox" checked={powerOn} onChange={handlePowerClick} />
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
