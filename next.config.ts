import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Other lockfiles exist higher up
  // in ~/code, which otherwise makes Next.js infer the wrong root directory.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
