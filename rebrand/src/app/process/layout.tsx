
export const metadata = {
  title: "Digisperts — Our Process: Strategy, Build, Deliver",
  description: "Discover Digisperts Technology Company Limited's process: customer-focused discovery, agile development, testing and continuous improvement to deliver results.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Digisperts — Our Process: Strategy, Build, Deliver",
    description: "Discover Digisperts Technology Company Limited's process: customer-focused discovery, agile development, testing and continuous improvement to deliver results.",
    url: "https://www.digisperts.com",
    siteName: "Digisperts",
    images: [
      {
        url: "https://www.digisperts.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Digisperts Process",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digisperts — Our Process: Strategy, Build, Deliver",
    description: "Discover Digisperts Technology Company Limited's process: customer-focused discovery, agile development, testing and continuous improvement to deliver results.",
    images: ["https://www.digisperts.com/preview.png"],
  },
};

export default function ProcessLayout({ children }) {
  return (
    <div>
        {children}
    </div>
  );
}
