import Web3 from 'web3'

// need to figure out why Firefox doesn't like websockets :(

let web3  = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/4525cb9262b24bbcaf6ac079efd887bf"))
// if (window.navigator.userAgent.indexOf('Firefox') === -1) {
//   web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/4525cb9262b24bbcaf6ac079efd887bf"))
// } else {
//   web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/4525cb9262b24bbcaf6ac079efd887bf"))
// }
window.web3 = web3
// let web3 = new Web3("https://parity1.makerfoundation.com:18545")
// let web3 = new Web3("wss://mainnet.infura.io/ws")
// if (window.ethereum) {
//   eth = new Eth(window.ethereum)
//   console.log('modern ethereum browser')
// }
// else if (window.web3) {
//   eth = new Eth(window.web3.currentProvider)
//   console.log('legacy ethereum browser')
// }
// else {
//   console.log('Non-Ethereum browser detected.')
//   eth = new Eth("wss://mainnet.infura.io/ws")
// }
export default web3

// export const utils = Utils

