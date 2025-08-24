import React, { useState } from 'react'

const useDropDown = () => {

const [isOpenDropDown,setIsOpenDropDown]=useState(false)
  const openDropDown = () => setIsOpenDropDown(true)
  const closeDropDown = () => setIsOpenDropDown(false)
  const toggleDropDown = () => setIsOpenDropDown(prev => !prev)

  return {
    isOpenDropDown,
    openDropDown,
    closeDropDown,
    toggleDropDown,
  }
   
}

export default useDropDown
