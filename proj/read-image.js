const Jimp = require("jimp").default;
const path = require("path");  // To extract the image file extension

const imagePath = "../images/tattos.jpg";

const functionReadToImage = async () => {
    try {
        const image = await Jimp.read(imagePath);
        const info = {
            width: image.getWidth(),
            height: image.getHeight(),
            format: path.extname(imagePath).slice(1),  // Get the extension without the dot
        };
        console.log(info);
    } catch (error) {
        console.log(`Error Reading Image: ${error}`);
    }
};

functionReadToImage();