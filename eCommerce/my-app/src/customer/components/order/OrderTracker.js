import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const OrderTracker = ({active}) => {

    const steps=[
        "Placed",
        "OrderConfirmed",
        "Shipped",
        "Out For Delivery",
        "Delivered"]
  return (
    <div className='w-full'>
        <Stepper activeStep={active} alternativeLabel>
          {steps.map((label)=><Step>
            <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{label}</StepLabel>
          </Step>)}         
        </Stepper>

    </div>
  )
}

export default OrderTracker