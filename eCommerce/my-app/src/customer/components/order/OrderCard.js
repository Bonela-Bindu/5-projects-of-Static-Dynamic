import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {

    const navigate=useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg  shadow-black hover:shadow-2xl'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>

            <div className='[flex cursor-pointer'>
                <img  src="https://assets.ajio.com/medias/sys_master/root/20221219/iOvy/63a09b08f997ddfdbdddde4a/-473Wx593H-441693250-black-MODEL.jpg" className='w-[5rem] h-[5rem]' alt=""/>
                <div className='ml-5 space-y-2'>
                    <p className=''>Men Slim Mid Jeans</p>
                    <p className='opacity-50 text-xs font-semibold'>size:M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color:Black</p>

                </div>

            </div>

        </Grid>

        <Grid item xs={4}>
            {true && <div>
                <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-500 mr-2 text-lg'/>
                    <span>
                        Delivered on March 21st
                    </span>
                </p>

                <p className='text-base'>
                    Your Item Has Been Delivered
                </p>
                </div>}
                {false && <p>
                    <span>
                        Expected Delivery on April 21st
                    </span>
                    </p>}

        </Grid>

      </Grid>

    </div>
  )
}

export default OrderCard