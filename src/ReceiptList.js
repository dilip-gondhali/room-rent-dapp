import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useWeb3 } from "./context/Web3Context";

const ReceiptList = () => {
  const { contract, address } = useWeb3();
  const [receipts, setReceipts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadReceipts = async () => {
      try {
        if (contract) {
          const payments = await contract.getPaymentsByAddress(address);
          console.log("Raw payments:", payments);
          // Convert BigNumber objects to strings/numbers
          const formattedPayments = payments.map(payment => ({
            name: payment.name,
            roomNumber: payment.roomNumber.toString(), // Ensure roomNumber is a string
            amount: ethers.utils.formatEther(payment.amount),
            timestamp: new Date(payment.timestamp.toNumber() * 1000).toLocaleString(),
            
          }));
          console.log("Formatted payments:", formattedPayments);
          setReceipts(formattedPayments);
        }
      } catch (error) {
        console.error("Error loading receipts:", error);
        setError(error);
      }
    };
    loadReceipts();
  }, [contract, address]);

  return (
    <div>
      <h2>Receipts</h2>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      <ul>
        {receipts.map((receipt, index) => (
          <li key={index}>
            <strong>Name:</strong> {receipt.name} | <strong>Room:</strong> {receipt.roomNumber} | <strong>Amount:</strong> {receipt.amount} ETH | <strong>Timestamp:</strong> {receipt.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReceiptList;
