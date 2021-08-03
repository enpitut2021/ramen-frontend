// plasmic send.tsxから addressとvalue　amaout をgetする。
// proxy contractを呼び出す。

import proxyAbi from "./proxyAbi";

// JPYCを自分のaddressからdsstination addressにamount、送金する。

export function sendJPYC(address contractAddress: address destinationAddress: string amount){    
    // proxy contractを呼び出す。
    
    // providerは送金者？ガス供給者？
    // providerよく分からん

    const provider = provider = new providers.JsonRpcProvider("http://localhost:8545");
    const proxyContract = new ethers.Contract(contractAddress, abi, provider);
    // contractをtransactする
    //　引数：target , nonce , argument, signature

    
    proxyContract.proxyWithValue()

}

// contractをdeployする関数
export function deploy()

/*

provider = new providers.JsonRpcProvider("http://localhost:8545");
signer = provider.getSigner();
const factory = new ContractFactory(abi, bytecode, signer);
const contract = await factory.deploy(title, deadline);

*/