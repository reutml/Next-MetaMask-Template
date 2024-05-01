import React from 'react';

import { useClient } from 'next/client'; // Import the useClient hook

import PaymentButton from './PaymentButton'; // Adjust path as needed

const MyComponent: React.FC = () => {
  // Use the useClient hook to mark this component as a client component
  useClient();

  // Replace these values with actual addresses and value
  const walletAddress = '0xYourWalletAddress';
  const recipientAddress = '0xRecipientAddress';
  const value = '0xYourValueInWei';
  
  return (
    <div>
      <h1>My Component</h1>
      <PaymentButton
        walletAddress={walletAddress}
        recipientAddress={recipientAddress}
        value={value}
      />
    </div>
  );
};

export default MyComponent;
