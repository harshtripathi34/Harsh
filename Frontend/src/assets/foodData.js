
import burger from '../assets/images/burger.jpg'
export const foodData = [
  // Burger Category
  {
      name: "Classic Beef Burger",
      price: 8.99,
      image: burger,
      category: "Burger",
      smallDescription: "Juicy beef patty with fresh lettuce, tomatoes, and cheddar.",
      fullDescription: "Our classic beef burger includes a freshly grilled beef patty, layered with crisp lettuce, ripe tomatoes, and a slice of cheddar cheese, served on a toasted sesame bun.",
      rating: 4.5,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  {
      name: "BBQ Chicken Burger",
      price: 9.49,
      image: burger,
      category: "Burger",
      smallDescription: "Tender chicken patty with BBQ sauce and crispy onions.",
      fullDescription: "This BBQ chicken burger comes with a succulent chicken patty, topped with smoky BBQ sauce, crunchy onions, and cheddar cheese on a soft brioche bun.",
      rating: 4.7,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  // (Add additional 8 burger items in similar format)
  
  // Pizza Category
  {
      name: "Margherita Pizza",
      price: 12.99,
      image: burger,
      category: "Pizza",
      smallDescription: "Classic Margherita with fresh mozzarella and basil.",
      fullDescription: "This Margherita pizza is topped with fresh mozzarella cheese, basil leaves, and a drizzle of olive oil on a hand-stretched dough base.",
      rating: 4.8,
      
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]

  },
  {
      name: "Pepperoni Pizza",
      price: 13.99,
      image: burger,
      category: "Pizza",
      smallDescription: "Loaded with pepperoni and mozzarella on a tomato base.",
      fullDescription: "A customer favorite, this pizza is loaded with spicy pepperoni slices, mozzarella cheese, and a rich tomato sauce on a crispy crust.",
      rating: 4.6,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  // (Add additional 8 pizza items in similar format)
  
  // Pasta Category
  {
      name: "Spaghetti Carbonara",
      price: 10.99,
      image: burger,
      category: "Pasta",
      smallDescription: "Classic Italian pasta with creamy sauce and pancetta.",
      fullDescription: "A rich and creamy Italian pasta dish, made with spaghetti, eggs, Parmesan, and pancetta, finished with a sprinkle of black pepper.",
      rating: 4.7,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  {
      name: "Penne Arrabbiata",
      price: 9.49,
      image: burger,
      category: "Pasta",
      smallDescription: "Spicy tomato-based pasta with a hint of garlic.",
      fullDescription: "Penne pasta tossed in a spicy tomato sauce with garlic and crushed red pepper, finished with fresh basil leaves and Parmesan cheese.",
      rating: 4.5,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  // (Add additional 8 pasta items in similar format)
  
  // Noodles Category
  {
      name: "Chicken Chow Mein",
      price: 8.99,
      image: burger,
      category: "Noodles",
      smallDescription: "Stir-fried noodles with chicken, veggies, and soy sauce.",
      fullDescription: "Our chicken chow mein features stir-fried noodles with tender chicken, fresh vegetables, and a flavorful soy-based sauce.",
      rating: 4.6,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  {
      name: "Vegetable Lo Mein",
      price: 7.99,
      image: burger,
      category: "Noodles",
      smallDescription: "Delicious lo mein noodles with mixed vegetables.",
      fullDescription: "Vegetable lo mein with a variety of fresh vegetables, tossed in a savory sauce and served with stir-fried noodles.",
      rating: 4.4,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  // (Add additional 8 noodles items in similar format)
  
  // Sandwiches Category
  {
      name: "Club Sandwich",
      price: 6.99,
      image: burger,
      category: "Sandwiches",
      smallDescription: "Classic club sandwich with turkey, bacon, and lettuce.",
      fullDescription: "This club sandwich is stacked with turkey, crispy bacon, fresh lettuce, tomato, and mayo on toasted bread.",
      rating: 4.6,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  {
      name: "Grilled Cheese Sandwich",
      price: 5.49,
      image: burger,
      category: "Sandwiches",
      smallDescription: "Golden grilled cheese sandwich with melted cheddar.",
      fullDescription: "A comfort classic made with melted cheddar cheese between two slices of golden, toasted bread.",
      rating: 4.5,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  // (Add additional 8 sandwiches items in similar format)
  
  // Sushi Category
  {
      name: "California Roll",
      price: 11.99,
      image: burger,
      category: "Sushi",
      smallDescription: "Classic California roll with crab, avocado, and cucumber.",
      fullDescription: "A popular sushi roll filled with imitation crab, avocado, cucumber, and rice, wrapped in seaweed.",
      rating: 4.8,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  {
      name: "Spicy Tuna Roll",
      price: 12.49,
      image: burger,
      category: "Sushi",
      smallDescription: "Sushi roll with spicy tuna, cucumber, and a kick of heat.",
      fullDescription: "A flavorful roll featuring spicy tuna mixed with cucumber and topped with spicy mayo.",
      rating: 4.7,
      reviews:[
        {
            name: "John Doe",
            email: "johndoe@example.com",
            profileImage: "https://unsplash.com/photos/UBvtBr_FmrY/download?force=true&w=200",
            feedback: "The food was absolutely delicious, and the atmosphere was perfect for a family dinner. I highly recommend the Margherita Pizza!",
            rating: 5
          },
          {
            name: "Sarah Thompson",
            email: "saraht@example.com",
            profileImage: "https://unsplash.com/photos/9UVmlIb0wJU/download?force=true&w=200",
            feedback: "Great service and cozy ambiance. The Caesar Salad was fresh, and the dressing was perfect. Will definitely come back!",
            rating: 4
          },
          {
            name: "Michael Lee",
            email: "michaellee@example.com",
            profileImage: "https://unsplash.com/photos/0d_3h6X_2Z4/download?force=true&w=200",
            feedback: "The burger was juicy and flavorful, but it could have been a little hotter when served. Overall, a great experience!",
            rating: 4
          },
      ]
  },
  // (Add additional 8 sushi items in similar format)
];
