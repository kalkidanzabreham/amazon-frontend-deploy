

import { useContext, useEffect } from 'react'
import './App.css'
import CarouselEffect from './Components/Carousel/CarouselEffect'
import Category from './Components/Category/Category'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'
import Router from './Router'
import { auth } from './Utility/firebase'
import { DataContext } from './Components/DataProvider/DataProvider'
import { Type } from './Utility/action.type'

function App() {
const [{user},dispatch] = useContext(DataContext)
useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{

    if(authUser){
      // console.log(authUser);
      dispatch({
        type:Type.SET_USER,
        user:authUser
      })
    }
    else{
      dispatch({
        type: Type.SET_USER,
        user:null,
      });
    }
  })
},[])
  return (
    <>
      <Router/>
      
  </>
  )
}

export default App
