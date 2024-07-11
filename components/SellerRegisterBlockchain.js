import React from "react";
import { ContractAddress } from "../constants/ContractAddress";
import { abi } from "../constants/ABIcontract";
import { UsePrepareContractWriteConfig } from "wagmi";
import { usePrepareContractWrite } from "wagmi";

import { prepareWriteContract, writeContract } from '@wagmi/core'

const RegisterToBlockchain = async ( SellerData ) => {

console.log('SellerData', SellerData);
const { request } = await prepareWriteContract({
  address: ContractAddress,
  abi: abi,
  functionName: 'registerSeller',
  args: [SellerData.name, SellerData.age, SellerData.AadharCardNo, SellerData.PanNo, SellerData.OwanedLands, SellerData.AadharCardImage],
})
const { hash } = await writeContract(request)


console.log('hash', hash);
};

export default RegisterToBlockchain;
