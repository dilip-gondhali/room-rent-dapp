import React from "react"; 
import './App.css';
import { Web3ProviderComponent } from "./context/Web3Context";
import PaymentForm from "./PaymentForm";
import ReceiptList from "./ReceiptList";

const App = () => {
  return (
    <Web3ProviderComponent>
      <div className="app-container">
        <h1 className="title">Room Rent Payment dApp</h1>
        <PaymentForm />
        <ReceiptList />
      </div>
    </Web3ProviderComponent>
  );
};

export default App;
