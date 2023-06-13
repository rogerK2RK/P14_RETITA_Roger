import React from 'react';
import Styles from './styles.module.css';

const TabList = (props) => {
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birth</th>
            <th>Start Date</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Département</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee, index) => (
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