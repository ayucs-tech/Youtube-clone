import React, { useState } from 'react'

const ChatMessage = ({name, message, number}) => {
  return (
    <div className='flex my-2'>
        <img className='h-6' src="https://cdn-icons-png.flaticon.com/512/61/61205.png" alt="acount" />
        <span className='font-bold mx-2'>{name}</span>
        <span>{message}</span>
        <span>{number}</span>
    </div>
  )
}

export default ChatMessage