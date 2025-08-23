'use client'
import Table from "./Components/Table/page";
import Footer from "./Components/Footer/page";
import useModal from "./Hooks/useModal";
import Header from "./Components/Header/page";

export default function Home() {


// const {openSearchModal,isOpenSearchModal}=useModal()

  return (
    <div  >
      <div className="w-[2000px] z-50">       
          <Header/>
</div>
<div className="z-10"><Table/>
</div>

 <div className=" w-[2000px] fixed bottom-0">        <Footer/>
</div>
    </div>
  );
}
