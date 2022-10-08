
import { memo, useEffect } from "react";

import clsx from "clsx";
import style from './style.module.scss'

import { styled, alpha } from '@mui/material/styles';

import { Box, Button, Typography } from "@mui/material";

import MenuCustom from "../../components/MenuCustom";

import { PRODUCT_REVIEW_PAGE_PROPERTIES } from "../../constants";
import { MENU_SCALE_PROPERTIES } from "../../constants";
import { MENU_PROPERTIES } from "../../constants";

import Footer from "../../components/Footer";
import MenuScale from "../../components/MenuScale";

import { useParams } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import ImageCarousel from "../../components/ImageCarousel";

const img = ['https://cdn.tgdd.vn/Products/Images/3364/79708/bhx/snack-bi-do-vi-bo-nuong-oishi-goi-39g-202203281421475034.jpg']

const ContainerContent = styled(Box)(({ theme }) => ({
    maxWidth: PRODUCT_REVIEW_PAGE_PROPERTIES.MAX_WIDTH,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

    // gridTemplateRows: `${MENU_SCALE_PROPERTIES.WIDTH} auto`

}))

const ContainerProductBox = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

}))

const ContainerProductReviewBox = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',

    backgroundColor: theme.palette.common.white
}))

const ContainerProductDetailBox = styled(Box)(({ theme }) => ({
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
}))

const ProductReviewBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
}))

const MenuScaleBox = styled(Box)(({ theme }) => ({
    maxWidth: MENU_SCALE_PROPERTIES.WIDTH,
    width: '100%',
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
    maxWidth: MENU_SCALE_PROPERTIES.WIDTH,
    width: '100%',
    height: '100%',

}))

const ButtonCustom = styled(Button)(({ theme }) => ({
    width: '80%',
    height: '50px',
    color: 'white',
    backgroundColor: '#008848',
    fontSize: '1.8rem',
    borderRadius: '8px',
    margin: '12px auto',

    '&:hover': {
        backgroundColor: '#008848',
    }
}))


function ProductReviewPage() {

    const { product } = useParams()
    console.log(product)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md')) // return true if the width screen is bigger than 'md'

    function showMenuScaleBox() {
        if (matches) {
            return (

                <MenuScaleBox className={clsx(style.Menu_Scale_Box)}>
                    <MenuScaleTitle>Menu</MenuScaleTitle>
                    <MenuScaleContent className={clsx(style.Menu_Scale_Content)}>
                        <MenuScale />
                    </MenuScaleContent>
                </MenuScaleBox>
            )
        }
    }
    useEffect(() => {
        document.title = product
    })

    return (
        <div className={clsx(style.Main)}>
            <MenuCustom />

            <ContainerContent sx={{
                margin: matches ? '60px auto 70px' : '50px auto 0',
            }}>
                {showMenuScaleBox()}

                <ContainerProductBox sx={{
                    padding: matches ? '0 0 0 12px' : '0',
                    marginLeft: matches ? '250px' : '0',

                }}>
                    <ContainerProductReviewBox sx={{
                        flexDirection: matches ? 'row' : 'column',
                    }}>
                        <ProductReviewBox>
                            <ImageCarousel height={405} width={540} imgs={img} loop={false} normal={false} />
                        </ProductReviewBox>
                        <ContainerProductDetailBox sx={{
                            padding: matches ? '0 24px' : '0',
                            width: '100%',

                        }}>
                            <Typography sx={{ fontSize: '2rem', fontWeight: '400', display: 'flex', justifyContent: 'flex-start' }}>{product}</Typography>
                            <Typography sx={{ fontSize: '2.4rem', fontWeight: '600', color: 'red', display: 'flex', justifyContent: 'flex-start' }}>40.000</Typography>
                            <ButtonCustom>Mua Ngay</ButtonCustom>
                            <Typography sx={{ fontSize: '1.4rem', fontStyle: 'italic', color: '#999' }}>(Khuyến mãi chỉ áp dụng mua Online)</Typography>
                        </ContainerProductDetailBox>
                    </ContainerProductReviewBox>
                    <Footer />

                </ContainerProductBox>
            </ContainerContent>

        </div>
    )
}

export default memo(ProductReviewPage)