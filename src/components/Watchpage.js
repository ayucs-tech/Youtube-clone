import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Livechat from './Livechat';
import LikeUnscribe from './LikeUnscribe';
import { oneShimmer } from './Shimmer';

const Watchpage = () => {
const [loading , setLoading]=useState(true)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  

  return (
    <div className='flex flex-col w-full'>
      <div className='p-4 flex mt-14 w-full'>
        <div>
          {loading && oneShimmer()}
          <iframe onLoad={()=>setLoading(false)} className='rounded' width="760" height="365 " src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <LikeUnscribe />
        </div>
        <div className='w-full'>
          <Livechat />
        </div>
      </div>

    </div>
  )
}

export default Watchpage