import React from 'react';
import useDate from '../../../hooks/useDate';

export interface ClockProps {
  
}

function pad(val: number) {
  if(val < 10) {
    return '0' + val;
  }
  return val;
}

const Clock: React.FC<ClockProps> = () => {
  const date = useDate();

  return (
    <>
      {pad(date.getHours() % 12)}:{pad(date.getMinutes())} {date.getHours() < 12 ? 'AM' : 'PM'}
    </>
  );
}

export default Clock;