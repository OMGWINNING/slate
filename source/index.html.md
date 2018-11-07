---
title: Alchemy API Documentation

toc_footers:
  - <a href='mailto:api@alchemyinsights.io?subject=I%20would%20like%20an%20API%20Key'>Get an Alchemy API Key</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction

Welcome to the Alchemy API: the enterprise grade Ethereum API. Instead of having to run your own nodes and dealing with all of the headaches that come with it, just plug into our API and get back to focusing on developing your application.

# Getting Started

Getting started with the Alchemy API takes less than 5 minutes. Just [get your key](mailto:api@alchemyinsights.io?subject=I%20would%20like%20an%20API%20Key), choose your networks, and configure your provider (which often is a single line change).


## Get an API Key

To start hitting the Alchemy API, you'll need an API key to authenticate your requests. If you are already in contact with the Alchemy team, they can create one for you. Otherwise, send a message to [api@alchemyinsights.io](mailto:api@alchemyinsights.io?subject=I%20would%20like%20an%20API%20Key) including the networks you'd like access to, and we can get one created for you! API keys come with pretty high default rate limits, but just contact us if you're concerned about [rate limit errors](#errors).

Once you have your API key, just choose a network and start making requests!

## Choose Your Networks

To make requests to the Alchemy API, you'll need to choose which Ethereum network you'd like to hit. Right now, we support the Ethereum Mainnet, and the three most popular testnets: Kovan, Rinkeby, and Ropsten.

### Development/Staging URLs
Network | URL |
-------------- | -------------- |
Mainnet | https://eth-mainnet.alchemyapi.io/jsonrpc/<span class="dev-api-key">**your_dev_api_key**</span>
Kovan | https://eth-kovan.alchemyapi.io/jsonrpc/<span class="dev-api-key">**your_dev_api_key**</span>
Rinkeby | https://eth-rinkeby.alchemyapi.io/jsonrpc/<span class="dev-api-key">**your_dev_api_key**</span>
Ropsten | https://eth-ropsten.alchemyapi.io/jsonrpc/<span class="dev-api-key">**your_dev_api_key**</span>

### Production URLs
Network | URL |
-------------- | -------------- |
Mainnet | https://eth-mainnet.alchemyapi.io/jsonrpc/<span class="prod-api-key">**your_prod_api_key**</span>
Kovan | https://eth-kovan.alchemyapi.io/jsonrpc/<span class="prod-api-key">**your_prod_api_key**</span>
Rinkeby | https://eth-rinkeby.alchemyapi.io/jsonrpc/<span class="prod-api-key">**your_prod_api_key**</span>
Ropsten | https://eth-ropsten.alchemyapi.io/jsonrpc/<span class="prod-api-key">**your_prod_api_key**</span>

## Start Making requests
There are three ways to start making requests to Alchemy directly.

### With POST Requests

```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/demo \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'

```

```json
// Result
{
  "id": 73,
  "jsonrpc": "2.0",
  "result": "0x09184e72a000" // 10000000000000
}
```

We recommend interacting with the `JSON-RPC` via `POST` requests. Simply pass in the `Content-Type: application/json` header and your query as the `POST` body with the following fields:

  - `jsonrpc`: The JSON-RPC version—currently, only `2.0` is supported.
  - `method`: The ETH API method. [See the API reference below](#alchemy-api-reference).
  - `params`: A list of parameters to pass to the method.
  - `id`: The ID of your request. Will be returned by the response so you can keep track of which request a response belongs to.

<!-- Padding to line up code with sections -->

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


### With GET Requests

```shell
# Request
curl https://eth-mainnet.alchemyapi.io/web/demo/eth_gasPrice
```

```json
// Result
{
  "id": 73,
  "jsonrpc": "2.0",
  "result": "0x09184e72a000" // 10000000000000
}
```

While we recommend using `POST` requests, we also offer basic support for `GET` requests. The response will still be in JSON-RPC format.


### In Your Browser
Some ETH JSON-RPC endpoints can be viewed in the browser directly. For example:

[https://eth-mainnet.alchemyapi.io/web/demo/eth_gasPrice](https://eth-mainnet.alchemyapi.io/web/demo/eth_gasPrice "ETH Gas Price")


## Configure Your Provider

### Web3

```javascript
// Javascript: web3js
web3 = new Web3(new Web3.providers.HttpProvider("https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key"));
```
```python 
# Python: web3py
web3 = Web3(HTTPProvider("https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key"))
```
```java 
// Java:web3j
Web3j web3 = Web3j.build(new HttpService("https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key"));
```

Using Alchemy with Web3 is as simple as a one-line configuration change, regardless of which flavor you use. Simply update the instantiation of the Web3 client to use the Alchemy URL of your choice.

See the official docs:

 - [Web3js](https://web3js.readthedocs.io/)
 - [Web3py](https://web3py.readthedocs.io)
 - [Web3j](https://docs.web3j.io)

<!-- Padding to line up code with sections -->

<br/>
<br/>
<br/>

### Ethers.js

```javascript
let url = "https://eth-mainnet.alchemyapi.io/json/your-api-key";
let customHttpProvider = new ethers.providers.JsonRpcProvider(url);
```

Configuring Ethers.js to use Alchemy should be a simple change as well. Simply replace your provider with a JSON RPC provider pointing to Alchemy.



# Alchemy API Reference

## eth_blockNumber

```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}'
```

```json
// Result
{
  "id":83,
  "jsonrpc": "2.0",
  "result": "0xc94" // 1207
}
```

Returns the number of most recent block.
### Parameters
none
### Returns
`QUANTITY` - integer of the current block number the client is on.


## eth_gasPrice
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'

```

```json
// Result
{
  "id":73,
  "jsonrpc": "2.0",
  "result": "0x09184e72a000" // 10000000000000
}
```
Returns the current price per gas in wei.
### Parameters
none
### Returns
`QUANTITY` - integer of the current gas price in wei.


## eth_getBalance
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0xc94770007dda54cF92009BFF0dE90c06F603a09f", "latest"],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x0234c8a3397aab58" // 158972490234375000
}
```
Returns the balance of the account of given address.
### Parameters

 - `DATA`, 20 Bytes - address to check for balance.
 - `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter

`params: ['0xc94770007dda54cF92009BFF0dE90c06F603a09f','latest']
`
### Returns
`QUANTITY` - integer of the current balance in wei.


## eth_getBlockByHash

```curl
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getBlockByHash","params":["0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331", true],"id":1}'
```

```json
// Result
{
"id":1,
"jsonrpc":"2.0",
"result": {
    "number": "0x1b4", // 436
    "hash": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "parentHash": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5",
    "nonce": "0xe04d296d2460cfb8472af2c5fd05b5a214109c25688d3704aed5484f9a7792f2",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "logsBloom": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "stateRoot": "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",
    "miner": "0x4e65fda2159562a496f9f3522f89122a3088497a",
    "difficulty": "0x027f07", // 163591
    "totalDifficulty":  "0x027f07", // 163591
    "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "size":  "0x027f07", // 163591
    "gasLimit": "0x9f759", // 653145
    "gasUsed": "0x9f759", // 653145
    "timestamp": "0x54e34e8e" // 1424182926
    "transactions": [{...},{ ... }]
    "uncles": ["0x1606e5...", "0xd5145a9..."]
  }
}
```

Returns information about a block by hash.
### Parameters
 - `DATA`, 32 Bytes - Hash of a block.
 - `Boolean` - If true it returns the full transaction objects, if false only the hashes of the transactions.
`params: ['0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331',true]`

### Returns
`Object` - A block object with the following fields, or null when no block was found:

 - `number`: QUANTITY - the block number. null when its pending block.
 - `hash`: DATA, 32 Bytes - hash of the block. null when its pending block.
 - `parentHash`: DATA, 32 Bytes - hash of the parent block.
 - `nonce`: DATA, 8 Bytes - hash of the generated proof-of-work. null when its pending block.
 - `sha3Uncles`: DATA, 32 Bytes - SHA3 of the uncles data in the block.
 - `logsBloom`: DATA, 256 Bytes - the bloom filter for the logs of the block. null when its pending block.
 - `transactionsRoot`: DATA, 32 Bytes - the root of the transaction trie of the block.
 - `stateRoot`: DATA, 32 Bytes - the root of the final state trie of the block.
 - `receiptsRoot`: DATA, 32 Bytes - the root of the receipts trie of the block.
 - `miner`: DATA, 20 Bytes - the address of the beneficiary to whom the mining rewards were given.
 - `difficulty`: QUANTITY - integer of the difficulty for this block.
 - `totalDifficulty`: QUANTITY - integer of the total difficulty of the chain until this block.
 - `extraData`: DATA - the "extra data" field of this block.
 - `size`: QUANTITY - integer the size of this block in bytes.
 - `gasLimit`: QUANTITY - the maximum gas allowed in this block.
 - `gasUsed`: QUANTITY - the total used gas by all transactions in this block.
 - `timestamp`: QUANTITY - the unix timestamp for when the block was collated.
 - `transactions`: Array - Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.
 - `uncles`: Array - Array of uncle hashes.


## eth_getBlockByNumber
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["0x1b4", true],"id":1}'
```

```json
// Result
{
"id":1,
"jsonrpc":"2.0",
"result": {
    "number": "0x1b4", // 436
    "hash": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "parentHash": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5",
    "nonce": "0xe04d296d2460cfb8472af2c5fd05b5a214109c25688d3704aed5484f9a7792f2",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "logsBloom": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "stateRoot": "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",
    "miner": "0x4e65fda2159562a496f9f3522f89122a3088497a",
    "difficulty": "0x027f07", // 163591
    "totalDifficulty":  "0x027f07", // 163591
    "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "size":  "0x027f07", // 163591
    "gasLimit": "0x9f759", // 653145
    "gasUsed": "0x9f759", // 653145
    "timestamp": "0x54e34e8e" // 1424182926
    "transactions": [{...},{ ... }]
    "uncles": ["0x1606e5...", "0xd5145a9..."]
  }
}
```

Returns information about a block by block number.
### Parameters

 - `QUANTITY|TAG` - integer of a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
 - `Boolean` - If true it returns the full transaction objects, if false only the hashes of the transactions.
`params: ['0x1b4', true]`

### Returns
See [`eth_getBlockByHash`](#eth_getblockbyhash)


## eth_getTransactionReceipt
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1
```

```json
// Result
{
"id":1,
"jsonrpc":"2.0",
"result": {
     "transactionHash": "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238",
     "transactionIndex":  "0x1", // 1
     "blockNumber": "0xb", // 11
     "blockHash": "0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b",
     "cumulativeGasUsed": "0x33bc", // 13244
     "gasUsed": "0x4dc", // 1244
     "contractAddress": "0xb60e8dd61c5d32be8058bb8eb970870f07233155", // or null, if none was created
     "logs": [{
         // logs as returned by getFilterLogs, etc.
     }, ...],
     "logsBloom": "0x00...0", // 256 byte bloom filter
     "status": "0x1"
  }
}
```

Returns the receipt of a transaction by transaction hash.
Note That the receipt is not available for pending transactions.
### Parameters
`DATA`, 32 Bytes - hash of a transaction
`params: [
   '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238'
]`

### Returns
`Object` - A transaction receipt object, or null when no receipt was found:

 - `transactionHash`: `DATA`, 32 Bytes - hash of the transaction.
 - `transactionIndex`: `QUANTITY` - integer of the transactions index position in the block.
 - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in.
 - `blockNumber`: `QUANTITY` - block number where this transaction was in.
 - `from`: `DATA`, 20 Bytes - address of the sender.
 - `to`: `DATA`, 20 Bytes - address of the receiver. null when its a contract creation transaction.
 - `cumulativeGasUsed`: `QUANTITY` - The total amount of gas used when this transaction was executed in the block.
 - `gasUsed`: `QUANTITY` - The amount of gas used by this specific transaction alone.
 - `contractAddress`: `DATA`, 20 Bytes - The contract address created, if the transaction was a contract creation, otherwise null.
 - `logs`: `Array` - Array of log objects, which this transaction generated.
 - `logsBloom`: `DATA`, 256 Bytes - Bloom filter for light clients to quickly retrieve related logs.

It also returns either:

 - `root` : `DATA` 32 bytes of post-transaction stateroot (pre Byzantium)
 - `status`: `QUANTITY` either 1 (success) or 0 (failure)


## eth_getBlockTransactionCountByHash

```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params":["0xc94770007dda54cF92009BFF0dE90c06F603a09f"],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xc" // 11
}
```

Returns the number of transactions in a block from a block matching the given block hash.
### Parameters
- `DATA`, 32 Bytes - hash of a block.
`params: [
   '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238'
]`

### Returns
 - `QUANTITY` - integer of the number of transactions in this block.


## eth_getBlockTransactionCountByNumber

```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByNumber","params":["0xe8"],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xa" // 10
}
```

Returns the number of transactions in a block matching the given block number.
### Parameters
 - `QUANTITY|TAG` - integer of a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
`params: [
   '0xe8', // 232
]`

### Returns
- `QUANTITY` - integer of the number of transactions in this block.



## eth_getCode
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getCode","params":["0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x2"],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
}
```

Returns code at a given address.
### Parameters
 - `DATA`, 20 Bytes - address.
 - `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter.
`params: [
   '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
   '0x2'  // 2
]`

### Returns
 - `DATA` - the code from the given address.


## eth_getLogs
```shell

# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"topics":["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]}],"id":74}'
```

Returns an array of all logs matching a given filter object.
### Parameters
`Object` - The filter options:

 - `fromBlock`: `QUANTITY|TAG` - (optional, default: "latest") Integer block number, or "latest" for the last mined block or "pending", "earliest" for not yet mined transactions.
 - `toBlock`: `QUANTITY|TAG` - (optional, default: "latest") Integer block number, or "latest"for the last mined block or "pending", "earliest" for not yet mined transactions.
 - `address`: `DATA|Array`, 20 Bytes - (optional) Contract address or a list of addresses from which logs should originate.
 - `topics`: `Array` of `DATA`, - (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with "or" options.
 - `blockhash`: `DATA`, 32 Bytes - (optional) With the addition of EIP-234 (Geth >= v1.8.13 or Parity >= v2.1.0), blockHash is a new filter option which restricts the logs returned to the single block with the 32-byte hash blockHash. Using blockHash is equivalent to fromBlock = toBlock = the block number with hash blockHash. If blockHash is present in the filter criteria, then neither fromBlock nor toBlock are allowed.
`params: [{
  "topics": ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]
}]`

### Returns
See [eth_getTransactionReceipt](#eth_gettransactionreceipt)


## eth_getStorageAt
```javascript
// Calculating the correct position depends on the storage to retrieve. Consider the following contract deployed at 0x295a70b2de5e3953354a6a8344e616ed314d7251 by address 0x391694e7e0b0cce554cb130d723a9d27458f9298.

contract Storage {
    uint pos0;
    mapping(address => uint) pos1;

    function Storage() {
        pos0 = 1234;
        pos1[msg.sender] = 5678;
    }
}
```

```shell
# Retrieving the value of pos0 is straight forward:
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x0", "latest"], "id": 1}' localhost:8545
```

```json
{"jsonrpc":"2.0","id":1,"result":"0x00000000000000000000000000000000000000000000000000000000000004d2"}
```

```shell
// Retrieving an element of the map is harder. The position of an element in the map is calculated with:
keccack(LeftPad32(key, 0), LeftPad32(map position, 0))
// This means to retrieve the storage on pos1["0x391694e7e0b0cce554cb130d723a9d27458f9298"] we need to calculate the position with:
keccak(decodeHex("000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9298" + "0000000000000000000000000000000000000000000000000000000000000001"))
//The geth console which comes with the web3 library can be used to make the calculation:
> var key = "000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9298" + "0000000000000000000000000000000000000000000000000000000000000001"
undefined
> web3.sha3(key, {"encoding": "hex"})
"0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9"
```

```shell
//Now to fetch the storage:
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9", "latest"], "id": 1}' localhost:8545
```

```json
{"jsonrpc":"2.0","id":1,"result":"0x000000000000000000000000000000000000000000000000000000000000162e"}
```

Returns the value from a storage position at a given address.
### Parameters
 - `DATA`, 20 Bytes - address of the storage.
 - `QUANTITY` - integer of the position in the storage.
 - `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter

### Returns
 - `DATA` - the value at this storage position.



## eth_getTransactionByBlockHashAndIndex

```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndIndex","params":["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", "0x0"],"id":1}'
```

Returns information about a transaction by block hash and transaction index position.
### Parameters
DATA, 32 Bytes - hash of a block.
QUANTITY - integer of the transaction index position.
params: [
   '0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331',
   '0x0' // 0
]
### Returns
See eth_getTransactionByHash

Result see eth_getTransactionByHash

## eth_getTransactionByBlockNumberAndIndex
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockNumberAndIndex","params":["0x29c", "0x0"],"id":1}'
```
Result see eth_getTransactionByHash

Returns information about a transaction by block number and transaction index position.
### Parameters
QUANTITY|TAG - a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
QUANTITY - the transaction index position.
params: [
   '0x29c', // 668
   '0x0' // 0
]

### Returns
See eth_getTransactionByHash


## eth_getUncleByBlockNumberAndIndex
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getUncleByBlockNumberAndIndex","params":["0x29c", "0x0"],"id":1}'
```

Returns information about a uncle of a block by number and uncle index position.
### Parameters

 - `QUANTITY|TAG` - a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
 - `QUANTITY` - the uncle's index position.
`params: [
   '0x29c', // 668
   '0x0' // 0
]`

### Returns
[See eth_getBlockByHash](#eth_getBlockByBash)
Note: An uncle doesn't contain individual transactions.

## eth_getUncleByBlockHashAndIndex
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getUncleByBlockHashAndIndex","params":["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", "0x0"],"id":1}'
```

Returns information about a uncle of a block by hash and uncle index position.
### Parameters

 - `QUANTITY|TAG` - a block number, or the string "earliest", "latest" or "pending", as in the default block parameter.
 - `QUANTITY` - the uncle's index position.
`params: [
   '0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b',
   '0x0' // 0
]`

### Returns
[See eth_getBlockByHash](#eth_getBlockByBash)
Note: An uncle doesn't contain individual transactions.



## eth_getUncleCountByBlockHash

```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockHash","params":["0xc94770007dda54cF92009BFF0dE90c06F603a09f"],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xc" // 1
}
```

Returns the number of uncles in a block from a block matching the given block hash.
### Parameters
- `DATA`, 32 Bytes - hash of a block.
`params: [
   '0xc94770007dda54cF92009BFF0dE90c06F603a09f'
]`

### Returns
`QUANTITY` - integer of the number of uncles in this block.


## eth_getUncleCountByBlockNumber

```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockNumber","params":["0xe8"],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x1" // 1
}
```

Returns the number of uncles in a block from a block matching the give block number.
### Parameters
`QUANTITY|TAG` - integer of a block number, or the string "latest", "earliest" or "pending", see the default block parameter.
`params: [
   '0xe8', // 232
]`
### Returns
 `QUANTITY` - integer of the number of uncles in this block.

## eth_protocolVersion

```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_protocolVersion","params":[],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "63"
}
```

Returns the current ethereum protocol version.
### Parameters
none
### Returns
 `String` - The current ethereum protocol version.


## eth_getTransactionByHash
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d'{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"],"id":1}'
```

```json
// Result
{
  "jsonrpc":"2.0",
  "id":1,
  "result":{
    "blockHash":"0x1d59ff54b1eb26b013ce3cb5fc9dab3705b415a67127a003c3e61eb445bb8df2",
    "blockNumber":"0x5daf3b", // 6139707
    "from":"0xa7d9ddbe1f17865597fbd27ec712455208b6b76d",
    "gas":"0xc350", // 50000
    "gasPrice":"0x4a817c800", // 20000000000
    "hash":"0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b",
    "input":"0x68656c6c6f21",
    "nonce":"0x15", // 21
    "to":"0xf02c1c8e6114b1dbe8937a39260b5b0a374432bb",
    "transactionIndex":"0x41", // 65
    "value":"0xf3dbb76162000", // 4290000000000000
    "v":"0x25", // 37
    "r":"0x1b5e176d927f8e9ab405058b2d2457392da3e20f328b16ddabcebc33eaac5fea",
    "s":"0x4ba69724e8f69de52f0125ad8b3c5c2cef33019bac3249e2c0a2192766d1721c"
  }
}
```
Returns the information about a transaction requested by transaction hash.
### Parameters
`DATA`, 32 Bytes - hash of a transaction
`params: [
   "0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"
]`
### Returns
`Object` - A transaction object, or null when no transaction was found:

 - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in. null when its pending.
 - `blockNumber`: `QUANTITY` - block number where this transaction was in. null when its pending.
 - `from`: `DATA`, 20 Bytes - address of the sender.
 - `gas`: `QUANTITY` - gas provided by the sender.
 - `gasPrice`: `QUANTITY` - gas price provided by the sender in Wei.
 - `hash`: `DATA`, 32 Bytes - hash of the transaction.
 - `input`: `DATA` - the data send along with the transaction.
 - `nonce`: `QUANTITY` - the number of transactions made by the sender prior to this one.
 - `to`: `DATA`, 20 Bytes - address of the receiver. null when its a contract creation transaction.
 - `transactionIndex`: `QUANTITY` - integer of the transactions index position in the block. null when its pending.
 - `value`: `QUANTITY` - value transferred in Wei.
 - `v`: `QUANTITY` - ECDSA recovery id
 - `r`: `DATA`, 32 Bytes - ECDSA signature r
 - `s`: `DATA`, 32 Bytes - ECDSA signature s


## eth_getTransactionCount
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0xc94770007dda54cF92009BFF0dE90c06F603a09f","latest"],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x1" // 1
}
```
Returns the number of transactions sent from an address.
### Parameters
 - `DATA`, 20 Bytes - address.
 - `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter
`params: [
   '0xc94770007dda54cF92009BFF0dE90c06F603a09f',
   'latest' // state at the latest block
]`

### Returns
`QUANTITY` - integer of the number of transactions send from this address.


## eth_call
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_call","params":[{see above}],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x"
}
```
Executes a new message call immediately without creating a transaction on the block chain.
### Parameters
 - `Object` - The transaction call object
  - `from`: `DATA`, 20 Bytes - (optional) The address the transaction is sent from.
  - `to`: `DATA`, 20 Bytes - The address the transaction is directed to.
  - `gas`: `QUANTITY` - (optional) Integer of the gas provided for the transaction execution. eth_call consumes zero gas, but this parameter may be needed by some executions.
  - `gasPrice`: `QUANTITY` - (optional) Integer of the gasPrice used for each paid gas
  - `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction
  - `data`: `DATA` - (optional) Hash of the method signature and encoded parameters. For details see Ethereum Contract ABI
 - `QUANTITY|TAG` - integer block number, or the string "latest", "earliest" or "pending", see the default block parameter

### Returns
`DATA` - the return value of executed contract.


## eth_estimateGas
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{see above}],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x5208" // 21000
}
```
Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.
### Parameters

See [`eth_call`](#eth_call) parameters, except that all properties are optional. If no gas limit is specified geth uses the block gas limit from the pending block as an upper bound. As a result the returned estimate might not be enough to executed the call/transaction when the amount of gas is higher than the pending block gas limit.

### Returns
QUANTITY - the amount of gas used.


## eth_sendRawTransaction
```shell
# Request
curl https://eth-mainnet.alchemyapi.io/jsonrpc/your-api-key \
-X POST \
-H "Content-Type: application/json" \
-d '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":[{see above}],"id":1}'
```

```json
// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```
Creates new message call transaction or a contract creation for signed transactions.
### Parameters
`DATA`, The signed transaction data.
`params: ["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"]`
### Returns
`DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet available.
Use eth_getTransactionReceipt to get the contract address, after the transaction was mined, when you created a contract.


