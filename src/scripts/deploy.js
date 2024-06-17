async function main() {
    // Get the ContractFactory for "RoomRent"
    const RoomRent = await ethers.getContractFactory("RoomRent");
    // Deploy the contract
    const roomRent = await RoomRent.deploy();
    // Wait for the deployment to be completed
    await roomRent.waitForDeployment();
    // Get the contract address
    const address = await roomRent.getAddress();
    // Log the contract address
    console.log("RoomRent deployed to:", address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  