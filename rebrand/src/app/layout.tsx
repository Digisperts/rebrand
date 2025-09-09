import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Digispert Technology Company Limited",
  description:
    "Digisperts Technology Company Limited provides technology consulting, custom software, automation and digital marketing to drive rapid, measurable growth.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Digispert",
    description:
      "Digisperts Technology Company Limited provides technology consulting, custom software, automation and digital marketing to drive rapid, measurable growth.",
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
    description:
      "Digisperts Technology Company Limited provides technology consulting, custom software, automation and digital marketing to drive rapid, measurable growth.",
    images: ["https://www.digisperts.com/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WFPL7QF3');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFPL7QF3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
