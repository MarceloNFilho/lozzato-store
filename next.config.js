/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "m4f2ui1c9t.ufs.sh",
      },
    ],
  }
};

module.exports = nextConfig;
