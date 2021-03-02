import React, { useState, useEffect } from "react";
import "./Products.css";
import productService from "../../Services/productService";
import ProductInDepth from "../../Components/Product/ProductInDepth"
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const [productError, setProductError] = useState(false);

  useEffect(()=>{
      const fetchProductById = async () => {
            setProductLoading(true);
            setProductError(false);
            try {
              let response = await productService.getProductById(id);
              setProduct(response.data);
            } catch {
              setProductError(true);
            } finally {
              setProductLoading(false);
            }
          };
        const id = location.pathname.split("products/")[1];
        if(id?.length)
        fetchProductById(id);
  },[location])


  return (
    <div>
      <div className="container-fluid products__welcome-container">
        <h1 className="products__header">
              {product.name}
        </h1>
      </div>
      <div className="container">
        <div className="row mt-5">
            <ProductInDepth product={product}></ProductInDepth>
              </div>
      </div>
      
      {/* <div className="container-fluid roses__welcome-container">
        <div>
          <h1 className="roses__header">Roses</h1>
          <p className="roses__description">
            truths and roses have thorns about them.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">{content}</div>
      </div> */}
    </div>
  );
}
