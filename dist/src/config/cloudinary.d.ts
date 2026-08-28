import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
/**
 * Upload Avatar User ke folder p2h-app/user-avatar di Cloudinary
 */
export declare function uploadUserAvatar(fileBuffer: Buffer, userId: number | string): Promise<UploadApiResponse>;
/**
 * Hapus avatar lama dari Cloudinary
 */
export declare function deleteUserAvatar(publicIdOrUrl: string): Promise<any>;
export { cloudinary };
//# sourceMappingURL=cloudinary.d.ts.map