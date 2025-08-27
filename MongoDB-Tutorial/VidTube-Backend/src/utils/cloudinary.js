import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config(); // ✅ make sure this is called

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath, options = {}) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      ...options,
    });

    console.log("✅ File uploaded to Cloudinary: " + response.url);

    // ✅ Delete local file after successful upload
    fs.unlinkSync(localFilePath);

    // ✅ Return full response (url, public_id, etc.)
    return response;
  } catch (error) {
    console.error("❌ Error on Cloudinary upload:", error.message);

    // ❗ Safely try deleting the file only if it exists
    try {
      fs.unlinkSync(localFilePath);
    } catch (e) {
      console.error("⚠️ Failed to delete local file:", e.message);
    }

    return null;
  }
};

const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("✅ Image deleted from Cloudinary:", result);
  } catch (error) {
    console.error("❌ Error deleting image from Cloudinary:", error.message);
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
