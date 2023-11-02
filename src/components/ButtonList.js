import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <>
    <div className='flex m-2 justify-center'>
    <Button name="All"/>
    <Button name="Music"/>
    <Button name="Games"/>
    <Button name="Sitcoms"/>
    <Button name="Banking"/>
    <Button name="Exams"/>
    <Button name="Coding"/>
    <Button name="Interview"/>
    <Button name="English"/>
    <Button name="Reviews"/>
    <Button name="Bollywood"/>
    </div>
    </>
  )
}

export default ButtonList