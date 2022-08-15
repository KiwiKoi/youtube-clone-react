import React from 'react'
import styles from "./header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.brand}>
            DerpTube
        </div>
    </header>
  )
}

export default Header