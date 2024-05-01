// ./app/PaymentButton.tsx

// Add the "use client" directive to mark the file as a client-side component
"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import PaymentRequested from "@/app/PaymentRequested";

interface PaymentProps {
  walletAddress: string;
  recipientAddress: string;
  value: string;
  data?: string;
}

const PaymentButton: React.FC<PaymentProps> = ({
  walletAddress,
  recipientAddress,
  value,
  data = '',
}) => {
  const [paymentRequested, setPaymentRequested] = useState(false);

  useEffect(() => {
    const handlePaymentRequest = async () => {
      try {
        // Check if MetaMask is installed
        if (!window.ethereum) {
          alert('MetaMask extension is not installed!');
          return;
        }

        // Request payment from MetaMask
        const paymentData = {
          from: walletAddress,
          to: recipientAddress,
          value,
          data,
        };

        // Send the payment request
        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [paymentData],
        });

        // Mark payment as requested
        setPaymentRequested(true);
        
      } catch (error) {
        console.error('Error requesting payment:', error);
        alert('Error requesting payment. Please check console for details.');
      }
    };

    if (paymentRequested) {
      handlePaymentRequest();
    }
  }, [walletAddress, recipientAddress, value, data, paymentRequested]);

  const handleButtonClick = () => {
    setPaymentRequested(true);
  };

  return (
    <>
      <Button onClick={handleButtonClick}>Request Payment</Button>
      <PaymentRequested paymentRequested={paymentRequested} />
    </>
  );
};

export default PaymentButton;
