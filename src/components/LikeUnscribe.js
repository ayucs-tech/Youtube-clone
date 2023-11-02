import React, { useState } from 'react'

const LikeUnscribe = () => {
    const[liked, setLiked]= useState(false);
    const[disliked, setDisLiked]= useState(false);
    const[subscribe, setSubscribe]= useState(false);
  return (
    <>
    <div className='flex mx-6 p-5 justify-between'>
    <button onClick={()=>setSubscribe(!subscribe)} className={subscribe? 'hover:bg-red-600 rounded-full px-4  text-black k bg-red-500 py-2' :'hover:bg-gray-800 rounded-full px-4 border text-white border-black bg-black py-2'}>{subscribe? 'Subscribed' : 'Subscribe'}</button>
        <div>
            <button onClick={()=>{setLiked(!liked);
            setDisLiked(false)}} 
            className={liked? "bg-blue-400 hover:bg-blue-500 rounded-l-full px-4 border border-r-black py-2":           "hover:bg-gray-300 rounded-l-full px-4 border border-r-black bg-gray-200 py-2"}
            >Like</button>
            <button onClick={()=>{setDisLiked(!disliked);
            setLiked(false);}
            } className={disliked? "bg-red-500 hover:bg-red-600 rounded-r-full px-4 py-2" :'hover:bg-gray-300 rounded-r-full px-4 bg-gray-200 py-2'}>Dislike</button>
        </div>
    </div>
    </>
  )
}

export default LikeUnscribe