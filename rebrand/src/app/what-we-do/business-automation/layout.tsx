
export const metadata = {
  title: "Digisperts - Business Automation & Workflow",
  description: "Digispert Company",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Digisperts — Business Automation & Workflow",
    description: "Digisperts Technology Company Limited creates business automation and workflow solutions that streamline processes, reduce costs and improve efficiency.",
    url: "https://www.digisperts.com",
    siteName: "Digisperts",
    images: [
      {
        url: "https://www.digisperts.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Digisperts Business Automation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digisperts — Business Automation & Workflow",
    description: "Digisperts Technology Company Limited creates business automation and workflow solutions that streamline processes, reduce costs and improve efficiency.",
    images: ["https://www.digisperts.com/preview.png"],
  },
};

export default function BusinessAutomationLayout({ children }) {
  return (
    <div>
        {children}
    </div>
  );
}
