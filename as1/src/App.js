//App.js file.
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import Account from './Account';
import Comments from './Comments';
import Rating from './Rating';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [comments, setComments] = useState([]);

  //created function for adding the product in the cart.
  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      //if user already added the product then it will update the quantity.
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += product.quantity; 
      setCart(updatedCart);
    } else {
      // If user has not added it before then it will be added in the cart.
      setCart([...cart, { ...product }]);
    }
  };
  
  //created function to remove the product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  //created function for finalizing the purchase.
  const finalizePurchase = () => {
    setCart([]);
    console.log('Purchase finalized. Thank you for shopping!');
  };

  //created functiion for updating the user info.
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  //created function for creating a new user.
  const createUser = (newUser) => {
    setUser(newUser);
  };

  //created function to add comments.
  const addComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
  };

  //created function to update the quantity of a product.
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  //created function for rating.
  const handleRatingChange = (selectedRating) => {
    console.log('Selected Rating:', selectedRating);
  };

  return (
    <Router>
      <div className="app">
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Products addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} finalizePurchase={finalizePurchase} />}
          />
          <Route
            path="/account"
            element={<Account user={user} updateUser={updateUser} createUser={createUser} />}
          />
          <Route
            path="/comments"
            element={<Comments comments={comments} addComment={addComment} />}
          />
          <Route
            path="/rating"
            element={<Rating onRatingChange={handleRatingChange} />} // Pass your rating change handler
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
