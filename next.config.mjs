/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "suyan.com.np",
      },
      {
        protocol: "http",
        hostname: "192.168.2.249",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // ✅ ADD THIS
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ ADD THIS
      },
    ],
  },
};

export default nextConfig;
