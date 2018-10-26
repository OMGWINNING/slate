# Errors

In addition to the standard [Ethereum JSON-RPC error codes](https://github.com/ethereum/wiki/wiki/JSON-RPC-Error-Codes-Improvement-Proposal#json-rpc-standard-errors), the Alchemy API will return the following error codes:

Error Code | Meaning
---------- | -------
400 | Bad Request -- Your request is invalid. Double-check your JSON-RPC body
401 | Unauthorized --  You must authenticate your request with an API key. Contact us to request one!
429 | Too Many Requests -- You've hit your rate limit. Contact us if you require a higher rate limit.
500 | Internal Server Error -- We're unable to process your request right now. Get in touch with us if you see this.


For JSON-RPC specific errors, the Alchemy API returns a `200` with the JSON-RPC error in the JSON response:

```json
{
    "jsonrpc":"2.0",
    "error":{
        "code":-32602,
        "message":
        "Invalid params: invalid length 63, expected a 0x-prefixed, padded, hex-encoded hash with length 64."},
    "id":1
}
```

### Standrd JSON-RPC Errors
| Code    | Possible Return message | Description |
| --------|-------------------------|-------------|
|-32700 | Parse error       | Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text. |
|-32600 | Invalid Request   | The JSON sent is not a valid Request object. |
|-32601 | Method not found  | The method does not exist / is not available. |
|-32602 | Invalid params    | Invalid method parameter(s). |
|-32603 | Internal error    | Internal JSON-RPC error. |
|-32000 to -32099             | `Server error`. Reserved for implementation-defined server-errors. |
