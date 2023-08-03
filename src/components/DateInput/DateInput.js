import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css'

// Icons
const caretUpIcon = '\u25B2'; // Unicode for ▲
const caretDownIcon = '\u25BC'; // Unicode for ▼

const DatePicker = (props) => {
  const currentDate = new Date();
  // const states = props.states;
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showYears, setShowYears] = useState(false);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  // console.log(props);

  const bxDateRef = useRef(null);

  useEffect(() => {
    // Event listener to detect clicks outside the bx-date div
    const handleClickOutside = (event) => {
      if (bxDateRef.current && !bxDateRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // const handleDateChange = (event) => {
  //   const selectedDate = event.target.value;
  //   setSelectedDate(selectedDate);
  //   props.onChange(selectedDate); 
  // };
  

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
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
  };

  const selectYear = (selectedYear) => {
    setYear(selectedYear);
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
        <div  key={`day-${index}`}>{day.getDate()}</div>
      </td>
    );

    if (currentRow.length === 7 || index === daysInMonth.length - 1) {
      monthDays.push(<tr className={styles["grid-row"]} key={`tr-${index}`}>{currentRow}</tr>);
      currentRow = [];
    }
  });


  const scrollYearsUp = () => {
    const newYearList = [];
    for (let i = year - 9; i <= year + 1; i++) {
      newYearList.push(
        <li key={i} onClick={() => selectYear(i)}>
          {i}
        </li>
      );
    }
    setYear(year - 1);
    setYearList(newYearList);
  };

  const scrollYearsDown = () => {
    const newYearList = [];
    for (let i = year; i <= year + 10; i++) {
      newYearList.push(
        <li key={i} onClick={() => selectYear(i)}>
          {i}
        </li>
      );
    }
    setYear(year + 1);
    setYearList(newYearList);
  };

  const [yearList, setYearList] = useState(() => {
    const initialYearList = [];
    for (let i = year - 9; i <= year + 10; i++) {
      initialYearList.push(
        <li key={i} onClick={() => selectYear(i)}>
          {i}
        </li>
      );
    }
    return initialYearList;
  });

  return (
    <div className={styles["bx-inpt-date"]}>
      <input
        type="text"
        id={props.id}
        value={selectedDate}
        // onChange={handleDateChange}
        placeholder="Format: dd.mm.yyyy"
        onFocus={toggleCalendar}
        //onBlur={toggleCalendar}
      />
      {
        <div className={styles["bx-date"]}  ref={bxDateRef} >
          <div className={styles['calendar-header']}>
            <button className={styles['prev-button']} onClick={prevMonth}>&lt;</button>
            <span className={styles['month-year']} onClick={toggleYears}>{`${year} - ${month + 1}`}</span>
            <button className={styles['next-button']} onClick={nextMonth}>&gt;</button>
          </div>
          {showYears ? (
            <ul className={styles['year-list']}>
              <button className={styles['scroll-button']} onClick={scrollYearsUp}>
                {caretUpIcon}
              </button>
                {yearList}
              <button className={styles['scroll-button']} onClick={scrollYearsDown}>
                {caretDownIcon}
              </button>
            </ul>
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
      }
    </div>
  );
};

export default DatePicker;
