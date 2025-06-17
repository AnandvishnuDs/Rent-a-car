import React, { useState } from 'react';
import './Deal.css';

const offersData = {
  daily: [
    {
      code: 'SUMMERSAVE10',
      validTill: '10th Jun 2025',
      image: 'https://www.mychoize.com/mychoize-live/current/files/deals/250404052019.jpg',
    },
    {
      code: 'SUMMERSAVE15',
      validTill: '10th Jun 2025',
      image: 'https://www.mychoize.com/mychoize-live/current/files/deals/250404052239.jpg',
    },
    {
      code: 'SUMMERSAVE20',
      validTill: '10th Jun 2025',
      image: 'https://www.mychoize.com/mychoize-live/current/files/deals/250404052512.jpg',
    },
  ],
  monthly: [
    {
      code: 'MONTHLY2000',
      validTill: '31th July 2025',
      image: 'https://www.mychoize.com/mychoize-live/current/files/deals/250312122729.jpg',
    },
     {
      code: 'MONTHLY3000',
      validTill: '31th July 2025',
      image: 'https://www.mychoize.com/mychoize-live/current/files/deals/250312122913.jpg',
    },
  ],
};

const Deal = () => {
  const [activeTab, setActiveTab] = useState('daily');

  return (
  <div className="deal-container">
     <h1>Car Rental Deals <span> & Offers</span></h1>
    <div className="deal-containerchild">
     
      <div className="tabs">
        <button
          className={activeTab === 'daily' ? 'active' : ''}
          onClick={() => setActiveTab('daily')}
        >
          Daily Offers
        </button>
        <button
          className={activeTab === 'monthly' ? 'active' : ''}
          onClick={() => setActiveTab('monthly')}
        >
          Monthly Offers
        </button>
      </div>

      <div className="deal-grid">
        {offersData[activeTab].map((offer, index) => (
          <div className="deal-card" key={index}>
            <div className="deal-banner">
              <img src={offer.image} alt="deal" />
            </div>
            <div className="deal-footer">
              <div>
                <strong>{offer.code}</strong>
                <p>Valid till {offer.validTill}</p>
              </div>
              <div className="deal-links">
                <button>Book Now</button>
                <a href="#">Terms & Condition</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <div className="deal-text">
        <div className="deal-textone">
          <h4>Upcoming Car Rental Deals at Rent A Car</h4>
          <p>Are you planning a trip in India and looking for the best car rental offers, and discounts? Look no further than Rent A Car! You can get the best car rental deals online at Rent A Car along with the wide <span>range of cars</span> from compact hatchbacks to luxury SUVs.</p>
          <p>You can hire a car for every need with Rent A Car’s upcoming car subscription offers and car rental discounts make it easier than ever to get behind the wheel of the car you want at an affordable price.</p>
          <p>With our user-friendly interface and easy booking process and 24/7 customer support, finding the perfect car has never been easier.</p><br />
          <h4>Car Subscription Deals, Discount and Offers</h4>
          <p>Experience the ultimate freedom with Rent A Car’s <span>car subscription</span> deals and offers. Our flexible car rental offers and plans give you the power to drive the car you want when you want it. Plus, you can enjoy great car rental discounts with our car subscription offers. So don’t miss out, book your car today and start enjoying the ride!</p>
        </div>
        <div className="deal-texttwo">
          <h4>Daily Car Rental Deals, Discount and Offers</h4>
          <p>Get ready to hit the road with Rent A Car’s daily car rental discounts and offers! With our commitment to providing the best value to our customers, you can trust that you’ll always get the best car rental deals and discounts.</p>
          <p>Whether you’re planning a long <span>road trip</span> or just need a car for a day, we’ve got you covered with our unbeatable daily car rental offers. And don’t forget to check out our best car rental deals that will help you save even more.</p>
          <p>So, book your <span>car rental</span> today and experience the convenience and flexibility of renting a car with Rent A Car. With our car rental discounts, you’re sure to have a great time on the road!</p>
        </div>
      </div>
    </div>
  );
};

export default Deal;
