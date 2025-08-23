import React, { useState } from 'react'

const useDropDown = () => {

const [isOpenDropDown,setisOpenDropDown]=useState(false)
const openDropDown=()=>setisOpenDropDown(!isOpenDropDown)


  return {

    isOpenDropDown,openDropDown
  }
   
}

export default useDropDown
