import mongoose, { isValidObjectId } from "mongoose";
import { Video } from "../models/video.models.js";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const publishAVideo = asyncHandler(async (req, res) => {
  try {
    const video_owner_id = await User.findById(req.user?._id);

    const { title, description } = req.body;

    // Use optional chaining to avoid undefined errors
    const videolocalpath = req.files?.video?.[0]?.path;
    const thumbnaillocalpath = req.files?.thumbnail?.[0]?.path;

    if (!videolocalpath || !thumbnaillocalpath) {
      throw new ApiError(400, "Please provide both video and thumbnail files");
    }

    console.log("Uploading video:", videolocalpath);
    const video = await uploadOnCloudinary(videolocalpath);
    console.log("Video uploaded:", video);

    console.log("Uploading thumbnail:", thumbnaillocalpath);
    const thumbnail = await cloudinary.uploader.upload(thumbnaillocalpath);
    console.log("Thumbnail uploaded:", thumbnail);

    if (!video) {
      throw new ApiError(
        400,
        "An error happened while uploading video on cloudinary"
      );
    }
    if (!thumbnail) {
      throw new ApiError(
        400,
        "An error happened while uploading thumbnail on cloudinary"
      );
    }

    console.log("Creating video in DB...");
    const user_video = await Video.create({
      title,
      description,
      videoFile: video.url,
      thumbnail: thumbnail.url,
      duration: 1,
      views: 10,
      isPublished: false,
      owner: video_owner_id._id,
    });
    console.log("Video created in DB:", user_video);

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          user_video,
          "Video and thumbnail uploaded successfully also added in DB"
        )
      );
  } catch (error) {
    console.error("Error in publishAVideo:", error);
    // Pass the error to global error handler
    throw new ApiError(
      error.statusCode || 500,
      error.message || "Error while publishing video"
    );
  }
});

export { publishAVideo };
