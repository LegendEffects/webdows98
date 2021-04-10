import React from 'react';
import useDate from '../../../../hooks/useDate';
import { formatDate } from '../../../../utils/DateFormat';

function pad(val: number) {
  if(val < 10) {
    return '0' + val;
  }
  return val;
}

const TaskbarClock: React.FC = () => {
  const date = useDate();

  return (
    <div 
      style={{whiteSpace: 'nowrap', userSelect: 'none'}}
      title={formatDate(date, { dateStyle: 'full' })}
      >
        {date.getHours() % 12}:{pad(date.getMinutes())} {date.getHours() < 12 ? 'AM' : 'PM'}
    </div>
  );
}

export default TaskbarClock;