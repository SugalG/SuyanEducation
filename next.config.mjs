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
