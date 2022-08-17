import React from "react";
import burgerIcon from "../../hamburger-menu.svg";

import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
      <div className={styles.burgerContainer}>
        <div className={styles.burgerMenu}>
          <img src={burgerIcon} alt="" />
        </div>
      </div>
      <div className={styles.brand}>DerpTube</div>
      </div>

    </header>
  );
}

export default Header;
