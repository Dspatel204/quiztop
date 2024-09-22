import React from 'react';
import './DatingCard.css';

const DatingCard = () => {
  return (
    <section className="best-dating">
      <h2>Our Best Dating Site & App To Meet Single's:</h2>
      <div className="dating-card">
        <div className="card-content">
          <img src="your-image-url.jpg" alt="SilverSingles" />
          <div className="info">
            <h3>SilverSingles - Best for seniors</h3>
            <p>Most dating apps target younger people, but SilverSingles gives the over-50 demographic plenty of opportunities to find companionship.</p>
            <ul>
              <li><strong>Free Version:</strong> Yes</li>
              <li><strong>Package:</strong> $45 / Month</li>
              <li><strong>Age:</strong> 50 & Above</li>
            </ul>
            <div className="pros-cons">
              <div className="pros">
                <h4>Pros</h4>
                <ul>
                  <li>Profiles are manually verified</li>
                  <li>Hard-working professionals</li>
                  <li>Multiple ways to find matches</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Cons</h4>
                <ul>
                  <li>Limited customer support options</li>
                  <li>Long sign-up process</li>
                </ul>
              </div>
            </div>
            <a href="#" className="visit-app">Visit App</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DatingCard;
