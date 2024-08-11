import React from 'react'
import AddressCard from '../address/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>
           <div className='py-20'>
            <OrderTracker active={3}/>
           </div>

           <Grid className="space-y-5" container>
            {[1,1,1,1,1].map((item)=> <Grid item container className="shadow-xl rounded-md p-5 border"sx={{alignItems:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                   <div className='flex items-center space-x-4'>
                    <img className='w-[7rem] h-[7rem] object-cover object' src='https://assets.ajio.com/medias/sys_master/root/20240319/L2zt/65f9128d05ac7d77bbc43f06/-288Wx360H-467162071-maroon-MODEL.jpg' alt=''/>
                    <div className='space-y-2 ml-5'>
                        <p className='font-semibold'>Men Shirt</p>
                        <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: Maroon</span>
                        <span>Size: M</span></p>
                        <p>Seller: Liner</p>
                        <p>$1200</p>
                    </div>
                   </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"3rem"}}
                        className='px-2'/> 
                        <span>Rate & Review Product</span>

                    </Box>

                </Grid>
            </Grid>)}
           
           </Grid>
    </div>
  )
}

export default OrderDetails