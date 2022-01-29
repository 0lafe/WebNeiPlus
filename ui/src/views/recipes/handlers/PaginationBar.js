import React from "react"
import { Pagination } from "@mui/material"
import StyledBox from '@components/StyledBox'

const PaginationBar = ({ count, onChange }) => {
  return (
    <div style={{display: 'flex', justifyContent: "center", paddingBottom: 10}}>
      <StyledBox 
        sx={{
          width: "85%",
          height: 50,
          backgroundColor: 'gray',
          display: "flex",
          justifyContent:"center", 
          alignItems: "center"
      }}>
        <Pagination count={count} showFirstButton showLastButton onChange={(e, v) => onChange(v)}/>
      </StyledBox>
    </div>
  )
}
export default PaginationBar