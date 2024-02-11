import React, { useState } from 'react';


const Products = ({ addToCart }) => {
  
  //for managing the quantity
  const [quantities, setQuantities] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities({ ...quantities, [productId]: quantity });
  };

  //function to show the description of a particular product.
  const handleShowDescription = (productId) => {
    setSelectedProduct(productId);
  };

  //for closing the description model.
  const handleCloseDescription = () => {
    setSelectedProduct(null);
  };

  //created function for adding the product in a cart.
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: quantities[product.id] || 0 });
    //showing message as alert that the product has been added.
    alert(`Product "${product.name}" has been added to the cart!`);
  };

  const products = [
    //hardcoded data such as images and description and all.
    { id: 1, name: 'Apple Watch', price: 750, image: 'image1.jpeg', description: 'Apple Watch SE (2nd Gen) [GPS 40mm] Smartwatch with Starlight Aluminium Case with Starlight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Water-Resistant - M/L' },
    { id: 2, name: 'Bluetooth Headphone', price: 35, image: 'image2.jpeg', description: 'Bluetooth Headphones Over Ear,65H Playtime and 6 EQ Modes Wireless Headphones with Microphone,Immersive Bass,HiFi Stereo,Foldable Lightweight Headset with Built-in HD Mic for Cellphone/PC/Ect.' },
    { id: 3, name: 'Leather watch', price: 65, image: 'image3.jpeg', description: 'BENYAR Mens Watch Analog Quartz Movement Chronograph Waterproof Luminous Date Mens Wrist Watches Stylish Casual Watch Elegant Gift for Men Leather/Stainless Steel Bracelets' },
    { id: 4, name: 'Samsung Smart TV', price: 169, image: 'image4.jpeg', description: 'SAMSUNG 43-Inch Class Crystal UHD CU7000 Series PurColor, Object Tracking Sound Lite, Q-Symphony, 4K Upscaling, HDR, Gaming Hub, Smart TV - [UN43CU7000FXZC][Canada Version] (2023)' },
    { id: 5, name: 'Iphone 15/pro/pro max', price: 1599, image: 'image5.jpeg', description: 'The Apple iPhone 15 brings you Dynamic Island, a 48MP main camera with 2X Telephoto, and USB-C—all in a durable colour-infused glass and aluminum design. It features a 6.1" Super Retina XDR display which is up to 2x brighter in the sun compared to iPhone 14.' },
    { id: 6, name: 'Dell Laptop', price: 1099, image: 'image6.jpeg', description: 'Dell Latitude 7000 7640 16" Notebook - Full HD Plus - 1920 x 1200 - Intel Core i5 13th Gen i5-1345U Deca-core (10 Core) 1.20 GHz - 16 GB Total RAM - 16 GB On-board Memory - 256 GB SSD - Aluminum Titan Gray - Intel Chip - Windows 11 Pro - Intel Iris Xe Graphics - In-plane Switching (IPS) Technology - Front Camera/Webcam - IEEE 802.11ax Wireless LAN Standard - EPEAT Gold, TAA Compliance' },
  ];

  return (
    <div>
      {/*Title*/}
      <h2 style={{ textAlign: 'center' }}>Products</h2>
      <div className="products_container">
        {products.map((product) => (
          <div key={product.id} className="product_card">
            <img
              //ptoduct image
              src={`images/${product.image}`}
              alt={product.name}
            />
            <div className="product_details">
              {/*product name*/}
              <h3>{product.name}</h3>
              {/*product price*/}
              <p>${product.price}</p>
              <label className="quantity">
                Quantity:
                <input
                  type="number"
                  min="0"
                  value={quantities[product.id] || 0}
                  onChange={(e) =>
                    handleQuantityChange(product.id, parseInt(e.target.value, 10))
                  }
                />
              </label>
              {/*Buttons*/}
              <button className="addtocart_button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button className="showdescription_button" onClick={() => handleShowDescription(product.id)}>
                Show Description
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Description Modal */}
      {selectedProduct !== null && (
        <div className="description-modal">
          <div>
            <img
              src={`images/${products[selectedProduct - 1].image}`}
              alt={products[selectedProduct - 1].name}
            />
            <h3>{products[selectedProduct - 1].name} Description</h3>
            <p>{products[selectedProduct - 1].description}</p>
            <button onClick={handleCloseDescription}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
