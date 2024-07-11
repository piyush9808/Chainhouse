import React, { useEffect, useState } from "react";
import Layout from "../components/layout/index";
import { useContractRead } from "wagmi";
import { ContractAddress } from "../constants/ContractAddress";
import { abi } from "../constants/ABIcontract";
import Image from "next/image";
import { readContract } from "@wagmi/core";

const AllImages = () => {
  const [mounted, setMounted] = useState(false);
  const [landsData, setLandsData] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = useContractRead({
    address: ContractAddress,
    abi: abi,
    functionName: "getLandsCount",
  });

  console.log(data.data);

  useEffect(() => {
    if (data.data) {
      const arrayLength = Number(data.data);
      const dynamicArray = Array.from({ length: arrayLength }, (v, i) => i + 1);

      const fetchLandInfo = async () => {
        const landPromises = dynamicArray.map((index) =>
          readContract({
            address: ContractAddress,
            abi: abi,
            functionName: "lands",
            args: [index],
          })
        );

        const landsData = await Promise.all(landPromises);
        setLandsData(landsData);
      };

      fetchLandInfo();
    }
  }, [data.data]);

  console.log(landsData);

  const image = useContractRead({
    address: ContractAddress,
    abi: abi,
    functionName: "getImage",
    args: [1],
  });

  const Area = useContractRead({
    address: ContractAddress,
    abi: abi,
    functionName: "getArea",
    args: [1],
  });

  const City = useContractRead({
    address: ContractAddress,
    abi: abi,
    functionName: "getCity",
    args: [1],
  });

  const State = useContractRead({
    address: ContractAddress,
    abi: abi,
    functionName: "getState",
    args: [1],
  });

  const PID = useContractRead({
    address: ContractAddress,
    abi: abi,
    functionName: "getPID",
    args: [1],
  });

  const SurveyNumber = useContractRead({
    address: ContractAddress,
    abi: abi,
    functionName: "getSurveyNumber",
    args: [1],
  });

  const Price = useContractRead({
    address: ContractAddress,
    abi: abi,
    functionName: "getPrice",
    args: [1],
  });

  return (
    <Layout>
      <div className="border flex gap-8 rounded-xl ">
        {landsData.map((land, index) => (
          <div key={index}>
            
            <Image
              src={`https://copper-rear-chickadee-886.mypinata.cloud/ipfs/${land[7]}`}
              alt="alt"
              width={400}
              height={300}
              className="rounded-xl"
              // fallbackSrc="/images/placeholder.jpeg"
              onError={(e) => { e.target.onerror = null; e.target.src="/images/placeholder.jpeg"; }}
            />
            <div>
              {mounted && (
                <>
                  <h1>{land[1].toString()} Sq. m.</h1>
                  <h1>
                    {land[2]}, {land[3]}
                  </h1>
                  <h1>pid : {land[5].toString()}</h1>
                  <h1>Survey No. {land[6].toString()}</h1>
                  <h1>Price: $ {land[4].toString()} </h1>
                </>
              )}
              <h1>View Verified Land Document </h1>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AllImages;
