import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../Products/Products.css'

interface Item {
    image: string;
    name: string;
    price: number;
    color: string;
    About: {
        first: string;
        second: string;
        third: string;
        fourth: string;
        fifth: string;
        sixth: string;
    }[];
}

interface ProductsProp {
    item: Item; 
}

export default function Products(){

    const [products, setProducts] = useState<Item[]>([]);
    const [priceFilter, setPriceFilter] = useState("");

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

    const handlePriceFilterChange = (value: string) => {
        setPriceFilter(value);
      };

    return(
        <div className="products-main">
            <div>
                <p>1-24 of over 30 results</p>
            </div>
            <div className="filters-results">
                <div className="filters">
                    <h3>Filters</h3>
                    <div className="filter-by">
                        <h4>By Price:</h4>
                        <p>
                            <input
                                type="radio"
                                value="All"
                                checked={priceFilter === "none"}
                                onChange={() => handlePriceFilterChange("none")}
                            />
                            All
                        </p>
                        <p>
                            <input
                                type="radio"
                                value="under25"
                                checked={priceFilter === "under25"}
                                onChange={() => handlePriceFilterChange("under25")}
                            />
                            Under $25
                        </p>
                        <p>
                            <input
                                type="radio"
                                value="25to50"
                                checked={priceFilter === "25to50"}
                                onChange={() => handlePriceFilterChange("25to50")}
                            />
                            $25 to $50
                        </p>
                        <p>
                            <input
                                type="radio"
                                value="50to100"
                                checked={priceFilter === "50to100"}
                                onChange={() => handlePriceFilterChange("50to100")}
                            />
                            $50 to $100
                        </p>
                        <p>
                            <input
                                type="radio"
                                value="100above"
                                checked={priceFilter === "100above"}
                                onChange={() => handlePriceFilterChange("100above")}
                            />
                            $100 & Above
                        </p>
                    </div>
                    <div className="filter-by">
                        <h4>By Rate:</h4>
                        <p><input type="radio"/>1 & up</p>
                        <p><input type="radio"/>2 & up</p>
                        <p><input type="radio"/>3 & up</p>
                        <p><input type="radio"/>4 & up</p>
                    </div>
                    <div className="filter-by">
                        <h4>By Department:</h4>
                        <p><input type="radio"/>Arts & Crafts</p>
                        <p><input type="radio"/>Automotive</p>
                        <p><input type="radio"/>Baby</p>
                        <p><input type="radio"/>Beauty & Personal Care</p>
                        <p><input type="radio"/>Books</p>
                        <p><input type="radio"/>Boy's Fashion</p>
                        <p><input type="radio"/>Computers</p>
                        <p><input type="radio"/>Deals</p>
                        <p><input type="radio"/>Digital Music</p>
                        <p><input type="radio"/>Electronics</p>
                        <p><input type="radio"/>Girl's Fashion</p>
                        <p><input type="radio"/>Health & Household</p>
                        <p><input type="radio"/>Home & Kitchen</p>
                        <p><input type="radio"/>Industrial & Scientific</p>
                        <p><input type="radio"/>Kindle Store</p>
                        <p><input type="radio"/>Luggage</p>
                        <p><input type="radio"/>Men's Fashion</p>
                        <p><input type="radio"/>Music & TV</p>
                        <p><input type="radio"/>Music, CDs & Vinyl</p>
                        <p><input type="radio"/>Pet Supplies</p>
                        <p><input type="radio"/>Prime Videos</p>
                        <p><input type="radio"/>Software</p>
                        <p><input type="radio"/>Sports & Outdoor</p>
                        <p><input type="radio"/>Tools & Home Improvements</p>
                        <p><input type="radio"/>Toys & Games</p>
                    </div>
                </div>
                <div className="results">
                    <div><h3>Results</h3></div>
                    <div className="products-grid">
                        <div className="product-box">
                            {products.map((item) => (
                                <div key={item.productid} className="product-item">
                                    <Link to={`/purchase/${item.productid}`}>
                                        <img src={item.image} height="200px" alt="product" />
                                    </Link>
                                    <div className="product-details">
                                        <h5>{item.name}</h5>
                                        <p>{item.description}</p>
                                        <p>Price: ${item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}