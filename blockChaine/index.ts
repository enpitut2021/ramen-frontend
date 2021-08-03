// plasmic send.tsxから addressとvalue　amaout をgetする。
// proxy contractを呼び出す。

import proxyAbi from "./proxyAbi";
import {
    BigNumber,
    Contract,
    ContractFactory,
    providers,
    Signer,
  } from "ethers";
import * as ethers from "ethers";
// JPYCを自分のaddressからdsstination addressにamount、送金する。

export function sendJPYC(contractAddress: string, destinationAddress: string , amount: number){    
    // proxy contractを呼び出す。
    
    // providerは送金者？ガス供給者？
    // providerよく分からん

    const provider = new providers.JsonRpcProvider("http://localhost:8545");
    let proxyContract = new ethers.Contract(contractAddress, proxyAbi, provider);
    // contractをtransactする
    //　引数：target , nonce , argument, signature

    
    proxyContract.proxyWithValue()

}

// contractをdeployする関数
export function deploy() {}

/*

provider = new providers.JsonRpcProvider("http://localhost:8545");
signer = provider.getSigner();
const factory = new ContractFactory(abi, bytecode, signer);
const contract = await factory.deploy(title, deadline);

*/