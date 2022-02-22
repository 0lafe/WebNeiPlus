import StyledBox from '@components/StyledBox'
import { Link } from 'react-router-dom'

const TopBanner = ({handlers, searchType}) => {

  return (
    <div style={{display: 'flex', justifyContent: "center", paddingBottom: 10, paddingTop: 10}}>
      <StyledBox 
        sx={{
          width: "85%",
          height: 50,
          backgroundColor: 'gray',
          display: "flex",
          justifyContent:"center", 
          alignItems: "center"
        }}>
          {handlers.map(handler => {
            return (
              <Link to={`/recipes/handler/${handler.id}`}>
                <span style={{margin: 20}}>
                    {handler.name}
                </span>
              </Link>
            )
          })}
      </StyledBox>
    </div>
  )
}

export default TopBanner