
import { Fragment, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress';

const LoadingSpinner = () => {
        const [isLoading, setIsLoading] = useState(false)

  return (
  <Fragment>
      {!isLoading ? null : 
      <Fragment>
        <div style={{
          content: '',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#ADADAD',
          opacity: 0,
          pointerEvents: 'auto',
        }} />
        <CircularProgress/>
      </Fragment>    
      }
  </Fragment>
  )
}

export default LoadingSpinner
