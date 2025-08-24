'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { SlSettings } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { FaImage } from "react-icons/fa";

const Table = () => {

const [data,setData]=useState<any[]>([])
const [loading,setLoading]=useState(true)
const[page,setPage]=useState(1)
const [hasMore,setHasMore]=useState(true)

//elanlarin API-den cekilmesi

const fetchDataFromAPI = async (pageNumber: number) => {
  try {
    setLoading(true);
        console.log(`Fetching page: ${pageNumber}`);

const res = await fetch(`/api/tableData?page=${pageNumber}&pagesize=200`);

    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Xəta:", error);
    return [];
  } finally {
    setLoading(false);
  }
};


console.log("Fetching page", page);
console.log("length data", data.length);


  //  2. Gələn datanı mövcud state-ə əlavə edən funksiya
  const appendData = (newData: any[]) => {
    if (newData.length === 0) {
      setHasMore(false); // Artıq data yoxdursa
    } else {
      setData(prev => [...prev, ...newData]);
      setPage(prev => prev + 1);
    }
  };

  //  3. Scroll zucun funksiya
  const handleScrollEvent = useCallback(() => {
const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
  if (bottom && !loading && hasMore) {
    loadMoreData();
  }
}, [loading, hasMore]);

  // 4. Data yükləyən 
  const loadMoreData = async () => {
    const result = await fetchDataFromAPI(page);
    appendData(result);
  };

  //  5. İlk yükləmə
  useEffect(() => {
    loadMoreData();
  }, []);

  // 6. Scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [page, loading, hasMore]);

  if (data.length === 0 && loading){
 return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-100 z-50">
  <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
</div>
  )
  }
    



  
  return (
    <div>
         <table className='table-auto overflow-x-auto border-collapse border min-w-[2000px] border-gray-400  '>
            <thead>
<tr  >
    <th className="border  border-gray-300 pe-4 "><SlSettings color='gray' />
    </th>

<th className="border  border-gray-300 pe-1 ">Kod</th>
<th className="border border-gray-300 pe-1 ">Elanin tarixi</th>
<th className="border border-gray-300 pe-1 "> Oxunma tarixi</th>
<th className="border border-gray-300 pe-1 ">Əmlakın növü</th>
<th className="border border-gray-300 pe-1 ">Şəkil</th>

<th className="border border-gray-300 pe-1 ">Əməliyyat</th>
<th className="border border-gray-300 pe-1 ">Şəhər,rayon,qəsəbə</th>
<th className="border border-gray-300 pe-1 ">Metro</th>
<th className="border border-gray-300 pe-1 ">Nişangah</th>
<th className="border border-gray-300 pe-1 ">Ünvan</th>
<th className="border border-gray-300 pe-1 ">Otaq sayı</th>
<th className="border border-gray-300 pe-1 ">Tikili</th>
<th className="border border-gray-300 pe-1 ">Mərtəbə</th>
<th className="border border-gray-300 pe-1 ">Sahə(sot)</th>
<th className="border border-gray-300 pe-1 ">Sahə(km)</th>
<th className="border border-gray-300 pe-1 ">Qiymət</th>
<th className="border border-gray-300 pe-1 ">Valyuta</th>
<th className="border border-gray-300 pe-1 ">Sənəd</th>
<th className="border border-gray-300 pe-1 ">Təmiri</th>
<th className="border border-gray-300 pe-1 ">Kod(sayt)</th>
<th className="border border-gray-300 pe-1 ">Ümumi məlumat</th>
<th className="border border-gray-300 pe-1 ">Mənbə</th>
<th className="border border-gray-300 pe-1 ">Məsul istifadəçi</th>
<th className="border border-gray-300 pe-1 ">Məlumatı verən İstifadəçi</th>
<th className="border border-gray-300 pe-1 ">Hüquq sahibinin tam adı</th>
<th className="border border-gray-300 pe-1 ">Əlaqəli şəxsin tam adı</th>
<th className="border border-gray-300 pe-1 ">Əlaqəli şəxsin əlaqə nömrəsi</th>
<th className="border border-gray-300 pe-1 ">Melumatı daxil edən istifadəçi</th>
<th className="border border-gray-300 pe-1 ">Baxış sayı</th>

</tr>
 <tr>
    <td rowSpan={2} className="border border-gray-300 text-cente"><FaSearch className=' text-gray-400'/></td>
    <td colSpan={28} className="border border-gray-300  text-center bg-gray-100">
      Axtarış etmək istədiyiniz açar sözü daxil edin
    </td>
  </tr>

  <tr>
    <td colSpan={29} className="border border-gray-300 ">
      <input
        type="text"
        className="w-full px-4 border border-gray-400 "
      />
    </td>
  </tr>
            </thead>
            <tbody>
 {data.map((item ,index)=>(

  <tr className='odd:bg-white even:bg-gray-100' key={`${item.idProperty}-${index}`}>
  <td className="border border-gray-300 text-center">
   {index+1}
  </td>
  <td className="border border-gray-300">{item.idProperty}</td>
  <td className="border border-gray-300">{item.insertDate}</td>
    <td className="border border-gray-300">{item.reminderDate}</td>

  <td className="border border-gray-300">{item.propertyType}</td>
    <td className="border border-gray-300">
   <FaImage color='purple'  size={24}/>
</td>

  <td className="border border-gray-300">{item.operation}</td>
  <td className="border border-gray-300">{item.region }</td>
  <td className="border border-gray-300">{item.metro }</td>
  <td className="border border-gray-300">{item.target }</td>
  <td className="border border-gray-300 whitespace-pre-wrap  relative  group cursor-pointer">
  <div className="limited-text">
    {item.address}
  </div>
  <div className="absolute  left-0 z-20  top-4 w-full p-2 bg-white border border-gray-400 rounded shadow-lg opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100">
    {item.address}
  </div>
</td>
  <td className="border border-gray-300">{item.roomCaption}</td>
  <td className="border border-gray-300">{item.buildingType }</td>
  <td className="border border-gray-300">{item.floorCaption}</td>
  <td className="border border-gray-300">{item.area }</td>
  <td className="border border-gray-300">{item.area02 }</td>
  <td className="border border-gray-300">{item.price }</td>
  <td className="border border-gray-300">{item.currency}</td>
  <td className="border border-gray-300">{item.document }</td>
  <td className="border border-gray-300">{item.repair }</td>
  <td className="border border-gray-300">{item.code}</td>
<td className="border border-gray-300 whitespace-pre-wrap  group cursor-pointer">
  <div className='relative'>   <div className="limited-text ">
    {item.data}
  </div>
  <div className="absolute  left-0 z-10  top-4 w-full p-2 bg-white border border-gray-400 rounded shadow-lg opacity-0 pointer-events-auto transition-opacity duration-200 group-hover:opacity-100">
    {item.data}
  </div></div>

</td>
  <td className="border border-gray-300">{item.source }</td>
  <td className="border border-gray-300">{item.fkIdResponsibleUser }</td>
  <td className="border border-gray-300">{item.fkIdProvidingUser }</td>
  <td className="border border-gray-300">{item.ownerFullName }</td>
  <td className="border border-gray-300">{item.cpFullName }</td>
  <td className="border border-gray-300">{item.ownerPhoneNumber}</td>
  <td className="border border-gray-300">{item.insertedUser }</td>
  <td className="border border-gray-300">{item.viewCount}</td>
</tr>

 ))}


            </tbody>
        </table>
      
    </div>
  )
}

export default Table
