import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("Multer destination called for", file.fieldname);
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    console.log("Multer filename called for", file.originalname);
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
});
