const mongoose=require('mongoose')

const productSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
  
      
      smallDescription: {
        type: String,
        required: true,
      },
      thumbnail: { type: String, required: true },
     
      fullDescription: {
        type: String,
        required: true,
      },
      reviews: [
        {
          userEmail: {
            type: String,
          },
          userName: { type: String },
          rating: { type: Number },
          comment: { type: String },
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
       
      ],
      category: {
        type: String,
        required: true,
      },
     
     
    },
    {
      timestamps: true,
    }
  );
  //Product model
  const ProductModel = mongoose.model("products", productSchema);

module.exports=ProductModel