import React, { useState } from "react";
import FirstFooter from "../../Components/FirstFooter/FirstFooter";
import FirstHeader from "../../Components/FirstHeader/FirstHeader";
import EndFooter from "../../Components/EndFooter/EndFooter";
import "./PurchasePage.css";
import { ITEMS__DATA } from "../../Assets/Data/data";
import PurchaseCard from "../../Components/PurchaseCard/PurchaseCard";
import { useParams } from "react-router-dom";

function PurchasePage() {
  const {id} = useParams()
  const [data, setData] = useState(ITEMS__DATA);
const productId = parseInt(id); // Replace 'yourProductId' with the desired product ID

const product = data.find((item) => item.id === productId);
console.log(product);
  return (
    <div id="Main">
      <div className="wrapper-header1">
        <FirstHeader />
        <div className="content-pcard">
        <div>
      {product ? (
        <PurchaseCard item={product} key={product.id} />
      ) : (
        <p>Product not found</p>
      )}
    </div>
        </div>
        
      </div>
      <div className="footer-container-pp">
        <FirstFooter />
        <EndFooter />
      </div>
    </div>
  );
}

export default PurchasePage;
