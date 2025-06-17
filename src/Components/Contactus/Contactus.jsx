import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import './Contactus.css';

const locations = [
  {
    city: "DELHI-NCR",
    address: "Plot No. 12 Sector 18, Maruti Industrial Area, Gurgaon 122015",
  },
  {
    city: "BENGALURU",
    address:
      "No 1, Bandappa Colony, New Biyapanahalli Extension, Old Madras Rd, opp. Montfort college, Bengaluru, Karnataka 560038",
  },
  {
    city: "MUMBAI",
    address:
      "Plot No 94, Marol Co Op Industrial Estate, Andheri Kurla Road, Andheri, Mumbai, Maharashtra",
  },
  {
    city: "PUNE",
    address:
      "B-Wing, Shop No. 501–509, Mega Center, Near Magarpatta City, Hadapsar, Pune – 411013, Maharashtra",
  },
  {
    city: "HYDERABAD",
    address:
      "Plot No.974 Small Avenue, Road No 49 (Lane adjacent to Monster.com office) Jubilee Hills, Hyderabad 500033, Telangana",
  },
  {
    city: "JAIPUR",
    address:
      "Plot No. K14, IBC Tower 6th floor, Ashok Marg, C-Scheme, Near Airtel Building -302001, Jaipur, Rajasthan",
  },
  {
    city: "KOCHI",
    address:
      "Angel Plaza, 23/649 A1, NH544, opposite Metro Pillar 290, South Kalamassery, Kalamassery, Kochi, Kerala 682022",
  },
  {
    city: "KOLKATTA",
    address:
      "The Silver Arcade, 5, Eastern Metropolitan Bypass, Tangra, Kolkata, West Bengal 700105",
  },
  {
    city: "KOZHIKODE",
    address:
      "7QW7+QG5, Door No : 2 ,KRS Building, Kannur Rd, Athanikkal, Kozhikode, Kerala 673005",
  },
];

const Contactus = () => {
  return (
    <div className="locations-container">
      <h1>We are Available 24x7 <span>@ 9512341234</span></h1>
      <div className="locations-grid">
        {locations.map((loc, index) => (
          <div className="location-card" key={index}>
            <div className="icon">
              <FaLocationDot />
            </div>
            <h3>{loc.city}</h3>
            <p>{loc.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contactus;
