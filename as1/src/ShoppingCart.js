import React from 'react';

//created function to display all the selected products in a cart
const ShoppingCart = ({ cart, removeFromCart, updateQuantity }) => {
  //calculate the price.
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  //created function to finalize the selected rpoducts.
  const finalizePurchase = () => {
    //as user clicks finalize then an alert will appear with the message
    alert('Thanks for finalizing the purchase!');
  };

  //created function for handelling remove.if user clicks remove then it will be removed.
  const handleRemoveItem = (itemId) => {
    //as user click remove, an alert will apear with the message.
    alert(`Item "${cart.find(item => item.id === itemId).name}" has been removed from the cart.`);
    removeFromCart(itemId);
  };

  return (
    <div className="shoppingcart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <h3>{item.name}</h3>
                <img src={`images/${item.image}`} alt={item.name} style={{ width: '100px', height: '100px' }} />
                <p>${item.price}</p>
                <label>
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                  />
                </label>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <p>Total: ${calculateTotal()}</p>
        <button onClick={finalizePurchase}>Finalize Purchase</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
