import React from "react";
import * as styles from './footer.module.scss';

const footer = ({ children }) => {
    return (
        <footer className={styles.container}>
            <div className={styles.footer}>
                {children}
            </div>
        </footer>
    )
}

export default footer;

