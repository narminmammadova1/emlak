'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FcSearch } from "react-icons/fc";
import { FaFile } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaMagento } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { BsDatabase } from "react-icons/bs";
import { RiInformationFill } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";

import { LuFilePenLine } from "react-icons/lu";
import useDropDown from '@/app/Hooks/useDropDown';
import Modal from '../Modal/Modal';
import ModalSearch from '@/app/ModalSearch/ModalSearch';
import useAppContext from '@/context/useAppContext';



const Header = () => {

const [showPanel,setShowPanel]=useState(true)
const {openDropDown,isOpenDropDown}= useDropDown()
  const { isOpenSearchModal,toggleSearchModal } = useAppContext();
const dropdownRef=useRef<HTMLDivElement>(null)
const doubleClick=()=>{
setShowPanel((prew)=>!prew)
}



useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      if (isOpenDropDown) openDropDown(); // toggle bağlamaq üçün
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [isOpenDropDown]);


useEffect(() => {
  if (isOpenSearchModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = '';
  };
}, [isOpenSearchModal]);


  return (
    <header className='flex flex-col w-screen min-w-full '>

<section className=' relative'>    <div className='flex p-4'>
 <button  onClick={openDropDown}  className='flex gap-2 px-2 '>
        <div className='text-center flex flex-col items-center'>
<FcSearch   size={24}/>
<p>Axtarış</p>
        </div>
        <div><GoTriangleDown size={22}  color='white' /></div>
      </button>
      <button onClick={toggleSearchModal} className='flex gap-2 px-2 relative'>
        <div  className='text-center flex flex-col items-center'>
<FcSearch  size={24} />
<p>Geniş axtarış</p>
        </div>
      </button>
      <div  ref={dropdownRef} className= {isOpenDropDown ?  ' bg-white px-4   py-2 absolute top-16': 'hidden'} >
<ul className=' flex flex-col gap-2  font-bolder  '>
  <li  className='hover-purple'>Standart axtarış</li>
  <li className='border-b-1 border-gray-400 hover-purple '>Surətli axtaris panelini göstər</li>
  <li  className='hover-purple'>Keçid üzrə axtariş(əmlak bazası serverinde,18 mln elan arasında axtariş)</li>
  <li className='border-b-1 border-gray-400 hover-purple '>Acar soz uzre etrafli axtaris</li>
  <li className='hover-purple'>Telefon nömrəsi üzrə axtarış</li>
  <li className='border-b-1 border-gray-400 hover-purple '>Hüquq sahibi uzrə axtarış</li>
  <li className='hover-purple'>Əlaqəli şəxs üzrə axtarış</li>
  <li className='border-b-1 border-gray-400 hover-purple '>Sheher uzre axtaris</li>
  <li className='hover-purple'>Nişhangah üzrə axtarış</li>
  <li className='border-b-1 border-gray-400 hover-purple '>Email üzrə axtarış</li>
  <li className='border-b-1 border-gray-400 hover-purple '>Seçilən istifadəçinin məsul olduğu əmlaklar</li>
  <li className='hover-purple'>Seçilən istifadəçinin barəsində məlumat verdiyi əmlaklar</li>
  <li className='border-b-1 border-gray-400 hover-purple '>MTK üzrə axtarış</li>
  <li className='hover-purple'>İnternetdən oxunan(təsdiq edilmeyənlər)</li>
</ul>

      </div>

        <button className='flex border-x-1 border-gray-400'>
        <div  className='text-center flex flex-col items-center px-2'>
<FaFile className=" text-blue-300" size={24} />
<p>Baxış</p>
        </div>
        <div>        <div><GoTriangleDown size={22}   color='white' /></div>
</div>
      </button>

          <button className='flex  border-gray-400 gap-2 px-2'>
        <div  className='text-center flex flex-col items-center '>
<BiPlusMedical className=" text-blue-300" size={24}/>

<p>Əlavə et</p>
        </div>
        <div>        <div><GoTriangleDown size={22}  color='white' /></div>
</div>
      </button>
          <button className='flex border-gray-400'>
        <div  className='text-center flex flex-col items-center'>
<LuFilePenLine  className=" text-blue-300" size={24}/>

<p>Redaktə et</p>
        </div>
        <div>        <div><GoTriangleDown size={22}  color='white' /></div>
</div>
      </button>
          <button className='flex border-r-1 border-gray-400'>
        <div  className='text-center flex flex-col items-center px-2'>
<FaMinus className=" text-blue-300" size={24}/>

<p>Sil</p>
        </div>
      </button>

<div className='flex border-r-1 border-gray-400 gap-2 px-2'>
      <button className='flex '>
        <div  className='text-center flex flex-col items-center'>
<IoEarth  className=" text-blue-300" size={24}/>

<p >Elanlari oxu</p>
        </div>
        <div>        <div><GoTriangleDown size={22} color='white' /></div>
</div>
      </button>


            <div className='flex '>
        <button  className='text-center flex flex-col items-center'>
            <div className=' bg-blue-300  rounded-full w-6 h-6 flex  justify-center items-center'>
                <IoCall color='white' />
</div>

<p>Sifarişlər</p>
        </button>
      </div>


            <div className='flex  gap-2 px-2'>
        <button className='text-center flex flex-col items-center'>
<FaMagento  className=" text-blue-300" size={24}/>

<p>Agentlər</p>
        </button>
      </div>

</div>

<div className='flex border-r-1 border-gray-400' >

              <button className='flex gap-2 px-2'>
        <div  className='text-center flex flex-col items-center'>
<IoStar  className=" text-blue-300" size={24}/>

<p>Əlavələr</p>
        </div>
        <div>        <div><GoTriangleDown size={22}  color='white'  /></div>
</div>
      </button>


</div>

<button className='flex border-r-1 border-gray-400' >

              <div className='flex gap-2 px-2 '>
        <div  className='text-center flex flex-col items-center'>
<BsDatabase className=" text-blue-300" size={24} />

<p>Hesabatlar</p>
        </div>
        <div>        <div><GoTriangleDown size={22}  color='white' /></div>
</div>
      </div>

      


</button>

<button className='flex border-r-1 border-gray-400' >

              <div className='flex  gap-2 px-2'>
        <div  className='text-center flex flex-col items-center'>
<SlSettings className=" text-blue-300" size={24}/>

<p>İdarəetmə</p>
        </div>
        <div>        <div><GoTriangleDown size={22}   color='white'/></div>
</div>
      </div>

      


</button>

<button className='flex border-r-1 border-gray-400' >

              <div className='flex gap-2 px-2 '>
        <div  className='text-center flex flex-col items-center'>
<RiInformationFill  className=" text-blue-300" size={24}/>

<p>Haqqında</p>
        </div>
        <div>        <div><GoTriangleDown size={22}  color='white' /></div>
</div>
      </div>

      


</button>


        </div>

        <div  className='flex gap-4'>
          <div  onClick={doubleClick} className=' flex items-center gap-4'> 
          {showPanel ? <GoTriangleDown size={18}  color='white'/>
: <GoTriangleUp size={18} color='white' /> 
 } 
          <p className='  cursor-pointer text-blue-400'>{showPanel ? "sürətli axtarış panelini gizlət" :'sürətli axtarış panelini aç' }</p>
</div>
            <div className=' flex gap-1'>

<p className=' text-purple-500'>axtarışı yenilə</p>
</div>


        </div>
        </section>

     <section  className={showPanel ? '  visible  flex my-2 px-4' :"hidden "}>  

<div> 
    <div className=' flex gap-2 mb-6 '>

         <input type="checkbox" 
    name='Satis'
    />
 <label htmlFor="">

   

    Satış
 </label>
  <input type="checkbox" 
    name='kiraye'
    />
  <label htmlFor="">

  
    Kirayə
 </label>



    </div>


<div className=' flex  justify-between my-2 me-2 '>
    <div>   <label htmlFor="">    <input  type="checkbox" /> Qiymət
</label></div>
  




<div className='flex  '><input type="number" placeholder='0' className='w-[50px] bg-white' />
        <div><select name="" id=""></select></div></div>
<div className='px-2'> <p>-</p></div>
        




<div className=' flex '> <input type="number" placeholder='10000000' className='w-[50px] bg-white' />
        <div><select name="" id=""></select></div></div>

</div>

<div className=' flex  justify-between '>
    <label htmlFor="">    <input type="checkbox" /> Sahə
</label>

<div className=' flex'>
    
     <div className='flex'><input type="number" placeholder='0' className='w-[50px] bg-white' />
        <div><select name="" id=""></select></div></div>

<div className='px-2'> <p>-</p></div>
<div className=' flex  me-2 '>
    <input type="number" placeholder='500' className='w-[50px] bg-white' />
        <div><select name="" id=""></select></div></div></div>


</div>


</div>


<div className=' flex gap-3 px-2'>
<div>
    <h1>Mənzillər(Yeni tikili)</h1>
    <ul>
        <li>1-otaqlı</li>
        <li>2-otaqlı</li>
        <li>3-otaqlı</li>
        <li>4-otaqlı</li>
        <li>5-otaqlı</li>
    </ul>
</div>

<div >
    <h1>Mənzillər(Köhnə tikili)</h1>
    <ul>
        <li>1-otaqlı</li>
        <li>2-otaqlı</li>
        <li>3-otaqlı</li>
        <li>4-otaqlı</li>
        <li>5-otaqlı</li>
    </ul>
</div>

</div>


<div className='px-4'>
    <ul className=''>
        <li>Torpaqlar</li>
        <li>Fərdi yasayış evləri</li>
        <li>bag evləri</li>
        <li>Qeyri yasayiş sahələri</li>
        <li>Qarajlar</li>
    </ul>
</div>

<div className='px-4'>
    <div className='flex mb-1 gap-1'> <label htmlFor="">Metrolar:</label>
    <input type="text" className=' bg-white' /></div>
    <div className=' flex flex-col max-h-[110px] overflow-y-auto bg-white '>
        <div className='flex gap-1'> <input type="checkbox" />
        <label htmlFor="">20 Yanvar</label></div>
       <div className='flex gap-1'> <input type="checkbox" />
        <label htmlFor="">28 May</label></div>
         <div className='flex gap-1'>   <input type="checkbox" />
        <label htmlFor="">Avtovagzal</label></div>
       <div className='flex gap-1'>  <input type="checkbox" />
        <label htmlFor="">Azadliq prospekti</label></div>
        <div className='flex gap-1'> <input type="checkbox" />
        <label htmlFor="">Bakmil</label>  </div>
         <div className='flex gap-1'> <input type="checkbox" />
        <label htmlFor="">Cəfər Cabbarlı</label></div>
       
    </div>
    
</div>


<div className=' '>
    <div className='flex mb-1 gap-1'> <label htmlFor="">Rayonlar:</label>
    <input type="text"  className='bg-white '/></div>
    <div className=' flex flex-col bg-white max-h-[110px] overflow-y-auto'>
        <div className='flex gap-1'> <input type="checkbox" />
        <label htmlFor="">Bakı şəhəri Binəqədi rayonu</label></div>
       <div className='flex gap-1'> <input type="checkbox" />
        <label htmlFor="">Bakı şəhəri Qaradağ rayonu</label></div>
         <div className='flex gap-1'>   <input type="checkbox" />
        <label htmlFor="">Bakı şəhəri Xəzər rayonu</label></div>
       <div className='flex gap-1'>  <input type="checkbox" />
        <label htmlFor="">Bakı şəhəri Səbail rayonu</label></div>
        <div className='flex gap-1'> <input type="checkbox" />
        <label htmlFor="">Bakı şəhəri Sabunçu rayonu</label>  </div>
        <div className='flex gap-1'>  <input type="checkbox" />
        <label htmlFor="">Bakı şəhəri Suraxanı rayonu</label>  </div>
       
        <div className='flex gap-1'>  <input type="checkbox" />
        <label htmlFor="">Bakı şəhəri Suraxanı rayonu</label>  </div>
      
    </div>
    
</div>
     </section>


{isOpenSearchModal && (
<Modal>
<ModalSearch/>
</Modal>
)}

    </header>
  )
}

export default Header
