'use client'

import React, { useEffect, useState } from 'react'
import { SlSettings } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";

const Table = () => {

const [data,setData]=useState<any[]>([])
const [loading,setLoading]=useState(true)
const[page,setPage]=useState(1)
const [hasMore,setHasMore]=useState(true)

//elanlarin API-den cekilmesi

 const fetchDataFromAPI = async (pageNumber: number) => {
    try {
      setLoading(true);
      const res = await fetch(`https://e-baza.az/api/lproperty/filter?page=${pageNumber}&pagesize=200`);
      const json = await res.json();
      return json;
    } catch (error) {
      console.error("Xəta:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

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
  const handleScrollEvent = () => {
    const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (bottom && !loading && hasMore) {
      loadMoreData();
    }
  };

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

  if (data.length === 0 && loading) return <div>Yüklənir...</div>;


  
  return (
    <div>
         <table className='table-auto border-collapse border min-w-[2000px] border-gray-400  overflow-x-auto '>
            <thead>
<tr  >
    <th className="border  border-gray-300 pe-4 "><SlSettings color='gray' />
    </th>

<th className="border  border-gray-300 pe-1 ">Kod</th>
<th className="border border-gray-300 pe-1 ">Elanin tarixi</th>
<th className="border border-gray-300 pe-1 "> Oxunma tarixi</th>
<th className="border border-gray-300 pe-1 ">Əmlakın növü</th>
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

  <tr key={`${item.idProperty}-${index}`}>
  <td className="border border-gray-300 text-center">
   {index+1}
  </td>
  <td className="border border-gray-300">{item.idProperty}</td>
  <td className="border border-gray-300">{item.insertDate}</td>
    <td className="border border-gray-300">{item.reminderDate}</td>

  <td className="border border-gray-300">{item.propertyType}</td>
  <td className="border border-gray-300">{item.operation}</td>
  <td className="border border-gray-300">{item.region }</td>
  <td className="border border-gray-300">{item.metro }</td>
  <td className="border border-gray-300">{item.target }</td>
  <td className="border border-gray-300">{item.address}</td>
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
  <td className="border border-gray-300 whitespace-pre-wrap">{item.data}</td>
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
