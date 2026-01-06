import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("http://77.248.18.233:8080/**")],
  },
};

export default nextConfig;
