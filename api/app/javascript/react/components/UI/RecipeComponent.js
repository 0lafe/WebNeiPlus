import React from "react"
import ItemGrid from "./ItemGrid"
import { Grid } from "@mui/material"
import ItemIcon from "./ItemIcon";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import ItemBox from "../Shapes/ItemBox"

const RecipeComponent = (props) => {
    const { recipe } = props

    return (
        <div style={{display: 'flex', justifyContent:"center", paddingBottom: 30}}>
            <Grid container columnSpacing={2} alignItems="center">
                <Grid item>
                    <ItemGrid items={recipe.formatted_inputs}/>
                </Grid>
                <Grid item>
                    <ItemBox sx={{
                                width: 100,
                                height: 100,
                                backgroundColor: 'gray',
                                display: "flex",
                                justifyContent:"center", 
                                alignItems: "center"
                            }}>
                        <ArrowForwardIcon />
                    </ItemBox>
                </Grid>
                <Grid item>
                    <ItemBox sx={{
                                width: 100,
                                height: 100,
                                backgroundColor: 'gray',
                                display: "flex",
                                justifyContent:"center", 
                                alignItems: "center"
                        }}>
                        <Link to={`/items/${recipe.outputs[0].item.id}`}>
                            <ItemIcon item={recipe.outputs[0].item} quantity={recipe.outputs[0].quantity}/>
                        </Link>
                    </ ItemBox>
                </Grid>
            </Grid>
        </div>
    )
}

export default RecipeComponent