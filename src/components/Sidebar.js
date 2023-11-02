import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen= useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <>
      <div className='p-5 shadow w-56 h-screen mt-14 '>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
        <ul className='pt-4'>
          <li>Library</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
        </ul>
        <h1 className='font-semibold pt-4 text-lg'>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar