import React, { useState } from 'react';
import Styles from './styles.module.css';

const TabList = (props) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedColumn, setSortedColumn] = useState('firstName');

  const handleSort = (columnName) => {
    if (columnName === sortedColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortOrder('asc');
      setSortedColumn(columnName);
    }
  };

  const getSortIcon = (columnName) => {
    if (columnName === sortedColumn) {
      if (sortOrder === 'asc') {
        return <span>&uarr;</span>; // Icône direction haut
      } else {
        return <span>&darr;</span>; // Icône direction bas
      }
    } else {
      return null;
    }
  };

  const sortedEmployees = [...props.employees].sort((a, b) => {
    const valueA = a[sortedColumn];
    const valueB = b[sortedColumn];
    let comparison = 0;

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      comparison = valueA.localeCompare(valueB);
    } else {
      comparison = valueA - valueB;
    }

    return sortOrder === 'asc' ? comparison : -comparison;
  });

  return (
    <div className={Styles["tablist-container"]}>
      <input
        type="text"
        placeholder="Filter employees"
        className={Styles["tablist-input"]}
      />

      <table className={Styles["tablist-table"]}>
        <thead>
          <tr>
            <th onClick={() => handleSort('firstName')}>
              First Name {getSortIcon('firstName')}
            </th>
            <th onClick={() => handleSort('lastName')}>
              Last Name {getSortIcon('lastName')}
            </th>
            <th onClick={() => handleSort('birth')}>
              Birth {getSortIcon('birth')}
            </th>
            <th onClick={() => handleSort('startDate')}>
              Start Date {getSortIcon('startDate')}
            </th>
            <th onClick={() => handleSort('street')}>
              Street {getSortIcon('street')}
            </th>
            <th onClick={() => handleSort('city')}>
              City {getSortIcon('city')}
            </th>
            <th>State</th>
            <th onClick={() => handleSort('zipCode')}>
              Zip Code {getSortIcon('zipCode')}
            </th>
            <th onClick={() => handleSort('departement')}>
              Département {getSortIcon('departement')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.birth}</td>
              <td>{employee.startDate}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabList;
