import React from "react";
import styles from "./videocard.module.scss";

function VideoCard(props: { videoId: string; videoTitle: string; channelTitle: string }) {
  const { videoId, videoTitle, channelTitle } = props;
  return (
    <a
      className={styles.card}
      key={videoId}
      href={`https://youtube.com/watch?v=${videoId}`}
    >
      <div className={styles.cardContent}>
        <img className={styles.thumbnail} src={`https://img.youtube.com/vi/${videoId}/default.jpg`} alt="" />
        <div className={styles.detail}>
          <h3 className={styles.cardTitle}>{videoTitle}</h3>
          <p className={styles.subDetails}>{channelTitle}</p>
        </div>
      </div>
    </a>
  );
}

export default VideoCard;
