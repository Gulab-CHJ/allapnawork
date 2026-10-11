const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Upload Folder
const uploadPath = path.join(process.cwd(), "storage", "uploads");

// Create Folder if not exists
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Storage Configuration
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {
        cb(
            null,
            Date.now() + "-" + file.originalname
        );
    }

});

// Multer Configuration
const upload = multer({

    storage: storage,

    limits: {
        fileSize: 10 * 1024 * 1024 // 10 MB
    },

    fileFilter: (req, file, cb) => {

        const ext = path.extname(file.originalname).toLowerCase();

        if (
            ext === ".jpg" ||
            ext === ".jpeg" ||
            ext === ".png" ||
            ext === ".webp"
        ) {

            cb(null, true);

        } else {

            cb(new Error("Only Image Allowed"));

        }

    }

});

module.exports = upload;
