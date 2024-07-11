import React  from 'react'
import {abi} from '../constants/ABIcontract'
import {
usePrepareContractWrite,
useContractWrite,
useWaitForTransaction,
useAccount

} from 'wagmi'
import { ContractAddress } from '../constants/ContractAddress'
const contractConfig = {
    address: ContractAddress,
    abi,
} 

const Register = () => {

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    const {isConnected, address} = useAccount();

    const {config: contractWriteConfig} = usePrepareContractWrite({
        ...contractConfig,
        functionName: 'registerSeller',
        account: address,
        args: ['arun', 1, '21', '1','1','1'],
    });     
    const {
        data: mintData,
        write: mint,
        isLoading: isMintLoading,
        isSuccess: isMintStarted,
        error: mintError,

    }  = useContractWrite(contractWriteConfig);



    console.log('config', contractWriteConfig)
    console.log('mintData', mintData)

    const {
        data: txData,
        isSuccess: txSuccess,
        error: txError,
      } = useWaitForTransaction({
        hash: mintData?.hash,
      });
    
console.log(isConnected)

  return (


    <div>{
        mounted && isConnected && (
        <button
                style={{ marginTop: 24 }}
                disabled={!mint || isMintLoading || isMintStarted}
                className="button"
                data-mint-loading={isMintLoading}
                data-mint-started={isMintStarted}
                onClick={() => mint?.()}
              >
                {isMintLoading && 'Waiting for approval'}
                {isMintStarted && 'Minting...'}
                {!isMintLoading && !isMintStarted && 'Mint'}
              </button>
    )
    }</div>
  )
}

export default Register