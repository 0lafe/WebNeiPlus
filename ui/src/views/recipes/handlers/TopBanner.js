import StyledBox from '@components/StyledBox'

const TopBanner = ({name}) => {
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
      <span>
        {name}
      </span>
      </StyledBox>
    </div>
  )
}

export default TopBanner