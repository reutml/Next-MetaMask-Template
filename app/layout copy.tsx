import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";

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
  return (
    <html lang="he">
      <body className="bg-[#F4F4F5] px-3 py-2 md:py-3 lg:px-0 lg:max-w-screen-xl mx-auto">
        <NavBar />
        <h1 dir="rtl">אודות</h1>
        <p dir="rtl" >
        בעקבות תקופת הקורונה, חלה עלייה בדרישות להשכרת עמדות עבודה. אנשים רבים מוצאים בפתרון זה פתרון יעיל ונוח עבור צורכיהם. תוך שימוש בעמדת עבודה זמינה וללא עלויות קבועות של שכירות או אחזקת משרד. מעבר לכך, חללי עבודה הם מרחב מוצלח ליצירת קשרים עסקיים ושותפויות. המתחם נותן מענה לחברות וארגונים כמקום לפגישות עבודה והעסקת פרילנסרים. העמדות מציעות אבזור מתקדם לטובת המשתמש.
        </p>
        <p dir="rtl">
        מחירון:
        <p>חדר אישי - 10 אטריום</p>
        <p></p>חדר ישיבות - 50 אטריום
        <p></p>חדר הרצאות - 100 אטריום
        <p></p> 
        <p dir="rtl"></p><Button>להזמנה</Button>
        </p>
       

        {children}
        
      </body>
    </html>
  );
}