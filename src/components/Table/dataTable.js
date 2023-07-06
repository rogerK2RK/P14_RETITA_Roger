import React, { useState } from 'react';
import Styles from './styles.module.css';

const TabList = (props) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedColumn, setSortedColumn] = useState('firstName');
  const [searchValue, setSearchValue] = useState('');

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

  const sortedEmployees = [...props.employees]
  .filter((employee) => {
    // Filtrer en fonction de la valeur de recherche
    const search = searchValue.toLowerCase();
    return (
      employee.firstName.toLowerCase().includes(search) ||
      employee.lastName.toLowerCase().includes(search) ||
      employee.birth.toLowerCase().includes(search) ||
      employee.startDate.toLowerCase().includes(search) ||
      employee.street.toLowerCase().includes(search) ||
      employee.city.toLowerCase().includes(search) ||
      employee.state.toLowerCase().includes(search) ||
      employee.zipCode.toLowerCase().includes(search) ||
      employee.department.toLowerCase().includes(search)
    );
  })
  .sort((a, b) => {
    // Trier les résultats filtrés
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
      <div className={Styles["first-bloc"]}>
        <label>Show 
        <select className={Styles['show']}>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select> entries</label>
        <label>
          Search : 
          <input
            type="text"
            placeholder="Filter employees"
            className={Styles["tablist-input"]}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
      </div>

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
            <th onClick={() => handleSort('state')}>
              State {getSortIcon('state')}
            </th>
            <th onClick={() => handleSort('zipCode')}>
              Zip Code {getSortIcon('zipCode')}
            </th>
            <th onClick={() => handleSort('department')}>
              Département {getSortIcon('department')}
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
      <div className={Styles["last-bloc"]}>
        <div>
            <p>Showing {1} to {sortedEmployees.length} of {sortedEmployees.length} entries</p>
        </div>
        <div className={Styles["page-bloc"]}>
            <button>Previous</button>
            <p>1</p>
            <button>Previous</button>
        </div>
      </div>
    </div>
  );
};

export default TabList;
