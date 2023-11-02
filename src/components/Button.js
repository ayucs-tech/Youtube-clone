import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='hover:bg-gray-300 bg-gray-200 py-1 px-2 mx-1 my-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button