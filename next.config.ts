import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: process.env.PRODUCTION_CONTAINER === "sure" ? "standalone" : undefined,
};
export default nextConfig;
