// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract RoomRent {
    struct Payment {
        string name;
        uint256 roomNumber;
        uint256 amount;
        uint256 timestamp;
    }

    Payment[] public payments;
    mapping(address => Payment[]) public paymentRecords;

    event PaymentMade(address indexed payer, uint256 amount, uint256 roomNumber, string name, uint256 timestamp);

    function makePayment(string memory name, uint256 roomNumber) public payable {
        require(msg.value > 0, "Payment amount must be greater than zero");

        Payment memory newPayment = Payment({
            name: name,
            roomNumber: roomNumber,
            amount: msg.value,
            timestamp: block.timestamp
        });

        payments.push(newPayment);
        paymentRecords[msg.sender].push(newPayment);

        emit PaymentMade(msg.sender, msg.value, roomNumber, name, block.timestamp);
    }

    function getPayments() public view returns (Payment[] memory) {
        return payments;
    }

    function getPaymentsByAddress(address payer) public view returns (Payment[] memory) {
        return paymentRecords[payer];
    }
}
