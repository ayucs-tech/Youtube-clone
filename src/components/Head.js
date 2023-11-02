import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YT_SEARCH } from '../utils/constants';

const Head = () => {
const [showSuggestions, setShowSuggestions]= useState(false);

const [searchSuggesitons, setSearchSuggestions]= useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer); //if another keypress happens before completion of 200ms then this api call gets declined. Implementation of debouncing concept.
    }
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YT_SEARCH + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSearchSuggestions(json[1]);
  }


  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <>
      <div className='grid bg-white fixed w-full grid-flow-col  p-2 shadow-md'>

        <div className='flex col-span-1 p-1 items-center'>
          <img onClick={() => toggleMenuHandler()}
            className='h-5 cursor-pointer' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg==" alt="menu" />
          <a href="/"><img className='h-5 mx-4' src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png" alt="menu" /></a>
        </div>

        <div className='col-span-10 '>
          <div className='flex'> 
          <input className='w-1/2  rounded-l-full h-9 p-4 border border-gray-400' placeholder='Search' type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            />
          <button className='h-9 p-1 rounded-r-full  bg-gray-100 border border-gray-400'>
            <img className='h-4 px-4' src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="" />
          </button>
            </div>
            {
             showSuggestions && ( 
            <div className='fixed bg-white px-4 py-2 w-1/3 shadow rounded-lg'>
              <ul>
                {
                  searchSuggesitons.map((i)=><li key={i}>{i}</li>)
                }
              </ul>
            </div>
           ) }
        </div>

        <div className='col-span-1 p-1'>
          <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/61/61205.png" alt="acount" />
        </div>

      </div>
    </>
  )
}

export default Head