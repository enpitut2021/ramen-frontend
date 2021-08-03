// plasmic send.tsxから addressとvalue　amaout をgetする。
/*
const ethers = require("ethers");
const mockAbi = require("./mockAbi");
const mockBitecode = require("./mockBitecode");

const {BigNumber,
    Contract,
    ContractFactory,
    providers,
    Signer} = ethers;
*/
import * as ethers from "ethers";
import mockAbi from "./mockAbi";
import mockBitecode from "./mockBitecode";
import {
    BigNumber,
    Contract,
    ContractFactory,
    providers,
    Signer,
} from "ethers";

let provider: providers.JsonRpcProvider | undefined;
let signer: Signer | undefined;

const e = "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010001";
const m = "0xc2e48c45c07363e246be44407c8af5317cbccd3aa8be5d26129224525ac9fd73bc65296102d48744600952f0493c397657c966e2564ff9ef5175357eec9628036096326107a90bd538f67390aaecbcd85672bdc66f088b3f1fa0657009c146dbec38111c50757358e3016803cf5ece665927b377afdf058432a624b372d2e39cf534ab9ed449da12ba239fe0dd96f65c72ccea6b6bfd9733c41e90edee1f842078ac5cde7c95c6242a322516ef22927f35abb8afe8327633d7ded0959384d205853b84726fabed29182f0213b6a74f118651d2c4c415b8253d3ac2d339c8775361b6201849fe99626f591f558c5c916a79182c856bb1599ad12be5d33748e799";

const JPYC_address = "0xbD9c419003A36F187DAf1273FCe184e1341362C0";

async function prepareRPC() {
  try {
    provider = new providers.JsonRpcProvider("http://localhost:8545");
    signer = provider.getSigner();
  } catch (e) {}
}
async function deployProxyContract(exponet: string, modulus: string) {
    const factory = new ContractFactory(mockAbi, mockBitecode, signer);
    const contract = await factory.deploy([]);
    return contract.address;
}
export function getContractObject(txid: string) {
    return new Contract(txid, mockAbi, provider);
}

// JPYCを自分のaddressからdsstination addressにamount、送金する。
export function sendJPYC(destinationAddress: string, amount: number){    
    //providerとsignerの設定
    prepareRPC();
    //proxy contractをデプロイ
    const proxyAddress = deployProxyContract(e, m);
    // proxy　contractのアドレス
    const x = "0x91537cF7B41c3eEAa14d1a2098a2106fA33558C7";//x=proxyAddress
    // proxy contractを呼び出す。
    const proxyContract = new ethers.Contract(x, mockAbi, provider);
    
    let ABI = ["function transfer(address to, uint amount)"];
    
    let iface = new ethers.utils.Interface(ABI);

    const target = JPYC_address;
    const nonce = 0;
    const arg = iface.encodeFunctionData("transfer", [ destinationAddress, ethers.utils.parseEther("1.0") ]);
    const signature = "0x00";

    proxyContract.proxyMock2(target, nonce, arg, signature);
    
    /*
    encodeFunctionData(functionFragment: FunctionFragment | string, values?: ReadonlyArray<any>): string {
        if (typeof(functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }

        return hexlify(concat([
            this.getSighash(functionFragment),
            this._encodeParams(functionFragment.inputs, values || [ ])
        ]));
    }
    */

    /*
    function proxyMock(
        address target, // address of the target contract
        uint256 nonce, // nonce
        bytes memory argument, // the argument(calldata) to send to the target contract
        bytes memory signature // the signature of `abi.encode(target, argument, nonce)
    )
    */ 
}