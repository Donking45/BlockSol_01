const hardhat = require("hardhat")
const Web3 = require("web3");



async function main(){ 
    const Feedback = await hardhat.ethers.getContractFactory("Feedback"); // fetching bytecode and ABI
    const feedbackContract = await Feedback.deploy(); // creating an instance of the smart contract
    
    await feedbackContract.getDeployedCode(); // Deploying the smart contract
    
    console.log("Deployed contract address:", `${feedbackContract.target}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error("Error deploying contract:", error);
        process.exit(1);
    });
