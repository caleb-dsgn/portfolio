import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The repository also contains Cloudflare-only worker files used by Vinext.
  // Vercel builds the App Router application and does not execute those files.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
