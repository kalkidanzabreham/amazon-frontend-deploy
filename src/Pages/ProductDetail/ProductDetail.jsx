import React, { useEffect, useState } from 'react'
import classes from "./ProductDetail.module.css"
import LayOUt from "../../Components/LayOut/LayOut"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../API/EndPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Rating from "@mui/material/Rating";
import Loader from '../../Components/Loader/Loader';
function ProductDetail() {
  const [product,setProduct] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  const {productId} = useParams()
  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data)
      setIsLoading(false)
    })
    .catch((err)=>{
      console.log(err);
      setIsLoading(false)
    })
  },[])
  // console.log(product);
  return (
    <LayOUt>
      {isLoading ? <Loader /> : <ProductCard product={product}
      flex = {true}
      renderDescription = {true}
      renderAdd={true}
       />}
    </LayOUt>
  );
}

export default ProductDetail