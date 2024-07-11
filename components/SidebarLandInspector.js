import React from 'react'
import { AiOutlineReconciliation } from 'react-icons/ai';
import { FaImages, FaRegUser } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import { RxDashboard } from 'react-icons/rx';
import { TbHomePlus } from 'react-icons/tb';
import { useRouter } from 'next/router';


const SidebarLandInspector = () => {
    const router = useRouter();
  return (
  
         <div className="border w-full p-4 mr-3 rounded-lg ">
      <div className="flex flex-col gap-4">
      <button
       onClick={() => router.push("/LandInspectorDashboard")}
       className="flex  items-center  gap-3">
        <RxDashboard />
        Dashboard
      </button>
      <button 
        onClick={() => router.push("/LandInspectorBuyerProfile")}
      className="flex  items-center  gap-3">
        <FaRegUser />
       Buyer Profile
      </button>

      <button className="flex items-center gap-3"
        onClick={() => {
          router.push("/LandInspectorSellerProfile");
        }}
      >
        <FaRegUser />
        Seller Profile
      </button>

      <button
        onClick={() => {
          router.push("/TransactionInfo");
        }}
      className="flex items-center gap-3">
        <AiOutlineReconciliation />
        Transaction Info
      </button>
      <button 
      onClick={() => router.push("/verifyLand")}
      className='flex items-center gap-3'>
        <FaImages />
        Verify Land
      </button>
      </div>
    </div>

  )
}

export default SidebarLandInspector