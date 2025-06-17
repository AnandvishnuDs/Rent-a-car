import React, { useState, useRef, useEffect } from "react";
import "./Fleet.css";
import { BsFilterLeft } from "react-icons/bs";

const ProductCard = ({ title, description, price, image }) => (
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
        <button>Book</button>
      </div>
    </div>
  </div>
);

const Fleet = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState({});
  // const menuRef = useRef(null);


  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (menuRef.current && !menuRef.current.contains(e.target)) {
  //       setOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/cart.json");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchData();
  }, []);

  const sections = [
    { id: "section1", title: "M P V / M U V Cars" },
    { id: "section2", title: "Hatchback Cars" },
    { id: "section3", title: "Sedan Cars" }
  ];

  return (
    <div className="deals-main">
      {/* <div className="dropdown" ref={menuRef}>
        <button className="dropdown-btn" onClick={() => setOpen(!open)}>
          <BsFilterLeft />
        </button>
        {open && (
          <ul className="dropdown-menu">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div> */}

      <div className="container-card">
        <h1>Fleet</h1>
        {sections.map((section) => (
          <div key={section.id}>
            <h3 id={section.id}>{section.title}</h3>
            <div className="card-main">
              {(products[section.id] || []).map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fleet;
