import { useEffect, useState } from "react";
import VideoCard from "../VideoCard";
import {mockData} from '../../mock-data'
import styles from './videoList.module.scss';

function VideoList() {
  const [data, setData] = useState<any | null>();

  useEffect(() => {
    // fetch(
    //   `https://www.googleapis.com/youtube/v3/search?maxResults=20&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data);
    //   });

    setData(mockData)
  }, []);
  const mappedData: any = data?.items?.map((item: any) => {
    return (
      <VideoCard
        key={item.id.videoId}
        videoId={item.id.videoId}
        videoTitle={item.snippet.title}
        channelTitle={item.snippet.channelTitle}
      ></VideoCard>
    );
  });

  return <div className={styles.cardList}>{mappedData}</div>;
}

export default VideoList;
