import React from 'react';
import { useSelector } from 'react-redux';
// import styles from "./styles.module.css"
import { Link } from 'react-router-dom';


function Employee() {
    const employees = useSelector((state) => state.employees);
    return (
        <main>
            <h1>Current Employees</h1>
            <section>
                <div>
                    <div>
                        <label htmlFor="entries">Show</label>
                        <select name="entries" id="entries">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <p>entries</p>
                    </div>
                    <div>
                        <label>Search : </label>
                        <input id="city" type="text" />
                    </div>
                </div>
                <div>
                    <ul>
                        {employees.map((employee, index) => (
                            <li key={index}>
                                <p>{employee.firstName}</p>
                                <p>{employee.lastName}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to={"/"}>Home</Link>
            </section>
        </main>
    );
}

export default Employee ;