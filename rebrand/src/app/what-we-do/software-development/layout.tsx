
export const metadata = {
  title: "Digisperts — Software Development Services",
  description: "Digisperts Technology Company Limited builds custom web, mobile and enterprise software solutions designed to scale, secure and accelerate your business.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Digisperts — Software Development Services",
    description: "Digisperts Technology Company Limited builds custom web, mobile and enterprise software solutions designed to scale, secure and accelerate your business.",
    url: "https://www.digisperts.com/what-we-do/software-development",
    siteName: "Digisperts",
    images: [
      {
        url: "https://www.digisperts.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Digisperts Software Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digisperts — Software Development Services",
    description: "Digisperts Technology Company Limited builds custom web, mobile and enterprise software solutions designed to scale, secure and accelerate your business.",
    images: ["https://www.digisperts.com/preview.png"],
  },
};

export default function SoftwareDevelopmentLayout({ children }) {
  return (
    <div>
        {children}
    </div>
  );
}
