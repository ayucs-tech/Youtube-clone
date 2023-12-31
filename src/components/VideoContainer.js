import React, { useEffect, useState } from 'react'
import { YT_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer, { oneShimmer } from './Shimmer';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }

  return !videos.length ? <div className="d-flex justify-content-center">{<Shimmer/>}</div> :(
    <>
      <div className='flex flex-wrap justify-evenly'>
        {

          videos.map(video => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))

        }
      </div>
    </>
  )
}

export default VideoContainer;