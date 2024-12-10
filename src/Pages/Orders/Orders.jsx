import React, { useContext, useEffect, useState } from "react";
import classes from "./Orders.module.css";
import LayOUt from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { db } from "../../Utility/firebase";
import ProductCard from "../../Components/Product/ProductCard";
function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
   useEffect(()=>{
    if(user){
      db.collection("user").doc(user.uid).collection("orders").orderBy("created","desc").onSnapshot((snapshot)=>{
        setOrders(
            snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
       
      })
    }else{
     setOrders([])
    }

   })
  
  console.log(orders);
  return (
    <LayOUt>
      <section className={classes.container}>
        <div className={classes.orders_Container}>
          <h2>Your Orders</h2>
          {/* ordered items */}
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>you don't have orders yet.</div>
          )}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard product={order} key={order.id} flex={true} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOUt>
  );
}

export default Orders;
