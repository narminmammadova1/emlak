'use client'
import Table from "./Components/Table/page";
import Footer from "./Components/Footer/page";
import useModal from "./Hooks/useModal";
import Header from "./Components/Header/page";

export default function Home() {



  return (
    <div  >
      <div className="w-full z-50 fixed ">       
          <Header/>
</div>
<div className="z-10 mt-3 "><Table/>
</div>

 <div className="w-full  fixed bottom-0">        <Footer/>
</div>
    </div>
  );
}
