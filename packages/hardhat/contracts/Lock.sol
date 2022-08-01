// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

contract Lock {
    string public lockMessage = "message";

function getMessage() public view returns(string memory){
    return lockMessage;
}

}
