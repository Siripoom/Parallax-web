import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"], // Include both 'thai' and 'latin' for numbers and English characters
  weight: ["300", "400", "500", "600", "700"], // '300' (Light), '400' (Regular), '500' (Medium), '600' (SemiBold), '700' (Bold)
  display: "swap", // Ensures text is visible while the font loads
  variable: "--font-ibm-plex-thai", // Optional but highly recommended: create a CSS variable
});

export const metadata = {
  title: "AFTERDENT | สูตรที่หมอใช้ในห้องฟัน",
  description: "A modern solution for a brighter smile.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSansThai.variable} ${ibmPlexSansThai.className}`}
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
