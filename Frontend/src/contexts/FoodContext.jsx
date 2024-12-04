import { createContext, useContext, useEffect, useRef, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebaseAuth";
import { toast } from "react-toastify";
import { FirebaseAuthContext } from "./FirebaseAuthContext";

const FoodContext=createContext();
const FooContextProvider=({children})=>{

const [foodFilteredCategory,setFoodFilteredCategory]=useState('All')




  
const [products, setProducts] = useState([]);
const [cartProducts, setCartProducts] = useState([]);
const {logedInUser} = useContext(FirebaseAuthContext);
const latesCollectionRef = useRef();
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const scrollToView = (sectionId) => {
  if (sectionId === "latestcollections") {
    latesCollectionRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

const fetchProducts = async () => {
  try {
    fetch(`${SERVER_URL}/products`).then(async (response) => {
      const responseData = await response.json();

      setProducts(responseData.products);
    });
  } catch (error) {
    console.warn("Error fetching products:", error);
  }
};

const fetchCartProducts = async () => {
  fetch(`${SERVER_URL}/cart?userAuthId=${logedInUser.uid}`)
    .then(async (response) => {
      if (response.ok) {
        const responseData = await response.json();

        setCartProducts(responseData.cart);
       
      }
    })
    .catch((err) => {
      console.warn("Error fetching cart products:", err);
    });
};

const addProductToUserCart = (product,  quantityToBuy) => {
  const userAuthId = logedInUser.uid;

  fetch(`${SERVER_URL}/addToCart`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      userAuthId: userAuthId,
      product: product,
      
      quantityToBuy: quantityToBuy,
    }),
  })
    .then(async(response) => {
      if(response.ok){
        const responseDAta=await response.json()
        
        toast.success("Successfully added to Cart !");
        fetchCartProducts();
      }
     
    })
    .catch((err) => toast.error("Unexpected error"));
};

const removeProductFromUserCart = (product_id) => {
  const userAuthId = logedInUser.uid;

  fetch(`${SERVER_URL}/removeProduct`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      userAuthId: userAuthId,
      product_id: product_id,
    }),
  })
    .then(() => {
      fetchCartProducts();
      toast.success("Product removed !", { position: "top-right" });
    })
    .catch(() => toast.error("Unexpected error"));
};

const updateCartProduct = (product_id, newQuantity) => {
  const userAuthId = logedInUser.uid;

  fetch(`${SERVER_URL}/updateCartProduct`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      userAuthId: userAuthId,
      product_id: product_id,
      newQuantity: newQuantity,
    }),
  })
    .then(async (response) => {
      if (response.ok) {
        const responseData = await response.json();

        if (responseData) {
          toast.success("Updated successfully", { position: "top-right" });
          fetchCartProducts();
        }
      }
    })
    .catch((err) => {
      toast.error("Unexpected error");
    });
};
const addProductRating = (product_id, comment, rating) => {
  const userEmail = logedInUser?.email;
  const userName = logedInUser.displayName
    ? logedInUser.displayName
    : "No name";
  console.log("ll", product_id, comment, rating, userEmail);
  fetch(`${SERVER_URL}/productRatingAndReview`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      product_id,
      comment,
      rating,
      userEmail,
      userName,
    }),
  })
    .then(async (response) => {
      if (response.ok) {
        const responseData = await response.json();
        if (responseData) {
          toast.success("Thanks for adding review !");
        }
      }
    })
    .catch((err) => {
      toast.error("Unexpected error");
    });
};


const handleFeedbackSubmission = (formData) => {

  fetch(`${SERVER_URL}/feedback`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      'name': formData?.name,
      'email': formData?.email,
      'phone': formData?.phone,
      'message': formData?.message
    })
  }).then((response) => {
    if (response.ok) {
      toast.success("Thanks for your valuable feedback")
    } else {
      toast.error("Unexpected error ")
    }
  }).catch((err) => toast.error("Unexpected error"))
}

useEffect(() => {
  fetchProducts();

  if (logedInUser) {
    fetchCartProducts();
  } else {
    setCartProducts(null);
  }
}, [logedInUser]);



    return <FoodContext.Provider value={{
        foodFilteredCategory,
        setFoodFilteredCategory,
        products,
        cartProducts,
        addProductToUserCart,

        logedInUser,
        removeProductFromUserCart,
        updateCartProduct,
        latesCollectionRef,
        scrollToView,
        addProductRating,
        handleFeedbackSubmission

    }}>
        {children}
    </FoodContext.Provider>

}

export {FooContextProvider,FoodContext}