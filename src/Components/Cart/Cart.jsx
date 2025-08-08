import React, { useEffect, useState } from "react";
import '../Fleet/Fleet.css'
const Cart = () => {
  const [bookedProducts, setBookedProducts] = useState([]);

  useEffect(() => {
    loadBookedProducts();

  }, []);
   const loadBookedProducts = () => {
    const keys = JSON.parse(localStorage.getItem("bookedProducts")) || [];
    const products = keys
      .map((key) => {
        const item = localStorage.getItem(`product_${key}`);
        return item ? { key, ...JSON.parse(item) } : null; //not Key store 
      })
      .filter(Boolean); // Null values remove 
    setBookedProducts(products);
  };

    const handleUnbook = (key) => {
    // BookedProducts array  key remove 
    const existing = JSON.parse(localStorage.getItem("bookedProducts")) || [];
    const updatedKeys = existing.filter((k) => k !== key);
    localStorage.setItem("bookedProducts", JSON.stringify(updatedKeys));

    // Specific product remove 
    localStorage.removeItem(`product_${key}`);

    // React state update 
    setBookedProducts((prev) => prev.filter((p) => p.key !== key));
  };

  return (
    <div className="deals-main">
      <div className="container-card">
        <h1>Your Booked Cars</h1>
        {bookedProducts.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <div className="card-main">
            {bookedProducts.map((product, index) => (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-info">
                  <p className="text-title">{product.title}</p>
                  <p className="text-body">{product.description}</p>
                </div>
                <div className="card-footer">
                  <span className="text-title">{product.price}</span>
                  <div className="card-button">
                    <button onClick={() => handleUnbook(product.key)}>
                      Unbook
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
