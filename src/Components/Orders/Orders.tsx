import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Orders/Orders.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export function Orders(): JSX.Element {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [slidesToShow, setSlidesToShow] = useState(6);

  const handleSlideChange = (index) => {
    if (index < 3) {
      setSlidesToShow(6);
    } else {
      setSlidesToShow(4);
    }
  };

  return (
    <div className="your-orders">
      <div className="order-fisrt-part">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="/account">Your Account</a>
            </li>
            <li>›</li>
            <li>
              <span>Your Orders</span>
            </li>
          </ul>
        </div>

        <div className="header">
          <h1 className="h1-orders">Your Orders</h1>
          <div className="order-search-bar">
            <form method="get" action="/your-account/order-history">
              <input
                type="search"
                id="searchOrdersInput"
                placeholder="Search all orders"
                name="search"
                spellCheck="false"
                className="search-input"
                aria-label="Search all orders"
              />
              <button type="submit" className="search-button">
                Search Orders
              </button>
            </form>
          </div>
        </div>

        <div className="page-tabs">
          <ul>
            <li className="selected">Orders</li>
            <li>
              <a href="/buy-again">Buy Again</a>
            </li>
            <li>
              <a href="/order-history/not-yet-shipped">Not Yet Shipped</a>
            </li>
            <li>
              <a href="/order-history/digital">Digital Orders</a>
            </li>
            <li>
              <a href="/order-history/local-store">Local Store Orders</a>
            </li>
            <li>
              <a href="/order-history/cancelled">Cancelled Orders</a>
            </li>
          </ul>
        </div>
        <hr></hr>

        <div className="time-filter">
          <form method="get" action="/order-history">
            <label htmlFor="time-filter">
              {" "}
              0 <span>Orders </span>placed in
            </label>
            <select name="orderFilter" id="time-filter">
              <option value="last30">Last 30 days</option>
              <option value="months-3" selected>
                Past 3 months
              </option>
              <option value="year-2023">2023</option>
              <option value="archived">Archived Orders</option>
            </select>
            <input
              type="hidden"
              name="ref_"
              value="ppx_yo2ov_dt_b_filter_all"
            />
          </form>
        </div>

        <div className="content">
          <div className="alert">
            <div className="warning">
              {/* <h4>An item you bought has been recalled</h4> */}
              {/* <div>
              To ensure your safety, go to{' '}
              <a href="/your-product-safety-alerts">Your Recalls and Product Safety Alerts</a> and see recall information.
            </div> */}
            </div>
            {/* <div classNameName="error">
            <h4>Action is required on one or more of your orders.</h4>
            <div>
              Please <a href="#attn-required-order">see below</a>.
            </div>
          </div>
          <div classNameName="warning">
            <h4>There's a problem displaying your orders right now.</h4>
          </div> */}
          </div>

          <div className="empty-state">
            <div className="message">
              <p>
                Looks like you haven't placed an order in the last 3 months.
              </p>
              <p>
                <a href="?timeFilter=year-2023">View orders in 2023</a>
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <hr></hr>
        <section className="order-sec-2">
          <div className="order-slide-sec">
            <div className="order-heading"><h4>Recommended based on your shopping trends</h4><span>Page 1 0f 4</span></div>
            <Carousel
              slidesToShow={6}
              slidesToScroll={6}
              prevIcon={<BsChevronLeft />}
              nextIcon={<BsChevronRight />}
              onChange={handleSlideChange}
              onChange={handleSlideChange}
            >
              <img
                src="https://m.media-amazon.com/images/I/619FxH4rtOL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />
              <img
                src="https://m.media-amazon.com/images/I/71t+sCybQuL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61vVhHO4gNL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71aVpfthKSL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/51+73KwKXYL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71asK0W7S9L._AC_SY400_.jpg"
                height="200px"
                alt=""
              />
            </Carousel>
          </div>

          <div className="order-slide-sec">
            <div className="order-heading">
            <h4>
              Customers who viewed items in your browsing history also viewed
            </h4><span>Page 1 0f 4</span>
            </div>
            <Carousel
              slidesToShow={6}
              slidesToScroll={6}
              prevIcon={<BsChevronLeft />}
              nextIcon={<BsChevronRight />}
              onChange={handleSlideChange}
              onChange={handleSlideChange}
            >
              <img
                src="https://m.media-amazon.com/images/I/71t+sCybQuL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61vVhHO4gNL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71aVpfthKSL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/51+73KwKXYL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71asK0W7S9L._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61SD8-dBQtL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
}
