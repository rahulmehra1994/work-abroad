import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Needed for static export
  basePath: "/your-repo-name", // Replace with your GitHub repo name
  assetPrefix: "/your-repo-name/", // Ensures assets load from correct path
};

export default nextConfig;
