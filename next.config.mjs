/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/industrial-lcds-product",
        destination: "/general-purpose-lcds",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
