import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewDetails = () => {
  return (
    <div>
       <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              V
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-bold text-lg">Virat</p>
              <p className="opacity-70">June 21st</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly />
          <p>Nice Product...</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewDetails