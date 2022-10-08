
import { memo } from "react";

import clsx from "clsx";
import style from './style.module.scss'
import { styled, alpha } from '@mui/material/styles';

import {
    Box,
    Typography,

} from "@mui/material";

import { useMediaQuery, useTheme } from "@mui/material";

import MenuCustom from "../../components/MenuCustom";
import ListProducts from "../../components/ListProducts";
import MenuScale from "../../components/MenuScale";
import Footer from "../../components/Footer";

import { HOMEPAGE_PROPERTIES } from "../../constants";
import { MENU_SCALE_PROPERTIES } from "../../constants";
import { MENU_PROPERTIES } from "../../constants";

import { useSearchParams } from "react-router-dom";

const ContainerContent = styled(Box)(({ theme }) => ({
    maxWidth: HOMEPAGE_PROPERTIES.MAX_WIDTH,

    display: 'flex',
    flexDirection: 'row',

    // gridTemplateRows: `${MENU_SCALE_PROPERTIES.WIDTH} auto`

}))

const ContainerListProductBox = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

}))

const MenuScaleBox = styled(Box)(({ theme }) => ({
    width: MENU_SCALE_PROPERTIES.WIDTH,
    height: MENU_SCALE_PROPERTIES.HEIGHT,
    top: MENU_SCALE_PROPERTIES.TOP,
    border: '2px solid rgb(0,0,0)',
    borderRadius: MENU_SCALE_PROPERTIES.BORDER_RADIUS,

    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    backgroundColor: theme.palette.common.white,

    paddingBottom: '8px',

    position: 'fixed',
}))

const MenuScaleTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2.4rem',
    width: '100%',

}))

const MenuScaleContent = styled(Box)(({ theme }) => ({
    overflowY: 'scroll',
    width: MENU_SCALE_PROPERTIES.WIDTH,
    height: '100%',
    
}))

function SearchProductPage(){
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md')) // return true if the width screen is bigger than 'md'
    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams)
    function showMenuScaleBox() {
        if (matches) {
            return (

                <MenuScaleBox className={clsx(style.Menu_Scale_Box)}>
                    <MenuScaleTitle>Menu</MenuScaleTitle>
                    <MenuScaleContent className={clsx(style.Menu_Scale_Content)}>
                        <MenuScale>

                        </MenuScale>
                    </MenuScaleContent>
                </MenuScaleBox>
            )
        }
    }

    return (
        <div className={clsx(style.Main)}>
           
                <MenuCustom />


            <ContainerContent sx={{
                margin: matches ? '60px auto 70px': '0 auto 0',
            }}>
                
                {showMenuScaleBox()}

                <ContainerListProductBox sx={{
                    padding: matches ? '0 0 0 12px' : '0',
                    marginLeft: matches ? '250px' : '0',
                    
                }}>
                    <ListProducts />
                    <ListProducts />
                    <ListProducts />
                    <Footer />

                </ContainerListProductBox>

            </ContainerContent>
            
        </div>
    )
}

export default memo(SearchProductPage)