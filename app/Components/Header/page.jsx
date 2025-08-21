import Image from 'next/image'
import React from 'react'
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

import { LuFilePenLine } from "react-icons/lu";


const Header = () => {
  return (
    <header className='flex flex-col bg-gray-200 '>

<div>    <div className='flex p-4'>
 <div className='flex gap-2 px-2'>
        <div className='text-center flex flex-col items-center'>
<FcSearch  color=' white' size={24}/>
<p>Axtarış</p>
        </div>
        <div><select name="" id=""></select></div>
      </div>
      <div className='flex gap-2 px-2'>
        <div  className='text-center flex flex-col items-center'>
<FcSearch  size={24} />
<p>Geniş axtarış</p>
        </div>
      </div>

        <div className='flex border-x-1 border-gray-400'>
        <div  className='text-center flex flex-col items-center px-2'>
<FaFile className=" text-blue-300" size={24} />
<p>Baxış</p>
        </div>
        <div><select name="" id=""></select></div>
      </div>

          <div className='flex  border-gray-400 gap-2 px-2'>
        <div  className='text-center flex flex-col items-center '>
<BiPlusMedical className=" text-blue-300" size={24}/>

<p>Əlavə et</p>
        </div>
        <div><select name="" id=""></select></div>
      </div>
          <div className='flex border-gray-400'>
        <div  className='text-center flex flex-col items-center'>
<LuFilePenLine  className=" text-gray-500" size={24}/>

<p>Redakte et</p>
        </div>
        <div><select name="" id=""></select></div>
      </div>
          <div className='flex border-r-1 border-gray-400'>
        <div  className='text-center flex flex-col items-center px-2'>
<FaMinus className=" text-blue-300" size={24}/>

<p>Sil</p>
        </div>
      </div>

<div className='flex border-r-1 border-gray-400 gap-2 px-2'>
      <div className='flex  '>
        <div  className='text-center flex flex-col items-center'>
<IoEarth  className=" text-blue-300" size={24}/>

<p>Elanlari oxu</p>
        </div>
        <div><select name="" id=""></select></div>
      </div>


            <div className='flex '>
        <div  className='text-center flex flex-col items-center'>
            <div className=' bg-blue-300  rounded-full w-6 h-6 flex  justify-center items-center'>
                <IoCall color='white' />
</div>

<p>Sifarishler</p>
        </div>
      </div>


            <div className='flex  gap-2 px-2'>
        <div className='text-center flex flex-col items-center'>
<FaMagento  className=" text-blue-300" size={24}/>

<p>Agentler</p>
        </div>
      </div>

</div>

<div className='flex border-r-1 border-gray-400' >

              <div className='flex gap-2 px-2'>
        <div  className='text-center flex flex-col items-center'>
<IoStar  className=" text-blue-300" size={24}/>

<p>Əlavələr</p>
        </div>
        <div><select name="" id=""></select></div>
      </div>


</div>

<div className='flex border-r-1 border-gray-400' >

              <div className='flex gap-2 px-2 '>
        <div  className='text-center flex flex-col items-center'>
<BsDatabase color="gray" size={24} />

<p>Hesabatlar</p>
        </div>
        <div><select name="" id=""></select></div>
      </div>

      


</div>

<div className='flex border-r-1 border-gray-400' >

              <div className='flex  gap-2 px-2'>
        <div  className='text-center flex flex-col items-center'>
<SlSettings color='gray' size={24}/>

<p>İdarəetmə</p>
        </div>
        <div><select name="" id=""></select></div>
      </div>

      


</div>

<div className='flex border-r-1 border-gray-400' >

              <div className='flex gap-2 px-2 '>
        <div  className='text-center flex flex-col items-center'>
<RiInformationFill  className=" text-blue-300" size={24}/>

<p>Haqqında</p>
        </div>
        <div><select name="" id=""></select></div>
      </div>

      


</div>


        </div>

        <div className=' flex items-center gap-4'>
            <GoTriangleUp />
            <div className=' flex gap-1'><p className=' text-blue-400'>sürətli axtaris panelini gizlət</p>
<p className=' text-pink-500'>axtarışı yenilə</p>
</div>


        </div></div>

     <div className=' header-bottom flex my-2 px-4'>  

<div> 
    <div className=' flex bg-amber-600 gap-2 mb-6 '>

         <input type="checkbox" 
    name='Satis'
    />
 <label htmlFor="">

   

    Satis
 </label>
  <input type="checkbox" 
    name='kiraye'
    />
  <label htmlFor="">

  
    Kiraye
 </label>



    </div>


<div className=' flex   bg-green-400 justify-between my-2 me-2 '>
    <div>   <label htmlFor="">    <input  type="checkbox" /> Qiymet
</label></div>
  




<div className='flex bg-cyan-700 '><input type="number" placeholder='0' className='w-[50px] bg-white' />
        <div><select name="" id=""></select></div></div>
<div className='px-2'> <p>-</p></div>
        




<div className=' flex bg-yellow-400 '> <input type="number" placeholder='10000000' className='w-[50px] bg-white' />
        <div><select name="" id=""></select></div></div>

</div>

<div className=' flex  justify-between bg-emerald-900 '>
    <label htmlFor="">    <input type="checkbox" /> Sahe
</label>

<div className=' flex'>
    
     <div className='flex bg-red-400'><input type="number" placeholder='0' className='w-[50px] bg-white' />
        <div><select name="" id=""></select></div></div>

<div className='px-2'> <p>-</p></div>
<div className=' flex   bg-emerald-600 me-2 '>
    <input type="number" placeholder='500' className='w-[50px] bg-white' />
        <div><select name="" id=""></select></div></div></div>


</div>


</div>


<div className=' flex bg-amber-200 gap-3 px-2'>
<div>
    <h1>Mənzillər(Yeni tikili)</h1>
    <ul>
        <li>1-otaqli</li>
        <li>2-otaqli</li>
        <li>3-otaqli</li>
        <li>4-otaqli</li>
        <li>5-otaqli</li>
    </ul>
</div>

<div >
    <h1>Mənzillər(Kohne tikili)</h1>
    <ul>
        <li>1-otaqli</li>
        <li>2-otaqli</li>
        <li>3-otaqli</li>
        <li>4-otaqli</li>
        <li>5-otaqli</li>
    </ul>
</div>

</div>


<div className='px-4'>
    <ul className=''>
        <li>Torpaqlar</li>
        <li>Ferdi yasayis evleri</li>
        <li>bag evleri</li>
        <li>Qeyri yasayis saheleri</li>
        <li>Qarajlar</li>
    </ul>
</div>

<div className='px-4'>
    <div className='flex mb-1 gap-1'> <label htmlFor="">Metrolar:</label>
    <input type="text" className=' bg-white' /></div>
    <div className=' flex flex-col max-h-[110px]  bg-white '>
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
        <label htmlFor="">Cefer cabbarli</label></div>
       
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
        <label htmlFor="">Bakı şəhəriSəbail rayonu</label></div>
        <div className='flex gap-1'> <input type="checkbox" />
        <label htmlFor="">Bakı şəhəri Sabunçu rayonu</label>  </div>
        <div className='flex gap-1'>  <input type="checkbox" />
        <label htmlFor="">Bakı şəhəri Suraxanı rayonu</label>  </div>
       
        <div className='flex gap-1'>  <input type="checkbox" />
        <label htmlFor="">Bakı şəhəri Suraxanı rayonu</label>  </div>
      
    </div>
    
</div>
     </div>
     
    </header>
  )
}

export default Header
