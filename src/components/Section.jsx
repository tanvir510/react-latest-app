// File import
import { Item } from './Item';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export const Section = () => {
  const { userName } = useContext(AppContext);

  return (
    <div className='section-wrapper mb-4'>
      <h4 className='text-center'>My name is {userName}</h4>
      <Item />
    </div>
  );
};
