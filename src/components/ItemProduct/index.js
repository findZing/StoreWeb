
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    useMediaQuery,

} from  "@mui/material";
import { styled, alpha } from '@mui/material/styles';

import clsx from "clsx";
import style from './style.module.scss';

import { ITEM_PRODUCT_PROPERTIES } from "../../constants";
import { useTheme } from "@emotion/react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const img = 'https://cdn.tgdd.vn/Products/Images/3364/79708/bhx/snack-bi-do-vi-bo-nuong-oishi-goi-39g-202203281421475034.jpg'

const CardCustom = styled(Card)(({ theme }) => ({
    width: ITEM_PRODUCT_PROPERTIES.WIDTH,

}))

const CardContentCustom = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

}))

const CardActionCustom = styled(CardActions)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}))

const ButtonCustom = styled(Button)(({ theme }) => ({
    border: '1px solid #008848',
    fontSize: '1.4rem',
    color: '#008848',

    width: '100%',
}))

function ItemProduct({product}) {
    const matches = useMediaQuery('(max-width: 440px)')
    const navigate = useNavigate()

    function handleAddHistory() {
      navigate(`/products/${product}`)
    }

    return (
    <CardCustom sx={{
        width: matches ? '200px' : ITEM_PRODUCT_PROPERTIES.WIDTH,
    }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image= {img}
        className= {clsx(style.Img)}
        onClick = {handleAddHistory}
      />
      <CardContentCustom>
        <Typography gutterBottom variant="h5" component="div">
        Snack mì gà Enaak 30g
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            5.000
        </Typography>
      </CardContentCustom>
      <CardActionCustom>
        <ButtonCustom size="lg">Mua</ButtonCustom>
        
      </CardActionCustom>
    </CardCustom>
    )
}

export default memo(ItemProduct)