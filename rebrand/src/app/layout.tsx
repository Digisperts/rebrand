import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Digispert",
  description: "Digispert Company",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Digispert",
    description: "Empowering businesses with innovative digital solutions.",
    url: "https://www.digisperts.com",
    siteName: "Digispert",
    images: [
      {
        url: "https://www.digisperts.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Digispert Website Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digispert",
    description: "Empowering businesses with innovative digital solutions.",
    images: ["https://www.digisperts.com/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
