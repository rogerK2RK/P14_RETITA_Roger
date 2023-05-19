import React, { useState, useRef } from 'react';
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
    const [zipCode, setSipCode] = useState('');
    const [department, setDepartment] = useState('');

    const dispatch = useDispatch();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const birthRef = useRef();
    const startDateRef = useRef();
    const streetRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipCodeRef = useRef();
    const departmentRef = useRef();

    async function saveEmployee(e) {
        e.preventDefault();
        const employee ={ firstName, lastName, birth, startDate, street, city, state, zipCode, department };
        
        await setFirstName(firstNameRef.current.value);
        await setLastName(lastNameRef.current.value);
        await setBirth(birthRef.current.value);
        await setStartDate(startDateRef.current.value);
        await setStreet(streetRef.current.value);
        await setCity(cityRef.current.value);
        await setState(stateRef.current.value);
        await setSipCode(zipCodeRef.current.value);
        await setDepartment(departmentRef.current.value);

        dispatch(addEmployee(employee));
        console.log(firstNameRef.current.value);
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
                        <input ref={firstNameRef} type="text" id="first-name" />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input ref={lastNameRef} type="text" id="last-name" />
                    </div>
                    <div>
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <input ref={birthRef} id="date-of-birth" type="text" />
                    </div>
                    <div>
                        <label htmlFor="start-date">Start Date</label>
                        <input ref={startDateRef} id="start-date" type="text"/>
                    </div>
                    <fieldset className={styles["address"]}>
                        <legend>Address</legend>
                        <div>
                            <label htmlFor="street">Street</label>
                            <input ref={streetRef} id="street" type="text" />
                        </div>
                        <div>
                            <label htmlFor="city">City</label>
                            <input ref={cityRef} id="city" type="text" />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <select ref={stateRef} name="state" id="state"></select>
                        </div>
                        <div>
                            <label htmlFor="zip-code">Zip Code</label>
                            <input ref={zipCodeRef} id="zip-code" type="number" />
                        </div>
                    </fieldset>
                    <div>
                        <label htmlFor="department">Department</label>
                        <select ref={departmentRef} name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>

                </form>
                <button onClick={saveEmployee} >Save</button>
            </div>
            <div id="confirmation" className={styles["modal"]}>Employee Created!</div>
        </main>
    );
}

export default Home ;