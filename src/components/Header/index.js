import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            LOGO
          </Link>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>
          <Link to="/user" className={styles.avatar}></Link>
        </div>
      </div>
    </header>
  );
}
