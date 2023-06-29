import React from 'react';
import styles from "./styles.module.css";



function renderError(message) {
    return <span className={styles['message']}>{message}</span>;
}
export default renderError;