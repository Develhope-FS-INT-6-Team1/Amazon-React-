import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Orders/Orders.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import axios from "axios";

export function Orders(): JSX.Element {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [slidesToShow, setSlidesToShow] = useState(6);
  const [orders, setOrders] = useState([{"orderId":-1,"products":[]}]);


  const handleSlideChange = (index) => {
    if (index < 3) {
      setSlidesToShow(6);
    } else {
      setSlidesToShow(4);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {

    const fetchOrders = async () => {

      try { 
        const value = await localStorage.getItem('userId');
        console.log("VALUEEE",value);
        let tempOrders = [];
        const response = await axios.post("http://localhost:3001/api/users/getOrders", {
            'userId': value
        });
        //setOrders(response.data);
        console.log(response.data);
        let allOrders = response.data;
        for(let i = 0 ; i < allOrders.length;i++){
          let curOrder = {"orderID":allOrders[i].orderId, "products":[]};
          let products = allOrders[i].Products
          for(let j = 0;j<products.length;j++){
            await axios.get(`http://localhost:3001/products/${products[j].producid}`)
            .then(async (response) => {
              //console.log(response.data);
              let temp = response.data;
              temp.quantity = products[j].productcount;
              curOrder.products.push(temp);
            })
            .catch((error) => {
              console.error('Error occurred while fetching products:', error);
            });
          }

          //console.log(curOrder);
          tempOrders.push(curOrder);
        }
        console.log(tempOrders);
        setOrders(tempOrders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
  };
  
    fetchOrders();
  }, []);
  
  const handleCancelOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3001/api/orders/${orderId}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order.orderID !== orderId));
    } catch (error) {
      console.error('Failed to cancel order:', error);
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

        <div className="content">
            {orders.length > 0 ? (
              orders.map((order) => (
                <div className="order-box" key={order.orderID}>
                  <p>Order ID: {order.orderID}</p>
                  <hr></hr>
                  <ul className="order-details">
                    {order.products.map((product) => (
                      <div>
                        <img className="product-img" src={product.image} height="200px" alt="product" />
                        <li className="product-name" key={product.productid}>
                          {product.productname}
                        </li>
                        <li className="product-quantity" key={product.productid}>
                          Quantity: {product.quantity}
                        </li>
                        <hr></hr>
                      </div> 
                    ))}
                  </ul>
                  <hr></hr>
                  <button
                    className="cancel-order"
                    onClick={() => handleCancelOrder(order.orderID)}>
                      Cancel Order
                  </button>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <div className="message">
                  <p>Looks like you haven't placed any orders.</p>
                </div>
              </div>
            )}
        </div>

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
        </section>
      </div>
    </div>
  );
}
