import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "react-multi-carousel/lib/styles.css";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const carData = [
  {
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
  },
  {
    name: "Volkswagen Polo GT",
    brand: "Volkswagen",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=80",
  },
  {
    name: "Maruthi Swift",
    brand: "Maruthi",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter-31.jpeg?isig=0&q=80",
  },
  {
    name: "Honda City",
    brand: "Honda",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter-78.jpeg?isig=0&q=80",
  },
  {
    name: "Maruti Dzire",
    brand: "Maruthi",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80",
  },
];
const Home = () => {
 useEffect(() => {
  ScrollReveal().reveal('.bg-text h1', {
    origin: 'top',
    distance: '30px',
    duration: 800,
    delay: 100,
    easing: 'ease-in-out',
    reset: false,
  });

  ScrollReveal().reveal('.bg-text p', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    reset: false,
  });
  ScrollReveal().reveal('.trending-offers-container h2', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    reset: false,
  });
   ScrollReveal().reveal('.referral-section', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    reset: false,
  });
   
}, []);

  const [activeTab, setActiveTab] = useState("daily");

  const dailyOffers = [
    {
      title: "Flat 10% off",
      code: "SUMMERSAVE10",
      description: "Flat 10% off on bookings between 1 to 3 days",
      image:
        "https://plus.unsplash.com/premium_photo-1661684461801-7c9d3662dc77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZW5kcyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Flat 15% off",
      code: "SUMMERSAVE15",
      description: "Flat 15% off on bookings between 3 to 5 days",
      image:
        "https://plus.unsplash.com/premium_photo-1658506615393-8bbfad5af96e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyaWVuZHMlMjBjYXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Flat 20% off",
      code: "SUMMERSAVE20",
      description: "Flat 20% off on bookings above 5 days",
      image:
        "https://plus.unsplash.com/premium_photo-1661322638510-c022748e488f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZW5kcyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  const monthlyOffers = [
    {
      title: "Flat 25% off",
      code: "MONTHLY25",
      description: "Flat 25% off on bookings above 20 days",
      image:
        "https://media.istockphoto.com/id/1280396610/photo/young-businessman-helping-his-female-colleague-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=zwdgaBdLbS1dYoWzEaikSdskexNgmvkELQlPZhUI6Hk=",
    },
    {
      title: "Flat 30% off",
      code: "MONTHLY30",
      description: "Flat 30% off on bookings for 1 month or more",
      image:
        "https://media.istockphoto.com/id/2153422833/photo/happy-office-laptop-and-professional-man-legal-advocate-or-government-attorney-with-career.webp?a=1&b=1&s=612x612&w=0&k=20&c=oOJvMX6kaMMDKWU5qVrA2BL4DWk9QNKlwrHw3eu3b68=",
    },
  ];

  const offersToShow = activeTab === "daily" ? dailyOffers : monthlyOffers;
  return (
    <div className="main">
      <div className="bg-text">
        <h1>
          Welcome to RENT A CAR -Your <br />
          Trusted Car Partner
        </h1>
        <p>
          We're passionate about making car ownership and rentals easy and
          transparent,
          <br />
          delivering a hassle-free experience for all your car needs.
        </p>
      </div>

      <div className="trending-offers-container">
        <h2>Trending Offers</h2>
        <div className="tab">
          <button
            className={activeTab === "daily" ? "active" : ""}
            onClick={() => setActiveTab("daily")}
          >
            Daily Offers
          </button>
          <button
            className={activeTab === "monthly" ? "active" : ""}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly Offers
          </button>
        </div>
        <div className="offers-grid">
          {offersToShow.map((offer, index) => (
            <div
              className={`offer-card ${
                index === 1 && activeTab === "daily" ? "highlight" : ""
              }`}
              key={index}
            >
              <img src={offer.image} alt={offer.title} />
              <div className="offer-info">
                <h3>{offer.title}</h3>
                <p className="code">
                  Use Code: <strong>{offer.code}</strong>
                </p>
                <p>{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
            
      </div>

      {/* Referral */}
      {/* -------------- */}
      <div className="referral">
        <h1>Refer a Friend</h1>
        <div class="referral-section">
          <div class="referral-text">
            <h2>
              Refer Your Friends and <span>Be A Partner Of MyChoize</span>
            </h2>
            <p>Download the app for exclusive deals and ease of booking</p>
            <div class="store-buttons">
              <a href="https://play.google.com/store/games?hl=en">
                <img
                  src="../../../public/Images/PlayStoreBadge.png"
                  alt=""
                  className="store-badge"
                />
              </a>
              <a href="https://www.apple.com/in/app-store/">
                <img
                  src="../../../public/Images/AppStoreBadge.png"
                  alt=""
                  className="store-badge"
                />
              </a>
            </div>
          </div>
          <div class="referral-image">
            <img src="../../../public/Images/referral img.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* topselling */}
      <div className="best-selling-container">
        <h1>Best Selling Models</h1>
        <div className="model-grid">
          {carData.map((car, index) => (
            <div className="car-card" key={index}>
              <img src={car.image} alt={car.name} />
              <div className="car-info">
                <p className="brand"> {car.brand}</p>
                <h3>{car.name}</h3>
                <Link to={"/fleet"}><a href="#">View Details →</a></Link>
              </div>
            </div>
          ))}
        </div>
            
      </div>
      {/* why ride section */}
      <section className="why-ride-section">
        <h2>Why ride with MyChoize?</h2>
        <div className="features-container">
          <div className="feature-card">
            <FaMoneyCheckAlt className="icon" />
            <h3>Multiple Payment Options</h3>
            <p>
              Don’t let payment mode come in between you and your dream car!
              Choose from credit card, debit card, net banking, or UPI.
            </p>
          </div>
          <div className="feature-card">
            <MdCancel className="icon" />
            <h3>Easy Cancellation</h3>
            <p>
              Change of plans made easy with Rent A Car. Enjoy the flexibility
              to cancel your rental car reservation with just a few clicks.
            </p>
          </div>
          <div className="feature-card">
            <FaThumbsUp className="icon yellow" />
            <h3>Best Price Guarantee</h3>
            <p>
              We guarantee the lowest prices on self-drive car rentals and
              subscriptions in India!
            </p>
          </div>
        </div>
      </section>
      {/* available cities */}
      <div className="cities">
        <h2>Cities We Available Here</h2>
        <br />
        <h6>Self-Drive Car Services</h6>
        <p>
          Self-Drive Car Rental in Delhi Self-Drive Car Rental in Bengaluru
          Self-Drive Car Rental in Mumbai Self-Drive Car Rental in Pune
          Self-Drive Car Rental in Jaipur Self-Drive Car Rental in Hyderabad
          Self-Drive Car Rental in Ahmedabad Self-Drive Car Rental in Amritsar
          Self-Drive Car Rental in Chandigarh Self-Drive Car Rental in Chennai
          Self-Drive Car Rental in Dehradun Self-Drive Car Rental in Haridwar
          Self-Drive Car Rental in Indore Self-Drive Car Rental in Jodhpur
          Self-Drive Car Rental in Kolkata Self-Drive Car Rental in Rishikesh
          Self-Drive Car Rental in Udaipur Self-Drive Car Rental in Lucknow
          Self-Drive Car Rental in RajkotSelf-Drive Car Rental in
          VadodaraSelf-Drive Car Rental in Gandhinagar
        </p>
        <h6>Car Subscription Services</h6>
        <p>
          Car Subscription in Delhi Car Subscription in Bengaluru Car
          Subscription in Mumbai Car Subscription in Pune Car Subscription in
          Jaipur Car Subscription in Hyderabad Car Subscription in Amritsar Car
          Subscription in Chandigarh Car Subscription in Chennai Car
          Subscription in Dehradun Car Subscription in Haridwar Car Subscription
          in Indore Car Subscription in Jodhpur Car Subscription in Kolkata Car
          Subscription in Rishikesh Car Subscription in Udaipur Car Subscription
          in Lucknow Car Subscription in Ahmedabad Car Subscription in Rajkot
          Car Subscription in Vadodara Car Subscription in Gandhinagar
        </p>
        <h6>Car Booking Services</h6>
        <p>
          Car Booking in DelhiCar Booking in BengaluruCar Booking in MumbaiCar
          Booking in PuneCar Booking in JaipurCar Booking in HyderabadCar
          Booking in AmritsarCar Booking in ChandigarhCar Booking in ChennaiCar
          Booking in DehradunCar Booking in GoaCar Booking in IndoreCar Booking
          in JodhpurCar Booking in KolkataCar Booking in UdaipurCar Booking in
          LucknowCar Booking in AhmedabadCar Booking in RajkotCar Booking in
          VadodaraCar Booking in Gandhinagar
        </p>
        <h6>Airport Transfers</h6>
        <p>
          Car Rental in Delhi AirportCar Rental in Bengaluru AirportCar Rental
          in Mumbai AirportCar Rental in Pune AirportCar Rental in Jaipur
          AirportCar Rental in Hyderabad AirportCar Rental in Amritsar
          AirportCar Rental in Chandigarh AirportCar Rental in Chennai
          AirportCar Rental in Dehradun AirportCar Rental in Goa AirportCar
          Rental in Indore AirportCar Rental in Jodhpur AirportCar Rental in
          Kolkata AirportCar Rental in Udaipur AirportCar Rental in Lucknow
          AirportCar Rental in Ahmedabad AirportCar Rental in Rajkot AirportCar
          Rental in Vadodara AirportCar Rental in Gandhinagar Airport
        </p>
      </div>
    </div>
  );
};

export default Home;
