/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m4f2ui1c9t.ufs.sh",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
