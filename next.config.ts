import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or '*' in Next 15
        hostname: '**',    // matches all domains
      },
      {
        protocol: 'http',  // in case you need http also
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
