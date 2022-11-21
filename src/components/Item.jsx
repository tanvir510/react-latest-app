import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export const Item = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div className='item-wrapper'>
      <div className='d-flex'>
        <button className='button primary' onClick={() => setUserName('Md. Soltanul Arefin')}>
          Change name
        </button>
        <button className='button primary  ms-3' onClick={() => setUserName('Tanvir Ahammad Chy')}>
          Reset
        </button>
      </div>
    </div>
  );
};
