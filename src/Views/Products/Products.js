import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./Products.css";
import Product from "../../Components/Product/Product";
import productService from "../../Services/productService";
import { useDispatch } from "react-redux";
import * as CartActions from "../../Store/CartActions"

export default function Products() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setProductsLoading(true);
      setProductsError(false);
      try {
        let response = await productService.getProducts();
        setProducts(response.data);
      } catch {
        setProductsError(true);
      } finally {
        setProductsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const openDetails = (id) => {
    let productToDisplay = products.find((p) => p.id === id);
    console.log(productToDisplay);
  };
  const addToCart = (id) => {
    let productToDisplay = products.find((p) => p.id === id);
    dispatch(CartActions.addProduct(productToDisplay,1));
    toast.success(productToDisplay.name + " est ajouté à votre panier");
  };
  let productsHtml = products.map((p) => (
    <div className="col-12 col-lg-4 text-center mb-5" key={p.id}>
      <Product
        badge={null}
        name={p.name}
        description={p.category}
        price={p.selling_price}
        imgUrl={p.photo}
        id={p.id}
        openDetails={openDetails}
        addToCart={addToCart}
      />
    </div>
  ));
  let content = productsHtml;
  if (productsLoading) content = <div>Loading....</div>;
  if (productsError) content = <div>ERROR OCCURED</div>;
  return (
    <div>
      <div className="container-fluid products__welcome-container">
        <h1 className="products__header">Shop</h1>
      </div>
      <div className="container">
        <div className="row mt-5">{content}</div>
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
