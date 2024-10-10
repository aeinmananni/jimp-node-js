import { Jimp} from "jimp";
const imagePath = "./images/tat.jpeg";


const functionReadingImage = async() =>{
    try{
        const image = await Jimp.read(imagePath);

        const info = {
            width: image.bitmap.width,
            height: image.bitmap.height, 
            format:image.mime.split("/")[1],  
            MIME:image.mime
        }

        console.log(info);
    }catch(error){
          console.log(`Error Reading File ! : ${error}`)
    }
 
    
}

functionReadingImage()