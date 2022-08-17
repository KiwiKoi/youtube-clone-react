import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import styles from "./App.module.scss";
import Main from "./components/Main";

function App() {
  return (
    <div className={styles.appComponent}>
      <Header></Header>
      <div className={styles.mainContent}>
        <SideBar></SideBar>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
