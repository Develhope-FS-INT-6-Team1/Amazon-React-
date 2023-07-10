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
    const [priceFilter, setPriceFilter] = useState("none");

    useEffect(() => {
      fetchProducts();
     /* setTimeout(()=>{
        let newProducts : any[] = [];
      for(let i = 0 ; i < products.length;i++){
        let temp : any = products[i];
        temp.price = temp.price.slice(1);
        newProducts.push(temp);
        console.log(temp);
      }
      
      setProducts(newProducts);



      },300);
      */

    }, [priceFilter]);


    const filteredProducts = () =>{
        let newProducts : any[] = [];
        for(let i = 0 ; i < products.length;i++){
            let temp : any = products[i];
            if(temp.price.charAt(0) == '$')
                temp.price = temp.price.slice(1);
            if(priceFilter == 'none'){
                newProducts.push(temp);
                console.log(temp);

            }
            else if(priceFilter == 'under25'){
                if(Number(temp.price) < 25){
                    newProducts.push(temp);
                    console.log(temp);
                }
            }
            else if(priceFilter == '25to50'){
                if(Number(temp.price) >= 25 && Number(temp.price) < 50){
                    newProducts.push(temp);
                    console.log(temp);
                }
            }
            else if(priceFilter == '50to100'){
                if(Number(temp.price) >= 50 && Number(temp.price) < 100){
                    newProducts.push(temp);
                    console.log(temp);
                }
            }
            else if(priceFilter == '100above'){
                if(Number(temp.price) >= 100){
                    newProducts.push(temp);
                    console.log(temp);
                }
            }
        }
        return newProducts;
    }


  
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

                <div className="results">
                    <h3>Results</h3>
                    <div className="product-box">
                        {filteredProducts().map((item) => (
                            <div key={item.productid} className="product-item">
                                <Link to={`/purchase/${item.productid}`}>
                                    <img src={item.image} height="200px" alt="product" />
                                </Link>
                                <div className="product-details">
                                    <h5 className="name-item">{item.productname}</h5>
                                    <p className="about-item">{item.aboutthisitem}</p>
                                    <p className="price-item">Price: ${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}