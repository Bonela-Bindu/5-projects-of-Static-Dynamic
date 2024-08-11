import React from 'react'
import Navigation from '../customer/components/navigation/Navigation'
import HomePage from '../customer/pages/homepage/HomePage'
import Cart from '../customer/components/cart/Cart'
import { Route, Routes} from "react-router-dom"
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Products/Product'
import ProductDetails from '../customer/components/productdetails/ProductDetails'
import CheckOut from '../customer/components/checkout/CheckOut'
import Order from '../customer/components/order/Order'
import OrderDetails from '../customer/components/order/OrderDetails'

const CustomerRouter = () => {
  return (
    <>
         <div>
        <Navigation/>
        </div>
          
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}/>
            <Route path='/product/:productId' element={<ProductDetails/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path='/account/order' element={<Order/>}/>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}/>
            </Routes>
            
            <div>
        <Footer/>
        </div>
   
  </>
  )
}

export default CustomerRouter