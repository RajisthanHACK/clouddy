const hre = require("hardhat");

async function main() {
  const upload = await hre.ethers.getContractFactory("Upload");
  const contract = await upload.deploy();

  await contract.deployed();
  console.log("Address of Contract: ", contract.address);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
