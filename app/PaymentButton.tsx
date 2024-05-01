// ./app/PaymentButton.tsx

import React, { useEffect, useState } from 'react';
import { useClient } from 'next/client'; // Import the useClient hook
import { Button } from "@/components/ui/button";

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
  // Mark this component as a client entry
  useClient();

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
          value: value,
          data: data
        };

        // Send the payment request
        await window.ethereum.request({
          method: 'eth_requestPayment',
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
      {!paymentRequested ? (
        <Button onClick={handleButtonClick}>Request Payment</Button>
      ) : (
        <p>Payment requested successfully!</p>
      )}
    </>
  );
};

export default PaymentButton;
