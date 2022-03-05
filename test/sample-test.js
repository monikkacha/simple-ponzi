const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Simple Ponzi", async function () {
    const SimplePonzi = await ethers.getContractFactory("SimplePonzi");
    const simplePonzi = await SimplePonzi.deploy();
    await simplePonzi.deployed();
  });
});
