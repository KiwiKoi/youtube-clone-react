import React from "react";
import icon from '../../logo.svg'
import styles from "./SideBar.module.scss";

function SideBar() {
  return (
    <div className={styles.sidebarComponent}>
      <div className={styles.menuContent}>
        <div className={styles.menuEntry}>
            <div className={styles.entryContent}>
              <img src={icon} alt="" />
              <span>Test 1</span>
            </div>
        </div>
        <div className={styles.menuEntry}>
            <div className={styles.entryContent}>
              <img src={icon} alt="" />
              <span>Test 1</span>
            </div>
        </div>
        <div className={styles.menuEntry}>
            <div className={styles.entryContent}>
              <img src={icon} alt="" />
              <span>Test 1</span>
            </div>
        </div>
        <div className={styles.menuEntry}>
            <div className={styles.entryContent}>
              <img src={icon} alt="" />
              <span>Test 1</span>
            </div>
        </div>
        <div className={styles.menuEntry}>
            <div className={styles.entryContent}>
              <img src={icon} alt="" />
              <span>Test 1</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
