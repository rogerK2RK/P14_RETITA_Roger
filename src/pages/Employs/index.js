import React from 'react';
import { useSelector } from 'react-redux';
import styles from "./styles.module.css"
import { Link } from 'react-router-dom';
import TabList from '../../components/Table/dataTable';
// import DataTable from 'react-data-table-component';


function Employee() {
    const employees = useSelector((state) => state.employees);
    console.log(employees);



    return (
        <div className={styles["container"]}> 
            <h1>Current Employees</h1>
            <section>
                <TabList employees={employees}/>
                <Link to={"/"}>Home</Link>
            </section>
        </div>
    );
}

export default Employee ;