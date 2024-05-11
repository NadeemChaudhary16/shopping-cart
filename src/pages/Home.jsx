import React, { useEffect, useState } from 'react'
const API_URL="https://fakestoreapi.com/products"

import Spinner from "../Components/Spinner"
import Product from "../Components/Product"

const Home = () => {
const [loading,setLoading]=useState(false)
const [products,setProducts]=useState([])
  async function fetchProductData(){
   setLoading(true)
   try{
     const res=await fetch(API_URL)
     const data=await res.json()
     setProducts(data)
    //  console.log(data)
    }
    catch(error){
      console.log(error)
      setProducts([])
    }
    setLoading(false)

  }
  useEffect(()=>{
    fetchProductData()
  },[])
  return (
    <div>
      {

        loading ? <Spinner /> :
         products.length > 0 ? 
         <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">

         {
          products.map((product)=>{
            return (<Product  key ={product.id} product={product}/>)
          })
         }
        </div> :
        <div className="flex justify-center items-center">
          Data not found
        </div>
      }
    </div>
  )
}

export default Home
