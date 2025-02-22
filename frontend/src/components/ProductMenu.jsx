import { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { firmId, firmName } = useParams();

  useEffect(() => {
    if (!firmId) return; // Prevent API call if firmId is missing

    const productHandler = async () => {
      try {
        const response = await fetch(`${API_URL}/product/${firmId}/products`);
        const data = await response.json();
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Invalid product data format", data);
        }
      } catch (error) {
        console.error("Product fetch failed", error);
      }
    };

    productHandler();
  }, [firmId]);

  return (
    <>
      <TopBar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {Array.isArray(products) && products.map((item) => (
          <div className="productBox" key={item._id}>
            <div>
              <div><strong>{item.productName}</strong></div>
              <div>₹{item.price}</div>
              <div>{item.description}</div>
            </div>
            <div className="productGroup">
              <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
              <div className="addButton">ADD</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductMenu;
