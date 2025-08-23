
import { useState } from "react"

const useModal=()=>{

    const[isOpenSearchModal,setIsOpenSearchModal]=useState(false)

    const openSearchModal=()=>setIsOpenSearchModal(!isOpenSearchModal)

    const closeSearchModal=()=>setIsOpenSearchModal(false)
    return {openSearchModal,isOpenSearchModal,closeSearchModal}
}

export default useModal