import { Box, Typography } from '@mui/material'
import React from 'react'
import { LIGHT_GRAY } from '../colors'

const InspectionReport = () => {
  return (
    <>
      <Typography variant="h6" fontWeight={600} color="primary" mt={3}>
        Inspection Report
      </Typography>
      <Box border={1} borderColor={LIGHT_GRAY} p={3} borderRadius={2} mt={1}>
        
      </Box>
    </>
  )
}

export default InspectionReport