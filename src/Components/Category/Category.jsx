import React from 'react'
import { categoryInfo } from './CategoryFullInfo'
import CategoryCard from './CategoryCard'
import classes from "./Category.module.css";
function Category() {
    
  return (
  
    <section className={classes.category_container}>
    {
        categoryInfo.map((info,i)=>{
            return <CategoryCard  key={i}data={info}/>
        })
    }
  
    {/* <CategoryCard/> */}
    </section>
  )
}

export default Category