import Image from "../models/Image.model.js";
import cloudinary from "../config/cloudinary.config.js";
import fs from "fs";
import sharp from "sharp";
import path from "path";

export const uploadImageController = async (req, res) => {
  try {
    console.log(req.file);
    const __dirname = path.resolve(); //C:\Users\ASUS\Desktop\interview-task
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const compressedImagePath = path.join(
      __dirname,
      `/uploads/compressed-${Date.now()}-${req.file.originalname}`
    );

    console.log("compressedImagePath", compressedImagePath);
    // C:\Users\ASUS\Desktop\interview-task\uploads\compressed-Major_Project-DFD.drawio.png-1742300415711

    await sharp(req.file.buffer)
      .resize(800)
      .jpeg({ quality: 80 })
      .toFile(compressedImagePath);

    const cloudinaryResponse = await cloudinary.uploader.upload(
      compressedImagePath
    );

    const secureUrl = cloudinaryResponse.secure_url;
    const filename = `${req.file.originalname}-${Date.now()}`;

    const uploadedImage = await Image.create({
      filename,
      url: secureUrl,
    });

    await uploadedImage.save();

    fs.unlinkSync(compressedImagePath);

    return res
      .status(200)
      .json({ message: "Image uploaded successfully", URL: uploadedImage.url });

    /*
    Demo response = {
"message": "Image uploaded successfully",
"image": {
"fieldname": "image",
"originalname": "Major_Project-DFD.drawio.png",
"encoding": "7bit",
"mimetype": "image/png",
"buffer": {
"type": "Buffer",
"data": []
},
"size": 59069
}
}

Original response = {
"message": "Image uploaded successfully",
"image": {
"filename": "Major_Project-DFD.drawio.png-1742301668440",
"url": "https://res.cloudinary.com/dchtfdauw/image/upload/v1742301668/dff79swkhfbu6afcowxt.jpg",
"_id": "67d969e40c31b070dbbbb485",
"uploadDate": "2025-03-18T12:41:08.457Z",
"__v": 0
}
}
    */
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getImageController = async (req, res) => {
  try {
    const { id } = req.params;

    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.redirect(image.url);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteImageController = async (req, res) => {
  try {
    const { id } = req.params;

    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    const publicId = image.url.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(publicId);

    await image.deleteOne();
    return res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const uploadFromCameraController = async (req, res) => {};
