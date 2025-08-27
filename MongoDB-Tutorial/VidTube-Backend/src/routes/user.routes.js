import { Router } from "express";
import {
  registerUser,
  logoutUser,
  loginUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  getUserChannelProfile,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getWatchHistory,
} from "../controllers/user.controllers.js";
import { publishAVideo } from "../controllers/video.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/test-upload", upload.single("avatar"), (req, res) => {
  console.log("req.file:", req.file);
  res.json({ file: req.file });
});

// unsecure routes

// In user.routes.js, before registerUser
router.post(
  "/register",
  (req, res, next) => {
    upload.fields([
      { name: "avatar", maxCount: 1 },
      { name: "coverImage", maxCount: 1 },
    ])(req, res, function (err) {
      if (err) {
        console.error("Multer error:", err);
        return res.status(500).json({ error: err.message });
      }
      // Debug logging AFTER multer
      console.log("BODY KEYS:", req.body ? Object.keys(req.body) : []);
      console.log("FILES:", req.files);
      next();
    });
  },
  registerUser
);

router.route("/login").post(upload.none(), loginUser);
router.route("/refresh-token").post(refreshAccessToken);

// Secured routes for user

router.route("/logout").post(verifyJWT, logoutUser);
router
  .route("/change-password")
  .post(upload.none(), verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router
  .route("/get-user-channel-profile")
  .get(upload.none(), verifyJWT, getUserChannelProfile);
router
  .route("/update-account")
  .patch(upload.none(), verifyJWT, updateAccountDetails);
router
  .route("/update-avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router
  .route("/update-cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);
router.route("/history").get(verifyJWT, getWatchHistory);

// Secured routes for video

router.route("/upload-video").post(
  verifyJWT,
  (req, res, next) => {
    console.log("Before multer");
    upload.fields([
      { name: "video", maxCount: 1 },
      { name: "thumbnail", maxCount: 1 },
    ])(req, res, function (err) {
      if (err) {
        console.error("Multer error:", err);
        return res.status(500).json({ error: err.message });
      }
      console.log("After multer, req.files:", req.files);
      next();
    });
  },
  async (req, res, next) => {
    try {
      console.log("Before publishAVideo");
      await publishAVideo(req, res, next);
      console.log("After publishAVideo");
    } catch (e) {
      console.error("publishAVideo error:", e);
      next(e);
    }
  }
);

export default router;
