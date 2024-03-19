# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
# Feedback Contract
This Solidity smart contract Feedback allows users to submit feedback along with their name. It stores the feedback entries and provides functionalities to retrieve feedback and total feedback count.

 ## Features
- Submit feedback with a name and message.
- Retrieve feedback by ID.
- Get total feedback count.

## Contract Functions

### submitFeedback
Allows users to submit feedback with a name and message. It emits a FeedbackAdded event upon successful submission.

### getFeedback
Retrieves feedback details by the specified feedback ID.

### getTotalFeedbacks
Returns the total count of feedback entries stored in the contract.

Events
FeedbackAdded
Emitted when feedback is successfully submitted.

-*name:* Name associated with the feedback.
-*userAddress:* Ethereum address of the user who submitted the feedback.
-*message:* Feedback message.
-*timestamp:* Timestamp of when the feedback was submitted.

Users can interact with the contract to submit feedback and retrieve feedback details.