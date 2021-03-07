import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./Products.css";
import Product from "../../Components/Product/Product";
import productService from "../../Services/productService";
import { useDispatch } from "react-redux";
import * as CartActions from "../../Store/CartActions"
import {useHistory} from "react-router-dom"
import Loader from "../../Components/Loader/Loader"
export default function Products() {
  const dispatch = useDispatch();
  const history = useHistory();

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
    history.push("/products/"+id);
  };
  const addToCart = (id) => {
    let productToDisplay = products.find((p) => p.id === id);
    dispatch(CartActions.addProduct(productToDisplay,1));
    toast.success(productToDisplay.name + " est ajouté à votre panier");
  };
  let productsHtml = products.map((p) => (
    <div className="col-12 col-lg-4 text-center mb-5" key={p.id}>
      <Product
        redBadge={p.quantity===0?"En rupture de stock":null}
        greenBadge={parseFloat(p.discount)>0?"Promo":null}
        name={p.name}
        description={p.category}
        price={(1-parseFloat(p.discount)) * p.selling_price}
        imgUrl={p.photo}
        id={p.id}
        openDetails={openDetails}
        addToCart={addToCart}
      />
    </div>
  ));
  let content = productsHtml;
  if (productsLoading) content = <div className="row mt-5 mb-5"><Loader/></div>;
  if (productsError) content = (<div className="row mt-5 mb-5"><h1>Une erreur s'est produite veuillez réessayer plus tard</h1></div>);
  return (
    <div>
      <div className="container-fluid products__welcome-container">
        <h1 className="products__header">Shop</h1>
      </div>
      <div className="container">
        <div className="row mt-5 mb-5">{content}</div>
        
      </div>
    </div>
  );
}
