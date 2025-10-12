import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import ProductView from './components/ProductView';
import Cart from './components/Cart';

import juicerimg from "./assets/images/juicer.jpg";
import wmimg from "./assets/images/washingmachine.jpg";
import efanimg from "./assets/images/electricfan.jpg";
import dysonimg from "./assets/images/dyson.jpg";
import airfryerimg from "./assets/images/airfryer.jpg";
import refimg from "./assets/images/refrigerator.png";
import riceimg from "./assets/images/ricecooker.jpg";
import toasterimg from "./assets/images/toaster.jpg";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Appliances");


  const handleAddToCart = (newItem) => {
    const existingIndex = cartItems.findIndex(item => item.name === newItem.name);
    if (existingIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }
  };

  const handleDeleteFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += delta;
    if (updatedCart[index].quantity <= 0) {
      updatedCart.splice(index, 1);
    }
    setCartItems(updatedCart);
  };

  return (
    <div>
      <NavigationBar selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          <ProductView name="Asahy Powder Juicer" image={juicerimg} addToCart={handleAddToCart} />
          <ProductView name="Samsong Washing Machine" image={wmimg} addToCart={handleAddToCart} />
          <ProductView name="Hanabesh Electric Fan" image={efanimg} addToCart={handleAddToCart} />
          <ProductView name="Dyson Air Wrap" image={dysonimg} addToCart={handleAddToCart} />
          <ProductView name="Philips Airfryer" image={airfryerimg} addToCart={handleAddToCart} />
          <ProductView name="Brikk Retro Refrigerator" image={refimg} addToCart={handleAddToCart} />
          <ProductView name="Cook with Color Rice Cooker" image={riceimg} addToCart={handleAddToCart} />
          <ProductView name="Swan Pink Toaster" image={toasterimg} addToCart={handleAddToCart} />
        </div>
        <Cart
          items={cartItems}
          onDelete={handleDeleteFromCart}
          onQuantityChange={handleQuantityChange}
        />
      </div>
    </div>
  );
};

export default App;
