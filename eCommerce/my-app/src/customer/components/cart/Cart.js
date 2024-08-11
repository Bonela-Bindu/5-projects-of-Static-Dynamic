import React from 'react'
import CartItems from './CartItems'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate=useNavigate();
  const checkOut=()=>{
    navigate("/checkout?form=2");
  }
  return (

    <>
    <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>{[1,1,1,1].map((item)=><CartItems/>)}</div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border p-4'>
                <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                <hr/>
                <div className='space-y-3 font-semibold mb-10'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>$4657</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                        <span>Discount</span>
                        <span className="text-green-500">$-3000</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                        <span  >Delivery Charges</span>
                        <span className="text-green-500">Free</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black font-bold'>
                        <span  >Total Amount</span>
                        <span className="text-green-500">$1278</span>
                        </div>

                </div>
                <Button onClick={checkOut} className='w-full mt-5'
                  variant="contained" 
                  sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
                  Add To Cart
                </Button>
            </div>

        </div>
    </div>
    <div></div>
    </>
  )
}

export default Cart