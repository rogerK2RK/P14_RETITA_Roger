import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/actions';
import styles from "./styles.module.css"
import { Link } from 'react-router-dom';

function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birth, setBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('');

  const dispatch = useDispatch();

  async function saveEmployee(e) {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      birth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department
    };

    dispatch(addEmployee(employee));
    console.log(employee);
  }

  return (
    <main>
      <div className={styles["title"]}>
        <h1>HRnet</h1>
      </div>
      <div className={styles["container"]}>
        <Link to={"/employees"} className={styles["container-link"]}>View Current Employees</Link>
        <h2 className={styles["container-title"]}>Create Employee</h2>
        <form id="create-employee" onSubmit={saveEmployee}>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input
              id="date-of-birth"
              type="text"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <fieldset className={styles["address"]}>
            <legend>Address</legend>
            <div>
              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                {/* Ajoutez les options ici */}
              </select>
            </div>
            <div>
              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </fieldset>
          <div>
            <label htmlFor="department">Department</label>
            <select
              name="department"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              {/* Ajoutez les options ici */}
            </select>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
      <div id="confirmation" className={styles["modal"]}>Employee Created!</div>
    </main>
  );
}

export default Home;
