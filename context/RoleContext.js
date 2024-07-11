import React, { createContext, useState, useEffect} from "react";
import { useAccount, useContractRead } from "wagmi";
import { ContractAddress } from "../constants/ContractAddress";
import { abi } from "../constants/ABIcontract";

const RoleContext = createContext();

const RoleProvider = ({ children }) => {
// const localvalue =   localStorage.getItem("role");

  // let localValue;
  const [role, setRole] = useState(null);
  const {address} = useAccount();

  const isSeller = useContractRead({
    address: ContractAddress,
    abi:abi,
    functionName:'isSeller',
    args: [address]
  })
  
  const isBuyer = useContractRead({
    address:ContractAddress,
    abi:abi,
    functionName:'isBuyer',
    args:[address]
  })
  useEffect(() => {
    if(isSeller.data){
      setRole('Seller');
    }

    if(isBuyer.data){
      setRole('Buyer')
    }

  }, [isBuyer.data, isSeller.data]);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export { RoleProvider, RoleContext};
