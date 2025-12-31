import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

export default cloudinary.v2;
