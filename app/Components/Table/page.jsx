import React from 'react'

const Table = () => {
  return (
    <div>
         <table className='table-auto border-collapse border border-gray-400 w-full'>
            <thead>
<tr  >
    <th className="border border-gray-300 pe-4 ">N</th>

<th className="border border-gray-300 pe-4 ">Kod</th>
<th className="border border-gray-300 pe-4 ">Elanin tarixi</th>
<th className="border border-gray-300 pe-4 "> Oxunma tarixi</th>
<th className="border border-gray-300 pe-4 ">Emlakin novu</th>
<th className="border border-gray-300 pe-4 ">Emeliyyat</th>
<th className="border border-gray-300 pe-4 ">Seher,rayon,qesebe</th>
<th className="border border-gray-300 pe-4 ">Metro</th>
<th className="border border-gray-300 pe-4 ">Nisangah</th>
<th className="border border-gray-300 pe-4 ">Unvan</th>
<th className="border border-gray-300 pe-4 ">Otaq sayi</th>
<th className="border border-gray-300 pe-4 ">Tikili</th>
<th className="border border-gray-300 pe-4 ">Mertebe</th>
<th className="border border-gray-300 pe-4 ">Sahe(sot)</th>
<th className="border border-gray-300 pe-4 ">Sahe(km)</th>
<th className="border border-gray-300 pe-4 ">Qiymet</th>
<th className="border border-gray-300 pe-4 ">Valyuta</th>
<th className="border border-gray-300 pe-4 ">Sened</th>
<th className="border border-gray-300 pe-4 ">Temiri</th>
<th className="border border-gray-300 pe-4 ">Kod(sayt)</th>
<th className="border border-gray-300 pe-4 ">Umumi melumat</th>
<th className="border border-gray-300 pe-4 ">Menbe</th>
<th className="border border-gray-300 pe-4 ">Mesul ist</th>

</tr>

            </thead>
            <tbody>
  <tr>
    <td rowSpan="2" className="border border-gray-300 text-cente">R</td>
    <td colSpan="22" className="border border-gray-300  text-center bg-gray-100">
      Axtarış etmək istədiyiniz açar sözü daxil edin
    </td>
  </tr>

  <tr>
    <td colSpan="22" className="border border-gray-300 ">
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
