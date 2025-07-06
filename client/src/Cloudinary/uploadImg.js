export const uploadImg = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'portfolio'); 
    formData.append('api_key', '923145452832418'); 
    formData.append('folder', 'portfolio');

    try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dg7kgtaa5/image/upload', { 
            method: 'POST',
            body: formData,
        });

        if (!response .ok) {
            throw new Error('Failed to upload image');
        }

        const data = await response.json();
        if (!data) {
            throw new Error('Image upload failed, no URL returned');
        }

        // console.log("print the data which return from cloudinary", data);
        const imgData = {
            secureUrl: data.secure_url,
            publicId: data.public_id,
            deleteTokent: data.delete_token,
        }
        return imgData; 
        
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

// export const deleteImg = async (deleteToken) => {
//     try {
//         if (!deleteToken) {
//         throw new Error('No delete token provided');
//     }
//     // console.log("deletetoken ",deleteToken);
//         const response = await fetch('https://api.cloudinary.com/v1_1/dg7kgtaa5/delete_by_token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ token: deleteToken }),
//         });

//         if (!response) {
//             throw new Error('Failed to delete image');
//         }

//         const data = await response.json();
//         console.log("Image deleted successfully:", data);
//         return data;
//     } catch (error) {
//         console.error('Error deleting image:', error);
//         throw error;
//     }
// };
