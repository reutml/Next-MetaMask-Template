// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransferContract {
    address payable public beneficiary;
    string public name;
    string public symbol;
    uint256 public decimals;
    uint256 public totalSupply;
    mapping(address => uint256) public balances;

    // Constructor to set the beneficiary address and initialize token-related variables
    constructor(
        address payable _beneficiary,
        string memory _name,
        string memory _symbol,
        uint256 _decimals,
        uint256 _totalSupply
    ) {
        beneficiary = _beneficiary;
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _totalSupply;
        balances[msg.sender] = _totalSupply;
    }

    // Function to accept a payment and transfer 10% of it to the beneficiary
    function transferTenPercentToBeneficiary() public payable {
        require(msg.value > 0, "The transaction value should be more than 0");

        // Calculate 10% of the transaction value
        uint256 tenPercent = (msg.value * 10) / 100;

        // Transfer 10% of the transaction value to the beneficiary
        beneficiary.transfer(tenPercent);

        // The rest of the funds go to the contract itself or can be handled differently
        // For example, transferring the remaining 90% back to the sender or keeping it within the contract
    }

    // Function to withdraw the contract's balance (for demonstration)
    // In a real scenario, proper access control should be added
    function withdraw() public {
        payable(msg.sender).transfer(address(this).balance);
    }
}
