import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ['pbs.twimg.com'],
  },
};

export default nextConfig;
