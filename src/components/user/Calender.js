import React from'react'


const Calendar = ({datePickerHandler, dateString}) => {  
  return (
    <div className="date-container">
      <label htmlFor="end -date">end date</label> 
      <div className="date-display">{dateString}</div>

      <input 
        type="date"  
        onChange={datePickerHandler} 
      />
    </div>
  );
};

export default Calendar