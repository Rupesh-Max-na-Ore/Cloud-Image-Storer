const ImageKit = require('@imagekit/nodejs').default;

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadImage(buffer, fileName) {
    try {
        console.log("A. Entered uploadImage");

        const result = await imagekit.files.upload({
            file: buffer.toString("base64"),
            fileName: fileName,
        });

        console.log("B. Upload complete");

        return result;

    } catch (err) {
        console.error("Upload failed:", err);
        throw err;
    }
}

module.exports = uploadImage;