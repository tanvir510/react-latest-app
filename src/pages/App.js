// File Import
import { useState } from 'react';
import { Section } from '../components/Section';
import { AppContext } from '../Context/AppContext';

function App() {
  const [userName, setUserName] = useState('Tanvir Ahammad Chy');

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <div className='App'>
        <div>
          <Section />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
