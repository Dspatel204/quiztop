import React from "react";
import "./assets/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import LifeStyleImg from "./assets/images/Group 102 (1).png";
import HealthImg from "./assets/images/Group 103.png";

const Home = () => {
  return (
    <div>
      <div className="background">
        <header>
          <div className="container">
            <h1>Top10.com</h1>
            <nav>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Partner with us</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Term of use</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="hero">
          <div className="container">
            <h2>
              Compare and shop the <span>Top10</span> best services &amp;
              products for you
            </h2>
            <p>Lorem ipsum has been the industry's standard dummy text.</p>
            <div className="categories">
              <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="allCategorySwiper"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  425: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  488: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                  },
                }}
              >
                <SwiperSlide>
                  <img src={LifeStyleImg} alt="allGames"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={HealthImg} alt="allGames"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={LifeStyleImg} alt="allGames"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={LifeStyleImg} alt="allGames"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={LifeStyleImg} alt="allGames"></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={LifeStyleImg} alt="allGames"></img>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
      <main>
        <section className="top-trending-deals">
          <div className="container">
            <h2>Top Trending Deals</h2>
            <div className="deals">
              <div className="deal">
                <img src="meal1.jpg" alt="Hello Fresh" />
                <p>Get 30% Off, Your First Order</p>
                <button>Order Now</button>
                <span>Posted on 23 Jul, 2024</span>
              </div>
              <div className="deal">
                <img src="meal2.jpg" alt="Eat Healthy" />
                <p>Get 30% Off, Your First Order</p>
                <button>Order Now</button>
                <span>Posted on 23 Jul, 2024</span>
              </div>
              <div className="deal">
                <img src="chef.jpg" alt="Home Chef" />
                <p>Get 30% Off, Your First Order</p>
                <button>Order Now</button>
                <span>Posted on 23 Jul, 2024</span>
              </div>
              <div className="deal">
                <img src="meal3.jpg" alt="Hello Fresh" />
                <p>Get 30% Off, Your First Order</p>
                <button>Order Now</button>
                <span>Posted on 23 Jul, 2024</span>
              </div>
            </div>
          </div>
        </section>
        <section className="top-trending-list">
          <div className="container">
            <h2>Top Trending List</h2>
            <div className="list">
              <div className="list-item">
                <img src="dating.jpg" alt="Dating Sites" />
                <h3>Top Best Online Dating Site's &amp; Apps In 2024</h3>
                <p>March 2024</p>
                <button>Dating Sites &amp; Apps</button>
                <div className="sub-links">
                  <a href="#">Top 5 Similar Dating Apps &amp; Sites...</a>
                  <a href="#">One Click Find Your Love...</a>
                </div>
                <img src="eharmony-logo.jpg" alt="Eharmony Review" />
              </div>
            </div>
          </div>
        </section>
        <section className="info">
          <div className="container">
            <div className="stats">
              <div>
                500+
                <br />
                Comparison List
              </div>
              <div>
                5000+
                <br />
                Hours Of Research
              </div>
              <div>
                15M+
                <br />
                Decision Made With Top10.com
              </div>
            </div>
            <div className="story">
              <h2>Our Story</h2>
              <p>
                Lorem ipsum has been the industry's standard dummy text ever
                since the 1500s...
              </p>
              <img src="team.jpg" alt="Our Team" />
            </div>
            <div className="team">
              <h2>Our Team</h2>
              <p>
                Lorem ipsum has been the industry's standard dummy text ever
                since the 1500s...
              </p>
              <img src="team.jpg" alt="Our Team" />
            </div>
            <div className="method">
              <h2>Our Method</h2>
              <p>
                Lorem ipsum has been the industry's standard dummy text ever
                since the 1500s...
              </p>
              <img src="method.jpg" alt="Our Method" />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>© 2020 - 2024 Netnul Intelligence Ltd. All Rights Reserved</p>
          <div className="footer-nav">
            <a href="#">About us</a>
            <a href="#">Blog</a>
            <a href="#">Partner with us</a>
            <a href="#">Privacy policy</a>
            <a href="#">Term of use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
