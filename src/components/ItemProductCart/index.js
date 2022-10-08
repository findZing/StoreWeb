

import clsx from "clsx";
import style from './style.module.scss'
import { styled, alpha } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { memo } from "react";

import { 
    setAmoutProduct,

} from "../../reducers/cart";

import { Box, Button, ButtonBase, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ItemProductBox = styled(Box)(({ theme }) => ({
    width: '100%-16px',
    padding: '8px 8px',

    borderBottom: '1px solid #ccc',
}))

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const TextBox = styled(Typography)(({ theme }) => ({
    fontSize: '1.4rem',
    display: 'flex',
    justifyContent: 'flex-start',
}))

const BtnBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',

}))

const BtnCustom = styled(IconButton)(({ theme }) => ({
    width: '30px',
    height: '30px',
    border: '1px solid #ccc',
    borderRadius: '0px'
}))

const InputCustom = styled('input')(({ theme }) => ({
    fontSize: '1.4rem',
    height: '28px',
    width: '28px',
    border: '1px solid #ccc',
    textAlign: 'center',
    outline: 'none',

    '&[type=text]:focus': {
        border: '1px solid #ccc',
    }

}))

function ItemProductCart({item}) {
    const [amout, setAmout] = useState(1)
   

    const dispatch = useDispatch()

    const onChangeText = (e) => {
        e.preventDefault();

        if(e.target.value === '' || parseInt(e.target.value) < 0)
        {
            setAmout(0)
        }
        else {
            setAmout(parseInt(e.target.value))
            
            
        }
    }

    const onClickAdd = (e) => {
        setAmout(state => state + 1)
        
    }

    const onClickMinus = (e) => {
        if(amout - 1 < 0)
        {
            setAmout(0)
        }
        else {
            setAmout(state => state - 1)
            
            
        }
    }

    
    useEffect(() => {
        const id = item.id
        dispatch(setAmoutProduct({id, amout}))
        
    },[amout])

    console.log('re-render', item.id)
    return (
        <ItemProductBox>
                <Grid container>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt src={item.img} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction='column' spacing={2}>
                            <Grid item xs>
                                <TextBox gutterBottom variant="subtitle1" component='div'>{item.name}</TextBox>
                                {(amout !== 1 ) && (<TextBox gutterBottom variant="subtitle1" component='div'>{item.price}</TextBox>)}
                                <TextBox variant="body2" color='text.secondary'>HSD: Còn 1 năm</TextBox>
                            </Grid>
                            <Grid item container>
                                <BtnBox>
                                    <BtnCustom onClick={onClickMinus}>
                                        <RemoveIcon />
                                    </BtnCustom>
                                    <InputCustom type='text' value={amout} onChange={onChangeText} />
                                    <BtnCustom onClick={onClickAdd}>
                                        <AddIcon />
                                    </BtnCustom>
                                </BtnBox>
                                <TextBox sx={{ cursor: 'pointer', display: ' flex', alignItems: 'center', marginLeft: '8px'}} variant="body2">Xóa</TextBox>

                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextBox variant='subtitle1' component='div' sx={{fontWeight: 500}}>
                                {parseInt(item.price)*parseInt(amout)}
                            </TextBox>
                        </Grid>
                    </Grid>
                </Grid>
            </ItemProductBox>
    )
}

export default memo(ItemProductCart);