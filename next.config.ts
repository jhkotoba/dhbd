import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: '/dashboard',
  env: {
    GATEWAY_PREFIX: 'dashboard'
  }
};

export default nextConfig;
