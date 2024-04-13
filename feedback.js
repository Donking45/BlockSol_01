const contractAddress = "0xe93c5918bdD14112B60513b1776eCE75140B5D4C"; // Replace with your deployed smart contract address
const contractAbi = 
 [ [
            {
            "anonymous": false,
            "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "userAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
            ],
            "name": "FeedbackAdded",
            "type": "event"
            },
            {
            "inputs": [],
            "name": "feedbackCount",
            "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
            ],
            "stateMutability": "view",
            "type": "function"
            },
            {
            "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
            ],
            "name": "feedbacks",
            "outputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "userAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
            ],
            "stateMutability": "view",
            "type": "function"
            },
            {
            "inputs": [
            {
              "internalType": "uint256",
              "name": "_id",
              "type": "uint256"
            }
            ],
            "name": "getFeedback",
            "outputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "userAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
            ],
            "stateMutability": "view",
            "type": "function"
            },
            {
            "inputs": [],
            "name": "getTotalFeedbacks",
            "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
            ],
            "stateMutability": "view",
            "type": "function"
            },
            {
            "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_message",
              "type": "string"
            }
            ],
            "name": "submitFeedback",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
            }
            ],
        ];
 // Function to display feedback entries
 async function connectWallet() {
    if (window.ethereum) {
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected to wallet:", ethereum.selectedAddress);
            // Update UI to indicate wallet connection
            document.getElementById("walletStatus").innerHTML = "Connected: " + ethereum.selectedAddress;
            // Show feedback form
            document.getElementById("feedbackForm").style.display = "block";
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    } else {
        console.error("No Ethereum provider detected");
    }
}

// Function to submit feedback to the smart contract
async function submitFeedback() {
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
        alert("Please enter your feedback");
        return;
    }
    try {
        const contract = new ethers.Contract(contractAddress, contractABI, ethereum);
        const tx = await contract.submitFeedback(message);
        console.log("Feedback submitted. Transaction hash:", tx.hash);
        // Clear feedback form
        document.getElementById("message").value = "";
    } catch (error) {
        console.error("Error submitting feedback:", error);
    }
}

// Function to fetch feedback entries from the smart contract
async function fetchFeedbacks() {
    try {
        const contract = new ethers.Contract(contractAddress, contractABI, ethereum);
        const totalFeedbacks = await contract.getTotalFeedbacks();
        console.log("Total feedbacks:", totalFeedbacks);
        // Clear previous feedback entries
        document.getElementById("feedbackList").innerHTML = "";
        // Fetch each feedback entry and display it
        for (let i = 0; i < totalFeedbacks; i++) {
            const feedback = await contract.getFeedback(i);
            const feedbackItem = document.createElement("li");
            feedbackItem.textContent = `${feedback[0]}: ${feedback[1]}`;
            document.getElementById("feedbackList").appendChild(feedbackItem);
        }
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
    }
}

// Connect wallet button click event handler
document.getElementById("connectWalletBtn").addEventListener("click", connectWallet);

// Submit feedback button click event handler
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    submitFeedback();
});

// Fetch feedbacks when the page loads
window.onload = function() {
    fetchFeedbacks();
};