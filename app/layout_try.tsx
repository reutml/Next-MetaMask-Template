"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handlePaymentRequest = async () => {
    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        setPaymentStatus('MetaMask extension is not installed');
        return;
      }

      // Prepare payment data (you need to replace these values with actual data)
      const walletAddress = '0x8ff8C1bA528A69E947bFFec2d9BD7Fe732E3aceE'; // Replace with your wallet address
      const recipientAddress = '0xRecipientAddress'; // Replace with recipient's wallet address
      const value = '0xYourValueInWei'; // Replace with amount in Wei
      const data = ''; // Optional data field, replace as needed

      const paymentData = {
        from: walletAddress,
        to: recipientAddress,
        value,
        data,
      };

      // Request payment from MetaMask
      await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [paymentData],
      });

      setPaymentStatus('Payment requested successfully!');

    } catch (error) {
      console.error('Error requesting payment:', error);
      setPaymentStatus('Error requesting payment');
    }
  };

  return (
    <html lang="he">
      <body className="bg-[#F4F4F5] px-3 py-2 md:py-3 lg:px-0 lg:max-w-screen-xl mx-auto">
        <NavBar />
        <h1 dir="rtl">אודות</h1>
        <p dir="rtl">
          בעקבות תקופת הקורונה, חלה עלייה בדרישות להשכרת עמדות עבודה. אנשים רבים מוצאים בפתרון זה פתרון יעיל ונוח עבור צורכיהם. תוך שימוש בעמדת עבודה זמינה וללא עלויות קבועות של שכירות או אחזקת משרד. מעבר לכך, חללי עבודה הם מרחב מוצלח ליצירת קשרים עסקיים ושותפויות. המתחם נותן מענה לחברות וארגונים כמקום לפגישות עבודה והעסקת פרילנסרים. העמדות מציעות אבזור מתקדם לטובת המשתמש.
        </p>
        <p dir="rtl">
          מחירון:
          <p>חדר אישי - 10 אטריום</p>
          <p>חדר ישיבות - 50 אטריום</p>
          <p>חדר הרצאות - 100 אטריום</p>
          <p dir="rtl"></p>
        </p>
        <Button onClick={handlePaymentRequest}>להזמנה ולתשלום</Button>
        {paymentStatus && <p>{paymentStatus}</p>}
        {children}
      </body>
    </html>
  );
}
