# Web3 React Template

## Description

This project serves as a template for starting new Web3 projects quickly using ReactJS. It includes essential dependencies and configurations to kickstart your development process.

## Features

- Integration of ReactJS for building dynamic user interfaces.
- Seamless integration with Web3 (Hardhat, ethers) for interacting with blockchain networks.
- Testing setup using Mocha and Chai for writing unit tests.

## Prerequisites

Before getting started, ensure you have the following installed on your machine:

- Node.js and npm - [Download & Install Node.js](https://nodejs.org/)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-hardhat-template.git
```

2. Navigate to the project directory:

```bash
cd react-hardhat-template
```

3. Install dependencies:

```bash
npm install
```

## Usage

To start the development server, run:

```bash
npm start
```

This will launch the project in your default web browser. You can view the application at **\`http://localhost:3000\`**.

## Smart Contract Development

### Compiling Contracts

To compile the Solidity contracts, run:

```bash
npx hardhat compile
```

### Deploying Contracts

To deploy the contracts to a local blockchain, run:

```bash
npx hardhat node
```

In a separate terminal, run:

```bash
npx hardhat ignition deploy ./ignition/modules/Token.js --network localhost
```

### Running Tests

To run tests for the Solidity contracts, execute:

```bash
npx hardhat test
```

## Project Structure

Here's an overview of the project structure:

```plaintext
react-hardhat-template/
├── contracts/
│   └── Token.sol       # Solidity smart contract
├── ignition/modules/
│   └── Token.js        # Script for deploying contracts
├── src/
│   ├── components/     # React components
│   ├── abis/           # Smart contracts abi
│   ├── App.js          # Main React component
│   ├── config.js       # Smart contract addresses
│   └── index.js        # Entry point for React
├── test/
│   └── Token.js        # Tests for Solidity contract
├── package.json        # Project configuration and scripts
├── hardhat.config.js   # Hardhat configuration
├── tailwind.config.js
└── README.md           # Project documentation
```

### License

This project is unlicensed
