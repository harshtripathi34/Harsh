const fs = require("fs");
const cloudinary = require("../config/cloudinary");
const ProductModel = require("../models/productModel");
const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/userModel");

exports.uploadProduct = async (req, res) => {
  console.log("req body:", req.body);
  const { name, price, smallDescription, fullDescription, category } = req.body;

  //upload image to cloudinary

  const files = req.files;
  console.log("file::::", req.files);

  if (files) {
    try {
      const thumbnailFile = req.files["thumbnail"][0];

      ///geting cloudinary url for thumbnail image
      const thumbnailImageResult = await cloudinary.uploader.upload(
        thumbnailFile.path,
        {
          folder: "foods",
        },
        (error, result) => {
          fs.unlinkSync(thumbnailFile.path);
          if (error) {
            return res.status(500).json({ "cloudinaryErro:": error });
          }
        }
      );
      const thumbnailCloudinaryUrl = thumbnailImageResult.secure_url;

      ///geting cloudinary url for extraimages

      ////adding data to databse

      if (thumbnailCloudinaryUrl) {
        const result = await ProductModel.create({
          name: name,
          price: price,
          smallDescription: smallDescription,
          fullDescription: fullDescription,

          category: category,

          thumbnail: thumbnailCloudinaryUrl,
        })
          .then((result) => {
            return res.json("Successfully product listed");
          })
          .catch((error) => {
            return res.json("mongoDB error:", error);
          });
      }
    } catch (error) {
      return res.status(500).json({ Error: "Error uploading to cloudinary" });
    }
  } else {
    return res.json({ Error: "File not found" });
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await ProductModel.find({});

  return res.json({ products: products });
};

exports.addProductToCart = async (req, res) => {
  const { userAuthId, product, quantityToBuy } = req.body;
  console.log("adding to cart:", userAuthId, product, quantityToBuy);
  const product_id = uuidv4();

  // console.log("users:",await userModel.find({}))

  try {
    const result = await userModel.findOneAndUpdate(
      { userAuthId },
      {
        $push: {
          cart: {
            product_id,
            product,

            quantityToBuy,
          },
        },
      }
    );
    if (result) {
      console.log("result:", result);
      return res.json("product added");
    } else {
      return res.json("Error adding product to cart");
    }
  } catch (err) {
    return res.json("Server error");
  }
};

exports.getAllCartProducts = async (req, res) => {
  try {
    const userAuthId = req.query.userAuthId;

    const userData = await userModel.findOne({ userAuthId });
    if (userData) {
      return res.status(200).json({ cart: userData.cart });
    } else {
      return res.status(400).json({ error: "User Cart not foutn" });
    }
  } catch (err) {
    return res.status(500).json({ err: "Server error" });
  }
};

exports.removeProductFromCart = async (req, res) => {
  try {
    const { userAuthId, product_id } = req.body;

    const result = await userModel.findOneAndUpdate(
      { userAuthId },
      { $pull: { cart: { product_id: product_id } } }
    );
    if (result) {
      return res.send("Product removed from cart");
    } else {
      return res.status(404).json("User or product not found");
    }
  } catch (err) {
    return res.status(500).json("Server error");
  }
};

exports.updateCartProduct = async (req, res) => {
  try {
    const { product_id, userAuthId, newQuantity } = req.body;
    console.log(
      "update:",
      "product_id:",
      product_id,
      "quantity :",
      newQuantity,
      "userId:",
      userAuthId
    );
    const updatedProduct = await userModel.findOneAndUpdate(
      { userAuthId, "cart.product_id": product_id },
      { $set: { "cart.$.quantityToBuy": newQuantity } },
      { new: true }
    );
    console.log("update product :", updatedProduct);
    if (updatedProduct) {
      return res.status(200).json("Successfully updated");
    } else {
      return res.status(400).json("Error updating cart product");
    }
  } catch (err) {
    return res.status(500).json("Server error");
  }
};

exports.delteAProduct = async (req, res) => {
  try {
    const _id = req.query.product_id;
    const deletedProduct = await ProductModel.findOneAndDelete({ _id });
    if (deletedProduct) {
      return res.status(200).json({ success: "Successfully deleted" });
    } else {
      return res.status(400).json({ Error: "Error deleting  product" });
    }
  } catch (error) {
    return res.status(500).json({ ServerError: "Server error" });
  }
};

exports.setProductRatingAndReview = async (req, res) => {
  try {
    const { product_id, comment, rating, userEmail, userName } = req.body;
    console.log("ll", product_id, comment, rating, userEmail, userName);
    const updatedProduct = await ProductModel.findOneAndUpdate(
      { _id: product_id },
      {
        $push: {
          reviews: {
            userEmail,
            userName,
            rating,
            comment,
          },
        },
      },
      { new: true }
    );

    if (updatedProduct) {
      return res
        .status(200)
        .json({ success: "Reviews and rating added successfully" });
    } else {
      return res.status(400).json({ error: "Error adding rating" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};
