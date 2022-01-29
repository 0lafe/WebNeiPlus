import { Grid } from "@mui/material"
import React from "react"
import ItemIcon from "./ItemIcon"
import { Link } from 'react-router-dom';
import ItemBox from "../Shapes/ItemBox"

const ItemGrid = (props) => {
    const { items } = props

    return (
        <div>
            {items.map((row, index) => {
                return (
                    <Grid container columnSpacing={2} style={{paddingBottom: 10}} key={index}>
                        {row.map((item, index2) => {
                            return (
                                <Grid item key={(index2 + 1) * (index + 1)}>
                                    <ItemBox sx={{
                                        width: 100,
                                        height: 100,
                                        backgroundColor: 'gray',
                                        display: "flex",
                                        justifyContent:"center", 
                                        alignItems: "center"
                                    }}>
                                        {item && 
                                        <div>
                                            <Link to={`/items/${item.item.id}`}>
                                                <ItemIcon item={item.item} quantity={item.quantity}/>
                                            </Link>
                                        </div>}
                                    </ItemBox>
                                </Grid>
                            )
                        })}
                    </Grid>
                )
            })}
        </div>
    )
}

export default ItemGrid