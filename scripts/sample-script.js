
const hre = require("hardhat");

async function main() {

  const SimplePonzi = await hre.ethers.getContractFactory("SimplePonzi");
  const simplePonzi = await SimplePonzi.deploy();

  await simplePonzi.deployed();

  console.log("SimplePonzi deployed to:", simplePonzi.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
