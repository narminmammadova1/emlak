import React from 'react'
import { FaSearch } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";
import { ImUser } from "react-icons/im";
import { FaList } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";
import { BsLink } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=' bg-gray-200  ps-2'>
      <section className='footer-top  flex gap-1  items-center border-y-1 border-gray-400'>
        <div className='flex gap-1 items-center'>
          <label htmlFor="">Say:</label>
          <input type="number" className='  bg-yellow-200 w-[50px] h-[20px]' />
          <label htmlFor="">Açar soz:</label>
          <input type="text" className=' bg-white border-1 border-black h-[20px] w-[100px]' />
          <button className='flex gap-1 items-center'>   <FaSearch className=" text-blue-400"  />Axtar</button>
       


        </div>
        <div className='flex border-x-1 px-1 border-gray-400'>
          <button className='flex gap-1 items-center'>
                   <TbRefresh  className=" text-blue-400" />
Məlumatı yenilə
          </button>
        </div>
           <div className='border-r-1 px-1 border-gray-400' >
          <button className='flex gap-1 items-center'>
<FaClockRotateLeft  className=" text-blue-400"/>
Xatırlatmada olan
          </button>
        </div>

            <div className='border-r-1 px-1 border-gray-400'>
          <button className=' flex gap-1 items-center'>
<ImUser className=" text-blue-400" />
Daxil etdiklərim
          </button>
        </div>

            <div className='border-r-1 px-1 border-gray-400'>
          <button className='flex gap-1 items-center'>
<FaList className=" text-blue-400" />
Fərqləndirilənlər
          </button>
        </div>

           <div className='border-r-1 px-1 border-gray-400'>
          <button className='flex gap-1 items-center'>
<FaTriangleExclamation className=" text-red-500" />
Vasitəçidir
          </button>
        </div>

            <div className='border-r-1 px-1 border-gray-400'>
          <button className='flex'>
<BsLink className=" text-blue-400" size={20}/>
Əlaqəli əmlaklar
          </button>
        </div>

         <div className='border-r-1 px-1 border-gray-400'>
          <button className='flex gap-1 items-center'>
<FaMinusCircle  className=" text-blue-400"/>
Bugün daxil edilenlər
          </button>
        </div>

        <div>
          <label>Digər</label>
          <select name="" id=""></select>
        </div>
      </section>

      <section className=' footer-bottom flex gap-1'>

<div className=' border-r-1 px-2 border-gray-400'>
  <p>İstifadəçi:</p>
</div>
<div className='px-16'>
  <p>Adminstrator</p>
</div>
<div className=' w-[100px] border-l-1 border-gray-400'></div>
<div className='px-6 border-x-1 border-gray-400'>
  <p>0</p>
</div>
<div>

</div>
<div className=' border-r-1 border-gray-400 px-1'>
  <p>CAPS</p>
</div>
<div className=' border-r-1 border-gray-400 px-1'>
  <p>NUM</p>
</div>
<div className=' border-r-1 border-gray-400 px-1'>
  <p>SCRL</p>
</div>
<div className=' border-r-1 border-gray-400 px-1'>
  <p>INS</p>
</div>
<div className=' border-r-1 border-gray-400 px-1'>
  <button className=' text-green-500'>Online dəstək</button>
</div>
<div className='w-[100px] border-r-1 border-gray-400'></div>
<div>

  <p className='  text-pink-600'>Komputerinizin yaddaşını yükləməməsi üçün köhnə elanlarin şəkillərini silin...</p>
</div>

      </section>
    </footer>
  )
}

export default Footer
