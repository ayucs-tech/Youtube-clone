import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Body = () => {
 
  const dispatch= useDispatch();
  useEffect(()=>{
  dispatch(closeMenu())
  },[])

  return (<>
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
    </div>
  </>
  )
}

export default Body