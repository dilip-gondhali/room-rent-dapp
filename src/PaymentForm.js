import React, { useState } from "react";
import { ethers } from "ethers";  // Import ethers here
import { useWeb3 } from "./context/Web3Context";

const PaymentForm = () => {
  const { contract } = useWeb3();
  const [name, setName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [amount, setAmount] = useState("");
  

  const handlePayment = async () => {
    if (contract) {
      const tx = await contract.makePayment(name, roomNumber, {
        value: ethers.utils.parseEther(amount),
      });
      await tx.wait();
      alert("Payment Successful");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Room Number"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="outlined" onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default PaymentForm;
