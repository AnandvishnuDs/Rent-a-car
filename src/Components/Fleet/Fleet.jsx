import React, { useState, useEffect } from "react";
import "./Fleet.css";

// Card Component
const ProductCard = ({ product, isBooked, onBook }) => {
  const { title, description, price, image } = product;

  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-info">
        <p className="text-title">{title}</p>
        <p className="text-body">{description}</p>
      </div>
      <div className="card-footer">
        <span className="text-title">{price}</span>
        <div className="card-button">
          <button onClick={onBook}>
            {isBooked ? "Booked" : "Book"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const Fleet = () => {
  const [products, setProducts] = useState({});
  const [bookedKeys, setBookedKeys] = useState(() => {
    const stored = localStorage.getItem("bookedProducts");
    return stored ? JSON.parse(stored) : [];
  });

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/cart.json");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };
    fetchData();
  }, []);
  
  const handleToggleBook = (sectionId, index, product) => {
  const key = `${sectionId}_${index}`;
  let updated;

  if (bookedKeys.includes(key)) {
    // Unbook logic
    updated = bookedKeys.filter(k => k !== key);
    localStorage.removeItem(`product_${key}`);
  } else {
    // Book logic
    updated = [...bookedKeys, key];
    localStorage.setItem(`product_${key}`, JSON.stringify(product));
  }

  setBookedKeys(updated);
  localStorage.setItem("bookedProducts", JSON.stringify(updated));
};

  const sections = [
    { id: "section1", title: "M P V / M U V Cars" },
    { id: "section2", title: "Hatchback Cars" },
    { id: "section3", title: "Sedan Cars" }
  ];

  return (
    <div className="deals-main">
      <div className="container-card">
        <h1>Fleet</h1>
        {sections.map((section) => (
          <div key={section.id}>
            <h3 id={section.id}>{section.title}</h3>
            <div className="card-main">
              {(products[section.id] || []).map((product, index) => {
                const key = `${section.id}_${index}`;
                return (
                  <ProductCard
                    key={key}
                    product={product}
                    isBooked={bookedKeys.includes(key)}
                    // onBook={() => handleBook(section.id, index, product)}
                    onBook={() => handleToggleBook(section.id, index, product)}

                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fleet;
