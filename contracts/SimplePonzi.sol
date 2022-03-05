pragma solidity ^0.8.4;

contract SimplePonzi {
    address public currentInvestor;
    uint256 public currentInvestment;

    receive() external payable {
        uint256 minimumInvestment = (currentInvestment * 10) / 11;
        require(msg.value > minimumInvestment);

        address previousInvestor = currentInvestor;
        currentInvestor = msg.sender;
        currentInvestment = msg.value;
        payable(previousInvestor).send(msg.value);
    }
}
