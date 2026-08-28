import multer from 'multer';
// Gunakan memoryStorage agar file langsung diproses sebagai Buffer ke Cloudinary tanpa simpan di disk
const storage = multer.memoryStorage();
export const uploadAvatarMiddleware = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Maksimal 5 MB
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        }
        else {
            cb(new Error('Hanya file gambar (JPG, PNG, WEBP, JPEG) yang diperbolehkan.'));
        }
    },
}).single('avatar');
//# sourceMappingURL=upload.middleware.js.map