import React, { useState } from "react";
import FirstFooter from "../Components/FirstFooter/FirstFooter.tsx";
import FirstHeader from "../Components/FirstHeader/FirstHeader.tsx";
import EndFooter from "../Components/EndFooter/EndFooter.tsx";
import "../Components/PurchaseCard/PurchasePage.css";
import { ITEMS__DATA } from "../Assets/Data/data";
import PurchaseCard from "../Components/PurchaseCard/PurchaseCard.tsx";
import { useParams } from "react-router-dom";

interface Item {
  id: number;
  // Add more properties based on your data structure
}

function PurchasePage() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Item[]>(ITEMS__DATA);
  const productId = parseInt(id, 10); // Replace 'yourProductId' with the desired product ID

  const product = data.find((item) => item.id === productId);

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
