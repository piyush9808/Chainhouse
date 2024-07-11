import React, { useContext } from "react";
import { RxDashboard } from "react-icons/rx";
import { TbHomePlus } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineReconciliation } from "react-icons/ai";
import { FaImages } from "react-icons/fa6";
import { GoTools } from "react-icons/go";
import { useRouter } from "next/navigation";
import { RoleContext } from "../context/RoleContext";

const Sidebar = ({show, setter}) => {
  const {role} = useContext(RoleContext);
  console.log("role",role);
  const router = useRouter();


  if(role === "Buyer"){
    return (
      <div className="border w-full p-4 mr-3 rounded-lg ">
      <div className="flex flex-col gap-4">
      <button
       onClick={() => router.push("/Dashboard")}
       className="flex  items-center  gap-3">
        <RxDashboard />
        Dashboard
      </button>
      <button className="flex items-center gap-3"
        onClick={() => {
          router.push("/BuyerProfile");
        }}
      >
        <FaRegUser />
        Buyers Profile
      </button>

      <button
        onClick={() => {
          router.push("/OwnedLand");
        }}
      className="flex items-center gap-3">
        <AiOutlineReconciliation />
       owned Land
      </button>
      <button
        onClick={() => {
          router.push("/Payment");
        }}
      className="flex items-center gap-3">
        <FaImages />
        Make Payment
      </button>
      <div className="flex items-center gap-3">
        <GoTools />
        Help
      </div>
      </div>
    </div>
    )
  }

  return (
    <div className="border w-full p-4 mr-3 rounded-lg ">
      <div className="flex flex-col gap-4">
      <button
       onClick={() => router.push("/Dashboard")}
       className="flex  items-center  gap-3">
        <RxDashboard />
        Dashboard
      </button>
      <button 
        onClick={() => router.push("/AddLand")}
      className="flex  items-center  gap-3">
        <TbHomePlus />
        Add Land
      </button>

      <button className="flex items-center gap-3"
        onClick={() => {
          router.push("/SellerProfile");
        }}
      >
        <FaRegUser />
        Seller Profile
      </button>

      <button
        onClick={() => {
          router.push("/RequestLand");
        }}
      className="flex items-center gap-3">
        <AiOutlineReconciliation />
        Land request
      </button>
      <button
        onClick={() => {
          router.push("/LandGallery");
        }}
      className="flex items-center gap-3">
        <FaImages />
        Land Gallery
      </button>
      <div className="flex items-center gap-3">
        <GoTools />
        Help
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
