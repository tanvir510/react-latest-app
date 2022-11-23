// File Import
import { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Constant value

const range = {
  MAX_VALUE: 10,
  MIN_VALUE: 0,
  DEFAULT_VALUE: 0
};

function App() {
  const { MAX_VALUE, MIN_VALUE, DEFAULT_VALUE } = range;
  const [value, setValue] = useState(DEFAULT_VALUE);
  const [trackBg, setTrackBg] = useState('');

  useEffect(() => {
    handleTrackBg();
  }, [value]);

  const handleTrackBg = () => {
    const percentage = Math.floor((value / MAX_VALUE) * 100);

    if (percentage >= 1 && percentage <= 33) {
      setTrackBg(`#E81A15`);
    }
    if (percentage >= 34 && percentage <= 67) {
      setTrackBg(`linear-gradient(90deg, #EE1A15 0%, #E1B73A 100%)`);
    }
    if (percentage >= 68 && percentage <= 100) {
      setTrackBg(`linear-gradient(90deg, #EE1A15 0%, #E1B73A 50%, #39A24A 100%)`);
    }
  };

  return (
    <div className='App'>
      <div className='range-slider-wrapper'>
        <Slider
          min={MIN_VALUE}
          max={MAX_VALUE}
          keyboard
          dots
          defaultValue={DEFAULT_VALUE}
          trackStyle={{ background: trackBg }}
          draggableTrack={false}
          onChange={(val) => setValue(val)}
        />
      </div>
    </div>
  );
}

export default App;
