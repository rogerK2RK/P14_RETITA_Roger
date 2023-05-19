import React from 'react';
import styles from "./styles.module.css"
import { Link } from 'react-router-dom';


function Home() {

    function saveEmployee(e) {
        e.preventDefault();
        console.log("Hello");
    }


    return (
        <main>
            <div className={styles["title"]}>
                <h1>HRnet</h1>
            </div>
            <div className={styles["container"]}>
                <Link to={"/employees"} className={styles["container-link"]}>View Current Employees</Link>
                <h2 className={styles["container-title"]}>Create Employee</h2>
                <form id="create-employee">
                    <div>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" />
                    </div>
                    <div>
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <input id="date-of-birth" type="text" />
                    </div>
                    <div>
                        <label htmlFor="start-date">Start Date</label>
                        <input id="start-date" type="text"/>
                    </div>
                    <fieldset className={styles["address"]}>
                        <legend>Address</legend>
                        <div>
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" />
                        </div>
                        <div>
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" />
                        </div>
                        <div>
                            <label htmlFor="state">State</label>
                            <select name="state" id="state"></select>
                        </div>
                        <div>
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" />
                        </div>
                    </fieldset>
                    <div>
                        <label htmlFor="department">Department</label>
                        <select name="department" id="department">
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