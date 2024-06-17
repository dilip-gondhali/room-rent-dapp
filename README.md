## Getting Started with Create React App

### 1. Clone this project 

### 2. Install the dependency, you can run:

#### `npm install`

### 3.  Update hardhat.config.js:.
update network settings:
 sepolia: {
      url: " url: "https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY", \
      accounts: [`{YOUR_PRIVATE_KEY}`],
    }
    
### 4. Compile the contract:

#### `npx hardhat compile`

### 5. Deploy the contract:

#### `npx hardhat run scripts/deploy.js --network sepolia`

### 6. add contract address and ABI in code

### In 'src' , folder named 'context' and a file 'Web3Context.js':

### 7. Run the dAPP

### `npm start`

