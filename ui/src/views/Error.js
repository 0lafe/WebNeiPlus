import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
    <h2 className='mb-1'>Error! Page Not Found!</h2>
          <Button.Ripple 
            tag={Link} 
            to={() => '/'} 
            color='primary' className='btn-sm-block mb-1'
          >
            Back to Home
          </Button.Ripple>
        </div>
  )
}
export default Error
