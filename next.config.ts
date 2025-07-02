import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    R2_ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
    R2_BUCKET_NAME: process.env.R2_BUCKET_NAME,
    R2_ENDPOINT: process.env.R2_ENDPOINT,
    R2_PUBLIC_DOMAIN: process.env.R2_PUBLIC_DOMAIN,
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

export default nextConfig;
