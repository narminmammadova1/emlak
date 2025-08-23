import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import useAppContext from '@/context/useAppContext';

const ModalSearch = () => {
  const { isOpenSearchModal, toggleSearchModal } = useAppContext();
if (!isOpenSearchModal) return null;

  return (
          <div className="w-2/3  bg-white border-2 px-2 py-2 border-purple-400 rounded-md relative z-[10000]">

<div className='flex items-center justify-between '> <h1 className=' text-purple-500 font-bold text-xl text-center '>Axtarış</h1>

<button onClick={toggleSearchModal}><IoCloseCircle   className=' text-purple-500' size={26}/>
</button>

</div>
<div className='topdiv  flex mt-4  gap-12 '>
<div className='leftdiv flex py-2  w-1/2  flex-col    gap-2'>
<div className='flex gap-2 justify-end'> <label htmlFor="">Kod:</label>
<input type="text" /></div>
<div className='flex w-full justify-end'><label htmlFor="">Əmlakın növü:</label>
<select className='search-inp' name="" id=""></select></div>
<div className='flex w-full justify-end'><label htmlFor="">Əməliyyat:</label>
<select className='search-inp' name="" id=""></select></div>
<div className='flex w-full justify-end'><label htmlFor="">Şəhər:</label>
<select className='search-inp' name="" id=""></select></div>
  <div className='flex w-full justify-end'><label htmlFor="">Rayon,qəsəbə:</label>
<select className='search-inp' name="" id=""><option value="1">Bakı</option>
  <option value="2">Gəncə</option>
  <option value="3">Sumqayıt</option></select></div>
<div className='flex w-full justify-end'><label htmlFor="">Nişangah:</label>
<select className='search-inp' name="" id=""><option value="1">Bakı</option>
  <option value="2">Gəncə</option>
  <option value="3">Sumqayıt</option></select></div>


<div className='flex w-full justify-end'><label htmlFor="">Metro:</label>
<select className='search-inp' name="" id=""><option value="1">Bakı</option>
  <option value="2">2</option>
  <option value="3">3</option></select></div>
<div className='flex w-full justify-end'><label htmlFor="">Otaq sayı:</label>
<select className='search-inp' name="" id=""><option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option></select></div>
<div className='flex w-full justify-end'><label htmlFor="">Tikilinin növü:</label>
<select className='search-inp' name="" id=""><option value="1">Yeni</option>
  <option value="2">kohne</option>
  </select></div>
<div className='flex w-full justify-end gap-4'><label htmlFor="">Mərtəbə:</label>
<select className='search-inp ' name="" id=""><option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option></select>
  <p>-</p>
  
  <select className='search-inp' name="" id=""><option value="1">1</option>
  <option value="2">1</option>
  <option value="3">3</option></select>
  </div>
<div className='flex w-full justify-end gap-4'><label htmlFor="">Ümumi sahə:</label>
<select className='search-inp ' name="" id=""><option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option></select>
  <p>-</p>
  
  <select className='search-inp' name="" id=""><option value="1">1</option>
  <option value="2">1</option>
  <option value="3">3</option></select>
  </div>
  
  
<div className='flex w-full justify-end gap-4'>
<label htmlFor="">Daxil olunma tarixi:</label>
<select className='search-inp ' >
  <option value="1">23/04/25</option>
  <option value="2">23/04/25</option>
  <option value="3">23/04/25</option>
</select>
<p>-</p>
<select className='search-inp ' >
  <option value="1">23/04/25</option>
  <option value="2">23/04/25</option>
</select>


</div>


<div className='flex w-full justify-end gap-4'><label htmlFor="">Qiymət:</label>
<select className='search-inp ' name="" id=""><option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option></select>
  <p>-</p>
  
  <select className='search-inp' name="" id=""><option value="1">1</option>
  <option value="2">1</option>
  <option value="3">3</option></select>
    <select className='search-inp' name="" id=""><option value="1">1</option>
  <option value="2">1</option>
  <option value="3">3</option></select>
  </div>

</div>
<div className='rightdiv  w-1/2 '>

  <div className=' flex flex-col gap-2'> 

<div className=' flex flex-col items-end '>
      <div className='flex w-full gap-2 justify-end'><label htmlFor="">Portfel:</label>
<select className='search-inp' name="" id=""></select>

</div>
<div className='mt-2'>
    <div className='flex gap-2'>
    <input type="checkbox" />
    <label htmlFor="">Ekskluziv əmlaklar</label>
</div>
<div className='flex gap-2'>
    <input type="checkbox" />
    <label htmlFor="">Arxivdə olan əmlaklar</label>
</div>
<div className='flex gap-2'>
    <input type="checkbox" />
    <label htmlFor="">Xatırlatmada olan əmlaklar</label>
</div>
</div>

</div>
 
<div className='flex w-full justify-end gap-2'><label htmlFor="">Layihə:</label>
<select className='search-inp' name="" id=""></select></div>
  <div className='flex w-full justify-end  gap-2'><label htmlFor="">Təmiri:</label>
<select className='search-inp' name="" id=""></select></div>
<div className='flex w-full justify-end  gap-2'><label htmlFor="">MTK:</label>
<select className='search-inp' name="" id=""></select></div>

<div className='flex w-full justify-end  gap-2'><label htmlFor="">Məlumatın mənbəyi:</label>
<select className='search-inp' name="" id=""></select></div>
<div className='flex w-full justify-end  gap-2'><label htmlFor="">Şəxsin növü:</label>
<select className='search-inp' name="" id=""></select></div>
<div className='flex w-full justify-end  gap-2'><label htmlFor="">Əlaqəli şəxs:</label>
<select className='search-inp' name="" id=""></select></div>

<div className='flex w-full justify-end  gap-2'><label htmlFor="">Əlaqə nömrəsi:</label>
<select className='search-inp' name="" id=""></select></div>
<div className='flex w-full justify-end  gap-2'><label htmlFor="">Sənəd:</label>
<select className='search-inp' name="" id=""></select></div>
<div className='flex w-full justify-end  gap-2'><label htmlFor="">Əmlakın statusu:</label>
<select className='search-inp' name="" id=""></select></div>
<div className='flex w-full justify-end gap-4 '>
<label htmlFor="">Daxil olunma tarixi:</label>
<select className='search-inp ' >
  <option value="1">23/04/25</option>
  <option value="2">23/04/25</option>
  <option value="3">23/04/25</option>
</select>
<p>-</p>
<select className='search-inp ' >
  <option value="1">23/04/25</option>
  <option value="2">23/04/25</option>
</select>


</div>
  </div>



<div className='flex w-full justify-end gap-4 '>
    <input type="text" placeholder='digər parametrlər üzrə' />
    <button className='border-2 px-2 border-red-500'>Sil</button>
</div>

</div>


</div>

<div className='bottomdiv flex gap-6 justify-end mt-4 '>



    <button className='searchBtn border-2 border-purple-500 '> <div className='flex items-center gap-2.5'> <LuRefreshCcw className=' text-purple-500' />
Yenilə </div></button>
    <button className='searchBtn border-2 border-green-500'><div className='flex items-center gap-2'><FaSearch color='gray' />Axtar</div></button>

    <button onClick={toggleSearchModal} className='searchBtn border-2 border-red-500'><div className='flex items-center gap-2'><IoCloseCircle color='red' size={22}/> Ləğv et</div></button>

</div>


  </div>


  )
}

export default ModalSearch
