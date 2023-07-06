import React, { useState } from 'react';
import styles from './styles.module.css'

const DatePicker = (props) => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showYears, setShowYears] = useState(false);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    props(date);
    // setShowYears(false);
  };
  

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    // setShowYears(false);
  };

  const toggleYears = () => {
    setShowYears(!showYears);
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const selectDate = (day) => {
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month + 1 < 10 ? `0${month + 1}` : month + 1;
    const formattedYear = year.toString();
    const selectedDateString = `${formattedDay}.${formattedMonth}.${formattedYear}`;
    setSelectedDate(selectedDateString);
    // setShowCalendar(false);
  };

  const selectYear = (selectedYear) => {
    setYear(selectedYear);
    // setShowYears(false);
  };

  const getDaysInMonth = () => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const daysInMonth = getDaysInMonth();
  const firstDayOfMonth = daysInMonth[0].getDay();
  const emptyCells = Array.from({ length: firstDayOfMonth }, (_, index) => <td key={`empty-${index}`}></td>);
  const monthDays = [];
  let currentRow = emptyCells;

  daysInMonth.forEach((day, index) => {
    currentRow.push(
      <td data-date={day} data-month={month} data-year={year} key={`day-${index}`} onClick={() => selectDate(day.getDate())}>
        <div>{day.getDate()}</div>
      </td>
    );

    if (currentRow.length === 7 || index === daysInMonth.length - 1) {
      monthDays.push(<tr className={styles["grid-row"]}>{currentRow}</tr>);
      currentRow = [];
    }
  });




  const yearList = [];
  for (let i = year - 10; i <= year + 10; i++) {
    yearList.push(
      <li key={i} onClick={() => selectYear(i)}>
        {i}
      </li>
    );
  }

  return (
    <div>
      <input
        type="text"
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="Format: dd.mm.yyyy"
        onFocus={toggleCalendar}
        onBlur={toggleCalendar}
      />
      {
      // showCalendar && (
        <div className={styles["bx-date"]} >
          <div className={styles['calendar-header']}>
            <button className={styles['prev-button']} onClick={prevMonth}>&lt;</button>
            <span className={styles['month-year']} onClick={toggleYears}>{`${year} - ${month + 1}`}</span>
            <button className={styles['next-button']} onClick={nextMonth}>&gt;</button>
          </div>
          {showYears ? (
            <ul className={styles['year-list']}>{yearList}</ul>
          ) : (
            <table className={styles['calendar-table']}>
              <thead>
                <tr>
                  <th>Dim</th>
                  <th>Lun</th>
                  <th>Mar</th>
                  <th>Mer</th>
                  <th>Jeu</th>
                  <th>Ven</th>
                  <th>Sam</th>
                </tr>
              </thead>
              <tbody>
                  {monthDays}
              </tbody>
            </table>
          )}
        </div>
      // )
      }
    </div>
  );
};

export default DatePicker;
