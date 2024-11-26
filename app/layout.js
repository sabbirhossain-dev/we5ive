import "./globals.css";

import Footer from '@/app/components/footer/page'

import Navbar from '@/app/components/navbar/page.js'


export const metadata = {
  title: "We5ive",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
