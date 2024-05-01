// ./components/PaymentRequested.tsx

import React from 'react';

interface PaymentRequestedProps {
  paymentRequested: boolean;
}

const PaymentRequested: React.FC<PaymentRequestedProps> = ({
  paymentRequested,
}) => {
  if (paymentRequested) {
    return <p>Payment requested successfully!</p>;
  }
  
  return null;
};

export default PaymentRequested;
