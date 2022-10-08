
import { Button, Grid, Typography, useMediaQuery, Box, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { styled, alpha } from '@mui/material/styles';

import clsx from "clsx";
import style from './style.module.scss';
import { useTheme } from "@emotion/react";

import { memo, useEffect, useRef, useState } from "react";

import ItemProduct from "../ItemProduct"

const ContainerBox = styled(Box)(({ theme }) => ({
    width: '100%',
    marginTop: '12px',

    borderBottom: '1px solid #ccc',
}))

const HeaderBox = styled(Box)(({ theme }) => ({
    height: '50px',
    display: 'flex',
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
    marginBottom: theme.spacing(1),
    backgroundColor: '#6f9972',

}))


const HeaderTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    marginLeft: theme.spacing(1),
}))

const ListBox = styled(Box)(({ theme }) => ({
    width: '40%',
    height: '50px',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing(1),

}))

const ListOptionsBox = styled(Box)(({ theme }) => ({
    width: '100%',
    overflowX: 'scroll',
    height: '50px',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

}))

const ItemOptionBox = styled(Button)(({ theme }) => ({
    border: '1px solid #008848',
    borderRadius: '8px',

    backgroundColor: 'rgba(255, 255, 255)',
    color: '#008848',
    fontSize: '1.2rem',
    margin: '0 4px',
    height: '35px',
    width: '64px',

}))

const ContainerListProductBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',


}))

const ContainerButtonBox = styled(Box)(({ theme }) => ({
    margin: '16px 0 32px',
    height: '30px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',

}))

const ButtonCustom = styled(Button)(({ theme }) => ({
    width: '150px',

    border: '1px solid #008848',
    fontSize: '1.4rem',
    color: '#008848',

}))
function ListProducts() {
    const listBox = useRef(null)
    const [scrollLeft, setScrollLeft] = useState(0)

    const theme = useTheme()
    const matches = useMediaQuery('(min-width: 1280px)')
    const listOptions = ['Thịt', 'Cá', 'Sườn', 'Xúc xích', 'Gà', 'Thịt băm', 'Gà']
    const listProducts = ['Thịt', 'Cá', 'Sườn', 'Xúc xích', 'Gà', 'Thịt băm', 'Gà','Thịt', 'Cá', 'Sườn', 'Xúc xích', 'Gà', 'Thịt băm', 'Gà']
    const [numberShow, setNumberShow] = useState(5)

    function showListOptions() {

        return listOptions.map((option, index) => {
            return (
                <ItemOptionBox>{option}</ItemOptionBox>
            )
        })
    }

    function itemProduct(product) {
        return (
            <Grid item xs={12} md={4} sm={6} lg={3}>
                    <ItemProduct product={product} />
                </Grid>
        )
    }

    function showListProducts() {

        // return listProducts.map((product, index) => {
        //     return (
        //         <Grid item xs={6} md={4} sm={6} lg={3}>
        //             <ItemProduct product={product} />
        //         </Grid>
        //     )
        // })

        let result = []
        for(let i = 0; i < numberShow; i++) {
            result.push(itemProduct(listProducts[i]))
        }   
        return result
    }

    

    return (
        <ContainerBox>
            <HeaderBox>
                <HeaderTitle>Thịt cá</HeaderTitle>

                <ListBox>
                    {(matches && listOptions.length < 6) || (<IconButton  className={clsx(style.Btn, {
                        [style.Blur]: scrollLeft === 0,
                    })}>
                        <ArrowBackIosIcon />
                    </IconButton>)}
                    <ListOptionsBox className={clsx(style.Box)} ref={listBox}>
                        {showListOptions()}
                    </ListOptionsBox>
                    {(matches && listOptions.length < 6) || (<IconButton className={clsx(style.Btn, {
                        [style.Blur]: scrollLeft > (listOptions.length - 5) * 64,
                    })}>
                        <ArrowForwardIosIcon />
                    </IconButton>)}
                </ListBox>
            </HeaderBox>
            <ContainerListProductBox>
                <Grid container spacing={1} >
                    {showListProducts()}
                </Grid>
            </ContainerListProductBox>

            <ContainerButtonBox>
                <ButtonCustom onClick={() => {
                    if(numberShow + 4 > listProducts.length) { setNumberShow(listProducts.length); }
                    else setNumberShow(numberShow + 4)
                }}>Add More {listProducts.length - numberShow}</ButtonCustom>
            </ContainerButtonBox>

        </ContainerBox>
    )
}

export default memo(ListProducts)