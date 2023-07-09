import React, { useState, useEffect } from "react";
import "../CartsMiddlePart/CartsMiddlePart.css";
import { ITEMS__DATA } from "../../Assets/Data/data";
import { Link } from "react-router-dom";
import axios from "axios";
import PurchaseCard from "../PurchaseCard/PurchaseCard";
import Carousel from 'react-elastic-carousel';


export default function CartsMiddlePart() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    } else if (direction === "right") {
      setSlideIndex((prevIndex) => (prevIndex === 11 ? 11 : prevIndex + 1));
    }
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get('http://localhost:3001/products')
      .then(async (response) => {
        await setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error occurred while fetching products:', error);
      });
  };
  return (
    <div>
      <section className="sec-1">
        <div className="container">
          <div className="container-1">
            <div className="para">
              <p>
                You are on amazon.com. You can also shop on Amazon Turkey for
                millions of products with fast local delivery.{" "}
                <a href="#Main">Click here to go to amazon.com.tr</a>
              </p>
            </div>
            <div className="product-comp">
              <div className="box">
                <h3>Gaming accessories</h3>
                <div className="box-a">
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159"
                      alt=""
                    />
                    <span>Headsets</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB6671"
                      alt=""
                    />
                    <span>Keyboards</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB6671590"
                      alt=""
                    />
                    <span>Computer mice</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159"
                      alt=""
                    />
                    <span>Chairs</span>
                  </div>
                </div>
                <a href="/products">See more</a>
              </div>
              <div className="box">
                <h3>Refresh your space</h3>
                <div className="box-a">
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_LP-HP_B08MYX5Q2W_01.23._SY232_CB619238939_.jpg"
                      alt=""
                    />
                    <span>Dining</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_home_B08RCCP3HV_01.23._SY232_CB619238939_.jpg"
                      alt=""
                    />
                    <span>Home</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_kitchen_B0126LMDFK_01.23._SY232_CB619238939_.jpg"
                      alt=""
                    />
                    <span>Kitchen</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_health-beauty_B07662GN57_01.23._SY232_CB619238939_.jpg"
                      alt=""
                    />
                    <span>Health and Beauty</span>
                  </div>
                </div>
                <a href="/products">See more</a>
              </div>
              <div className="box">
                <h3>Shop by Category</h3>
                <div className="box-a">
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer240x._SY170_CB468850970_.jpg"
                      alt=""
                    />
                    <span>Computers</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_240X._SY170_CB438749318_.jpg"
                      alt=""
                    />
                    <span>Video Games</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby240X._SY170_CB468850909_.jpg"
                      alt=""
                    />
                    <span>Baby</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys240X._SY170_CB468851693_.jpg"
                      alt=""
                    />
                    <span>Toys & Games</span>
                  </div>
                </div>
                <a href="/products">Shop now</a>
              </div>
              <div className="box-b">
                <div className="best">
                  <h3>Sign in for the best experience</h3>
                  <a href="/signin">
                    <button>Sign in Securely</button>
                  </a>
                </div>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_2x._CB418309979_.jpg"
                    height="242px"
                    alt=""
                    className="img-hide"
                  />
                </div>
              </div>
            </div>
            <div className="product-comp">
              <div className="box box-c">
                <h3>Electronics</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">See more</a>
              </div>
              <div className="box box-c">
                <h3>Health & Personal Care</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">Shop now</a>
              </div>
              <div className="box box-c">
                <h3>Dresses</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">Shop now</a>
              </div>
              <div className="box box-c">
                <h3>Beauty picks</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">Shop now</a>
              </div>
            </div>
          </div>
          <div className="slider">
            <div className="image-box">
              <div className="slide">
                <img
                  src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-2">
        <div className="slide-sec">

          <h3>Top Sellers in Toys for you</h3>
          <Carousel>
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

              <img
                src="https://m.media-amazon.com/images/I/61SD8-dBQtL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71M4w2NSg4L._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/51dwgtWvI9L._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/81bTf4V7W7L._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/81cLvXc7P2L._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71Nkj3RfkDL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61LJoXj2HcL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />
          </Carousel>
        </div>
      </section>
      <section className="sec-2">
        <div className="slide-sec">
          <h3>International top sellers</h3>
          <Carousel>


            {/*

             //className="product-slide product-slide-1"
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={`/purchase/${item.id}`}>
                    <img src={item.image} height="200px" alt="" />
                  </Link>
                </li>
              );
            })} */}
            {products.map((item) => {
              console.log(item);
              return (
                  <Link to={`/purchase/${item.productid}`}>
                    <img src={item.image} height="200px" alt="product" />
                  </Link>
              );
            })}
          </Carousel>
        </div>
      </section>
      <section className="sec-1-1">
        <div className="container">
          <div className="container-1-1">
            <div className="product-comp">
              <div className="box box-c">
                <h3>New arrivals in Toys</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_2X._SY608_CB639759849_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">Shop now</a>
              </div>
              <div className="box box-c">
                <h3>Discover fashion trends</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_ff_desktopsinglecategory_desktop_758x608._SY608_CB612846074_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">See more</a>
              </div>
              <div className="box box-c">
                <h3>For your Fitness Needs</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">Shop now</a>
              </div>
              <div className="box box-c">
                <h3>Shop activity trackers and smartwatches</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg"
                    alt=""
                  />
                </div>
                <a style={{ marginTop: "-22px" }} href="http://#">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-2">
        <div className="slide-sec">
          <h3>Popular items this season</h3>
          <Carousel>
              <img
                src="https://m.media-amazon.com/images/I/71g0Q186NUL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61EaVIDyGZL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61STs1XYheL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/41jgGrTrWdL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71Gzb9IUoxL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71ADFbGBtbL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71mc0Xfy81L._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61Pl0vNGwKL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71QIlMkS9JL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/91iR3q08RDL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71vkDABQHhL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61mUJ44GjeL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61Hj10E8iCL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />
          </Carousel>
        </div>
      </section>
      <section className="sec-2">
        <div className="slide-sec">
          <h3>
            Home Décor Under $20 &nbsp;&nbsp;{" "}
            <a
              href="/products"
              style={{ fontSize: "13px", color: "#007185", fontWeight: 500 }}
            >
              Shop now
            </a>
          </h3>
          <Carousel>
              <img
                src="https://m.media-amazon.com/images/I/613+CG1dP1L._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71kENaxQixL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/41d1tq6oesL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/81AOpcqJfHL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/81xiJRmOwUL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/51lFr88wxML._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71CDFmK2qNS._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/710xU17suIL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/612xTdtHVfL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/71Mda9UuJhL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61dhzAmqvOL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />

              <img
                src="https://m.media-amazon.com/images/I/61XwmZLvaNL._AC_SY400_.jpg"
                height="200px"
                alt=""
              />
          </Carousel>
        </div>
      </section>
      <section className="sec-1-1">
        <div className="container">
          <div className="container-1-1">
            <div className="product-comp">
              <div className="box box-c">
                <h3>Home refresh ideas</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/SpringEvent2023/XCM_CUTTLE_1559454_3018199_758x608_2X_en_US._SY608_CB592739737_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">Shop kitchen upgrades</a>
              </div>
              <div className="box box-c">
                <h3>Kindle E readers</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_2X._SY608_CB639752734_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">Shop now</a>
              </div>
              <div className="box box-c">
                <h3>Shop Laptops & Tablets</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_758x608_2X_en_US._SY608_CB418608386_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">See more</a>
              </div>
              <div className="box box-c">
                <h3>Spring new arrivals</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/mp_20230210_newarrivals_desktopsinglecategory_desktop_758x608._SY608_CB613668625_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">Discover more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-1-1">
        <div className="container">
          <div className="container-1-1">
            <div className="product-comp">
              <div className="box box-c">
                <h3>Create with strip lights</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Striplighting_758x608_2X_en_US._SY608_CB418597463_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">Shop now</a>
              </div>
              <div className="box">
                <h3>Gaming merchandise</h3>
                <div className="box-a">
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_2x._SY232_CB667159060_.jpg"
                      alt=""
                    />
                    <span>Apparel</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_2x._SY232_CB667159060_.jpg"
                      alt=""
                    />
                    <span>Hats</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_2x._SY232_CB667159060_.jpg"
                      alt=""
                    />
                    <span>Action figures</span>
                  </div>
                  <div>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_2x._SY232_CB667159063_.jpg"
                      alt=""
                    />
                    <span>Mugs</span>
                  </div>
                </div>
                <a href="/products">See more</a>
              </div>
              <div className="box box-c">
                <h3>Shop Pet supplies</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_2X._SY608_CB639746708_.jpg"
                    alt=""
                  />
                </div>
                <a href="/products">See more</a>
              </div>
              <div className="box box-c">
                <h3>Deals in Tools and Home Improvement</h3>
                <div>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/Holiday2022/Graphics/XCM_CUTTLE_1475305_2610205_758x608_2X_en_US._SY608_CB608600856_.jpg"
                    alt=""
                  />
                </div>
                <a style={{ marginTop: "-22px" }} href="/products">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="signIn">
        <div className="signIn-wrapper">
          <div className="signInContent">
            <p className="p1">See personalized recommendations</p>
            <a href="/signin">
              <button>Sign in</button>
            </a>
            <p className="p2">
              New customer? <a href="/signup">Start here.</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
