import React from 'react'
import "./Bookimg.css"
const steps = [
  {
    number: '01',
    title: 'Select City & Travel dates',
    icon: 'https://img.icons8.com/ios/100/calendar.png',
  },
  {
    number: '02',
    title: 'Choose Car & Delivery Mode',
    icon: 'https://img.icons8.com/ios/100/map-marker.png',
  },
  {
    number: '03',
    title: 'Verify Yourself',
    icon: 'https://img.icons8.com/ios/100/identification-documents.png',
  },
  {
    number: '04',
    title: 'Make Payment',
    icon: 'https://img.icons8.com/ios/100/money.png',
  },
];

const Booking = () => {
  return (
    <div>
      <div className="booking-steps-container">
      <h2>How To Book a Car Online</h2>
      <p>Book a car online in India from MyChoize in 4 Simple steps.</p>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="icon-container">
              <img src={step.icon} alt={step.title} />
            </div>
            <h3>{step.number}</h3>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default Booking