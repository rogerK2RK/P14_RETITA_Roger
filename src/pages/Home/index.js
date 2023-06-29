import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/actions';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
// import DateInput from '../../components/DateInput/DateInput';
import Modal from '../../components/Modal';
import List from '../../components/List/List';
import departements from '../../components/TabList/departement.js';
import states from '../../components/TabList/state.js';
import renderError from '../../components/emptyInput/index';

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
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  

  const dispatch = useDispatch();


  const handleSelectDepartment = (department) => {
    setDepartment(department);
  };
  const handleSelectState = (state) => {
    setState(state);
  };

  const stateNames = states.map((thestate) => thestate.name);

  async function saveEmployee(e) {
    e.preventDefault();
    const newErrors = {};

    if (firstName.trim() === '') {
      newErrors.firstName = 'First Name is required';
    }
    if (lastName.trim() === '') {
      newErrors.lastName = 'Last Name is required';
    }
    // if (birth.trim() === '') {
    //   newErrors.birth = 'Date of birth is required';
    // }
    // if (startDate.trim() === '') {
    //   newErrors.startDate = 'Start Date is required';
    // }
    if (street.trim() === '') {
      newErrors.street = 'Street is required';
    }
    if (city.trim() === '') {
      newErrors.city = 'City is required';
    }
    if (zipCode.trim() === '') {
      newErrors.zipCode = 'zipCode is required';
    }
    // Ajoutez des vérifications similaires pour les autres champs

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
      
    // Réinitialiser les champs du formulaire
    setFirstName('');
    setLastName('');
    setBirth('');
    setStartDate('');
    setStreet('');
    setCity('');
    setState('');
    setZipCode('');
    setDepartment('');

    setShowModal(true);
    
  }


  function closeModal() {
    setShowModal(false);
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
            {errors.firstName && renderError(errors.firstName)}
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && renderError(errors.lastName)}
          </div>
          <div>
            <label htmlFor="date-of-birth">Date of Birth</label>
            {/* <DateInput
              id="date-of-birth"
              type="text"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            /> 
            {errors.birth && renderError(errors.birth)}*/}
          </div>
          <div>
            <label htmlFor="start-date">Start Date</label>
            {/* <DateInput
              id="start-date"
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            /> 
            {errors.startDate && renderError(errors.startDate)}*/}
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
              {errors.street && renderError(errors.street)}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {errors.city && renderError(errors.city)}
            </div>
            <div>
              <label htmlFor="state">State</label>
              <List states={stateNames} onSelectState={handleSelectState}/>
            </div>
            <div>
              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              {errors.zipCode && renderError(errors.zipCode)}
            </div>
          </fieldset>
          <div>
            <label htmlFor="department">Department</label>
            <List states={departements} onSelectState={handleSelectDepartment}/>
          </div>
          <button type="submit" >Save</button>
        </form>
      </div>
      {showModal && (
        <Modal className={styles["box-modal"]} message="Employee Created!" onClose={closeModal} />
      )}
    </main>
  );
}

export default Home;
