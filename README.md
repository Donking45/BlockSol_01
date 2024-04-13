## Project Name
### FEEDBACK DApp

## Brief description of your project.
This repository contains a simple decentralized feedback system implemented as a smart contract on the Ethereum blockchain. Users can submit feedback and view existing feedback entries directly from their Ethereum wallet-enabled browser.

## USAGE
MetaMask or any Ethereum wallet-enabled browser extension installed.
An Ethereum wallet with access to the Ethereum mainnet or testnet.

## CONNECT WALLET
Click the "Connect Wallet" button to connect MetaMask or your Ethereum wallet-enabled browser extension. Once connected, your wallet address will be displayed, and you can proceed to submit feedback.

## SUBMIT FEEDBACK
Enter your feedback message in the provided text field.
Click the "Submit Feedback" button.
Confirm the transaction in MetaMask.
Your feedback will be submitted to the smart contract, and the transaction hash will be logged to the console.

## FETCH FEEDBACKS
Existing feedback entries stored on the smart contract can be fetched and displayed by clicking the "Fetch Feedbacks" button. The total number of feedbacks and each feedback entry will be logged to the console.

## SMART CONTRACT DETAILS
The smart contract ABI and address are provided in index.js for interaction with the Ethereum blockchain. The smart contract includes the following functions:

submitFeedback(string _message): Allows users to submit feedback messages to the smart contract.
getTotalFeedbacks(): Returns the total number of feedback entries stored on the smart contract.
getFeedback(uint256 _id): Returns the feedback entry at the specified index.