 import React, { useContext } from 'react'
 import classes from "./Header.module.css"
 import { Link } from 'react-router-dom';
 import amazonLogo from "../../assets/Amazon-logo.png"
 import { SlLocationPin } from "react-icons/sl";
 import { BsSearch } from "react-icons/bs";
import {BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../Utility/firebase';

 function Header() {
  const [{user,basket},dispatch] = useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount 
  },0)
  
   return (
     <section className={classes.fixed}>
       <section className={classes.header_container}>
         <div className={classes.logo_container}>
           {/* logo */}
           <Link to="/">
             <img src={amazonLogo} />
           </Link>

           {/* delivery */}
           <div className={classes.delivery}>
             <span>
               <SlLocationPin />
             </span>
             <div>
               <p>Delivered to</p>
               <span>Ethiopia</span>
             </div>
           </div>
         </div>
         {/* search */}
         <div className={classes.search}>
           <select name="" id="">
             <option value="">All</option>
           </select>
           <input type="text" placeholder="search product" />
           <BsSearch size={38}/>
         </div>
         <div>
           {/* right side link */}
           <div className={classes.order_container}>
             <Link to="" className={classes.language}>
               <img
                 src="https://icons.iconarchive.com/icons/wikipedia/flags/256/US-United-States-Flag-icon.png"
                 alt=""
               />

               <select name="" id="">
                 <option value="">EN</option>
               </select>
             </Link>

             {/* three components */}
             <Link to={!user && "/auth"}>
               <div>
                 <div>
                   {user ? (
                     <>
                       <p>Hello {user.email?.split("@")[0]}</p>
                       <span onClick={(e)=> auth.signOut()}>Sign out</span>
                     </>
                   ) : (
                     <>
                       <p>Sign In</p>
                       <span>Account & Lists</span>
                     </>
                   )}
                 </div>
               </div>
             </Link>
             {/* orders */}
             <Link to="/orders">
               <p>return</p>
               <span>& orders</span>
             </Link>
             {/* cart */}
             <Link to="/cart" className={classes.cart}>
               <BiCart size={35} />
               <span>{totalItem}</span>
             </Link>
           </div>
         </div>
       </section>
       <LowerHeader />
     </section>
   );
 }
 
 export default Header