/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/software-development",
        destination: "/what-we-do/software-development",
        permanent: true, // 301 redirect: SEO-friendly
      },
      {
        source: "/digital-marketing",
        destination: "/what-we-do/digital-marketing",
        permanent: true,
      },
      {
        source: "/business-automations",
        destination: "/what-we-do/business-automation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
