import React from "react";
import Layout from "../../components/layout";
import { useContractRead } from "wagmi";
import { ContractAddress } from "../../constants/ContractAddress";
import { useAccount } from "wagmi";
import { abi } from "../../constants/ABIcontract";
import Link from "next/link";

const SellerProfile = () => {


  const {address} = useAccount();

    const data = useContractRead({
      address: ContractAddress,
      functionName: "getSellerDetails",
      abi:abi,
      args: [address],
    })

    // console.log('data', data);

    const isVerified = useContractRead({
      address: ContractAddress,
      functionName: "isVerified",
      abi:abi,
      args: [address],
    })

    // console.log('data', isVerified);


    if(!data.data){
      return (
        <Layout>
          You are not seller
          </Layout>
      )
    }

  return (
    <div>
      <Layout>
        <div className="text-2xl font-bold">Seller Profile</div>
        <div>
          <span className={`${isVerified.data ? "text-green-600" : "text-red-600"} font-bold`}> {isVerified.data ? "Verified" :"Not Yet Verified"}</span>
        </div>
        <div>
          {/* <h1>Seller Profile</h1> */}
          <form className="px-1">
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="name">Name</label>
            
            <input type="text"
            className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={data.data?.[0]}
            />
            </div>
            {/* <h2>Age: {(data.data?.[1])?.toString()}</h2> */}
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="Age">Age</label>
              <input type="number" name="Age" id="Age" 
              className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={data.data?.[1]?.toString()}
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="AadharCardNo">AadharCardNo</label>
              <input type="text" name="AadharCardNo" id="AadharCardNo" 
              className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={data.data?.[2]?.toString()}
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="PanNo">PanNo</label>
              <input type="text" name="PanNo" id="PanNo" 
              className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={data.data?.[3]?.toString()}
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="OwanedLands">OwanedLands</label>
              <input type="text" name="OwanedLands" id="OwanedLands" 
              className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={data.data?.[4]?.toString()}
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="AadharCardImage">AadharCardImage</label>
                {/* <input type="text" name="AadharCardImage" id="AadharCardImage" 
                className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                value={data.data?.[5]?.toString()}
                /> */}
                <Link href={`https://ipfs.io/ipfs/${data.data?.[5]}`} target="_blank" className="text-sky-600">
                  Click Here
                </Link>
            </div>
                
            <button  disabled={!isVerified?.data} className="mt-3 bg-blue-600 px-4 w-40 py-3 text-white rounded-xl disabled:bg-gray-300">Edit</button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default SellerProfile;
