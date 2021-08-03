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
async function prepareRPC() {
  try {
    provider = new providers.JsonRpcProvider("http://localhost:8545");
    signer = provider.getSigner();
  } catch (e) {}
}
async function deployProxyMockContract(exponent: string, modulus: string) {
  const factory = new ContractFactory(mockAbi, mockBitecode, signer);
  const contract = await factory.deploy(exponent, modulus);
  return contract;
}

export function sendJPYC(destinationAddress: string, amount: number){    
    //proxy contractをデプロイ
    prepareRPC();
    const proxyMock = deployProxyMockContract(e, m);
    const proxyMockContract = new ethers.Contract("0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8", mockAbi, provider);
    
    
    // proxyMockContractを実行
    const toHash = new AbiCoder().encode(
        ["address", "bytes", "uint256"],
        [proxyMockAddress, arg, nonce]
      );
      const signature = sha256(toHash);
      await proxy.proxyMock(proxyMockAddress, nonce, arg, signature);


}
/*
function proxyMock2(
  address target, // address of the target contract
  uint256 nonce, // nonce
  bytes memory argument, // the argument(calldata) to send to the target contract
  bytes memory signature // the signature of `abi.encode(target, argument, nonce)`
) public returns (bytes memory) {
  // begin requirements check
  require(nonce == transactionCount, "Invalid nonce");
  bytes memory toHash = abi.encode(target, argument, nonce);
  require(sha256(toHash) == bytes32(signature), "Invalid signature");
  // begin state mutation
  (bool success, bytes memory ret) = target.call(argument);
  require(success, "Target contract execution failed");
  transactionCount++;
  return ret;
}
*/

