import React, { useEffect } from 'react'

function List() {

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=20&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
          .then((response) => response.json())
          .then((json) => console.log(json));
      }, []);
      
  return (
    <div>List</div>
  )
}

export default List