import React from "react";
import VideoList from "../VideoList";
import styles from "./main.module.scss"

function Main() {
  return (
    <div className={styles.mainComponent}>
      <VideoList></VideoList>
    </div>
  );
}

export default Main;
