import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dvkc8sxpf',
    api_key: process.env.CLOUDINARY_API_KEY || '266765277168872',
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});
/**
 * Upload Avatar User ke folder p2h-app/user-avatar di Cloudinary
 */
export async function uploadUserAvatar(fileBuffer, userId) {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({
            folder: 'p2h-app/user-avatar',
            public_id: `user_${userId}_${Date.now()}`,
            resource_type: 'image',
            transformation: [
                { width: 400, height: 400, crop: 'fill', gravity: 'face' },
                { quality: 'auto', fetch_format: 'auto' },
            ],
        }, (error, result) => {
            if (error || !result) {
                return reject(error || new Error('Upload to Cloudinary failed'));
            }
            resolve(result);
        });
        uploadStream.end(fileBuffer);
    });
}
/**
 * Hapus avatar lama dari Cloudinary
 */
export async function deleteUserAvatar(publicIdOrUrl) {
    try {
        if (!publicIdOrUrl)
            return;
        let publicId = publicIdOrUrl;
        if (publicIdOrUrl.includes('res.cloudinary.com')) {
            const parts = publicIdOrUrl.split('/');
            const filename = parts.pop()?.split('.')[0];
            const folderIndex = parts.indexOf('p2h-app');
            if (folderIndex !== -1 && filename) {
                const folder = parts.slice(folderIndex).join('/');
                publicId = `${folder}/${filename}`;
            }
        }
        return await cloudinary.uploader.destroy(publicId);
    }
    catch (err) {
        console.error('Failed to delete old avatar from Cloudinary:', err);
    }
}
export { cloudinary };
//# sourceMappingURL=cloudinary.js.map