// File Import
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(3);
  const rangeInputs = document.querySelectorAll('input[type="range"]');

  useEffect(() => {
    rangeInputs.oninput = function () {
      var value = ((value - 0) / (6 - 0)) * 100;
      rangeInputs.style.background =
        'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' +
        value +
        '%, #fff ' +
        value +
        '%, white 100%)';
    };
  }, [value]);

  return (
    <div className='App'>
      <div className='range-slider-wrapper'>
        <input
          style={{
            background: `linear-gradient(to right, #82cfd0 0%, #82cfd0 40%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0.2) 100%)`
          }}
          type='range'
          id='range'
          min='1'
          max='6'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
