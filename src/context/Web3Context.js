import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import RoomRent from "../contracts/RoomRent.sol/RoomRent.json"; // Adjust the path as necessary




const Web3Context = createContext();

export const useWeb3 = () => useContext(Web3Context);

export const Web3ProviderComponent = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);

  const loadProvider = async () => {
    const web3Modal = new Web3Modal();
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setProvider(provider);
    setSigner(signer);
    setAddress(address);

    const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your deployed contract address
    const contract = new ethers.Contract(contractAddress, RoomRent.abi, signer);
    setContract(contract);
  };

  useEffect(() => {
    loadProvider();
  }, []);

  return (
    <Web3Context.Provider value={{ provider, signer, address, contract }}>
      {children}
    </Web3Context.Provider>
  );
};
