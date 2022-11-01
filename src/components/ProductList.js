import React, {useEffect} from 'react'
import './product.css'
import {useDispatch, useSelector} from 'react-redux'


function ProductList() {
// dispatch count;
const dispatch=useDispatch();
const count=useSelector(state=>state.count)
   console.log(count)
    const[fake,setProduct]=React.useState([]);
  

    const productcart=async()=>{
      const response=await fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json")
     const data=await response.json();//convert json to object
      
      setProduct(data)
  }
    useEffect(()=>{
      productcart();
     
    },[])

   
 
  return (
    <div className='heading1'>
      <h1 className='h1'>Products</h1>
   
    <div className='product'>
       {
      Object.values(fake).map(item=>{
        return( <div className='box'>
          <img src={item.productImage}  alt="miss" />
          <div className='content'>
              <h1>{item.productName}</h1>
              </div>
              <div className='rating'>
              <p className='star'>⭐⭐⭐⭐⭐ </p>
              <p className='price'><font>{item.oldPrice}</font>/- <span>{item.newPrice}/-</span></p>
              </div>
              

             

         
          <div className='btn'>
              <button type='button' onClick={()=>dispatch({type:'ADD_ONE_TO_COUNTER'})}>Add To Cart</button>
          </div>
          </div>
          

          
        )

      })
    }
      
    </div>
    </div>
  )
}

export default ProductList
