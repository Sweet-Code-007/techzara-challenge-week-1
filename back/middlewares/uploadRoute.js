const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

// Image uplader
const imageUploader = (field, storagePath) => {
  // Multer disk storage
  const storage = multer.diskStorage({
    destination: storagePath,
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${uuidv4()}${path.extname(file.originalname)}`);
    },
  });

  // Limits
  const limits = { fieldSize: 5000000 }; // 5mb as a maximum size

  // Image filter
  const fileFilter = (req, file, cb) => {
    // Regex pattern for the allowed image extensions
    const allowedExt = /jpg|jpeg|png|gif|svg/i;
    // Checking the correctness of the file extension
    const extIsCorrect = allowedExt.test(path.extname(file.originalname));
    // Checking the correctness of the file's mimetype
    const mimeTypeIsCorrect = allowedExt.test(file.mimetype);

    if (extIsCorrect && mimeTypeIsCorrect) cb(null, true);
    // Image can be uploaded
    else cb(new Error("Only images are allowed")); // File extension is not allowed
  };

  return (req, res, next) => {
    // Multer uploader middleware
    const uploader = multer({ storage, limits, fileFilter }).single(field);

    // Uploading
    uploader(req, res, (err) => {
      if (err) {
        if (err instanceof multer.MulterError) return next(err);
        // Upload error
        else return res.status(500).send({ message: "Couldn't upload file" }); // Unknown error
      }
      if (!req.file) return res.status(500).send({ message: "you must submit an image" }); // File missing
      next();
    });
  };
};

module.exports = imageUploader;
