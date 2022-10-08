

import clsx from "clsx";
import style from './style.module.scss'
import { styled, alpha } from '@mui/material/styles';
import { useSelector } from "react-redux";

import MenuCustom from "../../components/MenuCustom";
import ItemProductCart from "../../components/ItemProductCart";

import { Box, Button, ButtonBase, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const ContainerBox = styled(Box)(({ theme }) => ({
    maxWidth: '640px',
    width: '100%',
    margin: '60px auto 0',

}))

const ListProductsBox = styled(Box)(({ theme }) => ({
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.common.white,

}))

const PaymentBox = styled(Box)(({ theme }) => ({
    width: '100%-16px',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '8px 8px',

}))

const LabelBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',

}))

const TextNumber = styled(Typography)(({ theme }) => ({
    width: '150px',
    fontSize: '1.4rem',

    textAlign: 'right',

}))

const BtnTicket = styled(Button)(({ theme }) => ({
    padding: '5px 9px',
    border: '1px solid #0081bd',
    borderRadius: '5px',
    marginTop: '5px',
    fontSize: '1.4rem',
    fontWeight: '400',
    textTransform :'none',

}))

const BtnPay = styled(Button)(({ theme }) => ({
    width: '100%',
    height: '48px',
    margin: '5px 0px 10px',
    padding: '15px 20px',
    fontSize: '1.6rem',
    fontWeight: 'bold',

    backgroundColor: '#008848',
    color: theme.palette.common.white,

    '&:hover': {
    backgroundColor: '#008848',

    }
}))

function CartPage() {

    const listProducts = useSelector(state => state.cart.listProducts)
    const listPrices = useSelector(state => state.cart.listPrices)
    
    function showListProducts() {

        return listProducts.map((item, index) => {
            return <ItemProductCart item={item} key={index} />;
        })
    }

    function showTotalPrice() {
        let total = 0
        console.log(listPrices)

        listPrices.map((item, index) => {
            total += item.amout*parseInt(item.price)
        })
        return total
    }
    return (
        <div className={clsx(style.Main)}>
            <MenuCustom />

            <ContainerBox >
                <ListProductsBox>
                    <Typography sx={{
                        fontSize: '1.6rem',
                        fontWeight: '500',
                        display: 'flex',
                        flexDirection: 'flex-start',

                        margin: '8px 8px'
                    }}>Giỏ hàng của bạn</Typography>
                    <Divider />
                    {showListProducts()}
                </ListProductsBox>

                <PaymentBox>
                    <LabelBox>
                        <TextNumber>Tiền hàng:</TextNumber>
                        <TextNumber>{showTotalPrice()}</TextNumber>
                    </LabelBox>
                    <LabelBox>
                        <TextNumber>Phí giao hàng:</TextNumber>
                        <TextNumber>15000</TextNumber>
                    </LabelBox>
                    <BtnTicket startIcon={<ConfirmationNumberIcon />}> Dùng phiếu mua hàng </BtnTicket>
                    <BtnPay>Đặt hàng</BtnPay>
                    <Button sx={{width: '200px', fontSize: '1.6rem', fontWeight: '400', margin: '5px auto 0px'}}>Xóa giỏ hàng </Button>
                </PaymentBox>
            </ContainerBox>
        </div>
    )
}

export default CartPage