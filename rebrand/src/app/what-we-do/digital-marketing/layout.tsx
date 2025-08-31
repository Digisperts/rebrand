
export const metadata = {
  title: "Digisperts — Digital Marketing & Growth",
  description: "Digisperts Technology Company Limited provides integrated digital marketing—SEO, social, content and paid ads—to boost visibility",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Digisperts — Digital Marketing & Growth",
    description: "Digisperts Technology Company Limited provides integrated digital marketing—SEO, social, content and paid ads—to boost visibility",
    url: "https://www.digisperts.com/what-we-do/digital-marketing",
    siteName: "Digisperts",
    images: [
      {
        url: "https://www.digisperts.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Digisperts Digital Marketing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digisperts — Digital Marketing & Growth",
    description: "Digisperts Technology Company Limited provides integrated digital marketing—SEO, social, content and paid ads—to boost visibility",
    images: ["https://www.digisperts.com/preview.png"],
  },
};

export default function DigitalMarketingLayout({ children }) {
  return (
    <div>
        {children}
    </div>
  );
}
