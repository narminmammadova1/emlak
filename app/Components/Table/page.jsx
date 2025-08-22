import React from 'react'
import { SlSettings } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";

const Table = () => {
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
<th className="border border-gray-300 pe-1 ">Emlakin novu</th>
<th className="border border-gray-300 pe-1 ">Emeliyyat</th>
<th className="border border-gray-300 pe-1 ">Seher,rayon,qesebe</th>
<th className="border border-gray-300 pe-1 ">Metro</th>
<th className="border border-gray-300 pe-1 ">Nisangah</th>
<th className="border border-gray-300 pe-1 ">Unvan</th>
<th className="border border-gray-300 pe-1 ">Otaq sayi</th>
<th className="border border-gray-300 pe-1 ">Tikili</th>
<th className="border border-gray-300 pe-1 ">Mertebe</th>
<th className="border border-gray-300 pe-1 ">Sahe(sot)</th>
<th className="border border-gray-300 pe-1 ">Sahe(km)</th>
<th className="border border-gray-300 pe-1 ">Qiymet</th>
<th className="border border-gray-300 pe-1 ">Valyuta</th>
<th className="border border-gray-300 pe-1 ">Sened</th>
<th className="border border-gray-300 pe-1 ">Temiri</th>
<th className="border border-gray-300 pe-1 ">Kod(sayt)</th>
<th className="border border-gray-300 pe-1 ">Umumi melumat</th>
<th className="border border-gray-300 pe-1 ">Menbe</th>
<th className="border border-gray-300 pe-1 ">Mesul istifadeci</th>
<th className="border border-gray-300 pe-1 ">Melumati veren Istifadeci</th>
<th className="border border-gray-300 pe-1 ">Huquq sahibinin tam adi</th>
<th className="border border-gray-300 pe-1 ">Elaqeli sexsin tam adi</th>
<th className="border border-gray-300 pe-1 ">Elaqeli sexsin elaqe nomresi</th>
<th className="border border-gray-300 pe-1 ">Melumati daxil eden istifadeci</th>
<th className="border border-gray-300 pe-1 ">Baxis sayi</th>

</tr>

            </thead>
            <tbody>
  <tr>
    <td rowSpan="2" className="border border-gray-300 text-cente"><FaSearch className=' text-gray-400'/></td>
    <td colSpan="28" className="border border-gray-300  text-center bg-gray-100">
      Axtarış etmək istədiyiniz açar sözü daxil edin
    </td>
  </tr>

  <tr>
    <td colSpan="29" className="border border-gray-300 ">
      <input
        type="text"
        className="w-full px-4 border border-gray-400 "
      />
    </td>
  </tr>


            </tbody>
        </table>
      
    </div>
  )
}

export default Table
