// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";

contract Feedback {
    struct FeedbackEntry {
        string name;
        address userAddress;
        string message;
        uint256 timestamp;
    }
    
    mapping(uint256 => FeedbackEntry) public feedbacks;
    uint256 public feedbackCount;

    event FeedbackAdded(string name, address indexed userAddress, string message, uint256 timestamp);

    function submitFeedback(string memory _name, string memory _message) public {
        require(bytes(_name).length > 0 && bytes(_message).length > 0, "Name and message cannot be empty");

        feedbackCount++;
        feedbacks[feedbackCount] = FeedbackEntry(_name, msg.sender, _message, block.timestamp);
        emit FeedbackAdded(_name, msg.sender, _message, block.timestamp);
    }

    function getFeedback(uint256 _id) public view returns (string memory name, address userAddress, string memory message, uint256 timestamp) {
        require(_id > 0 && _id <= feedbackCount, "Invalid feedback ID");
        FeedbackEntry storage entry = feedbacks[_id];
        return (entry.name, entry.userAddress, entry.message, entry.timestamp);
    }

    function getTotalFeedbacks() public view returns (uint256) {
        return feedbackCount;
    }
}
