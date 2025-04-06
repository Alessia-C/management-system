import { Box, CircularProgress } from '@mui/material'
import React from 'react'

import classes from './loading.module.css'

const LoadingComponent = () => {
  return (
    <Box className={classes.wrapLoading}>
      <CircularProgress size="5rem" />
    </Box>
  )
}

export default LoadingComponent