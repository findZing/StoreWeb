import { createSlice } from "@reduxjs/toolkit";

function removeItem(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        listProducts: [{
            id: 1,
            name: 'Snack',
            price: '40000',
            amout: 1,
            img: 'https://cdn.tgdd.vn/Products/Images/3364/79708/bhx/snack-bi-do-vi-bo-nuong-oishi-goi-39g-202203281421475034.jpg',
            status: 'stocking',
        },
        {
            id: 2,
            name: 'Snack',
            price: '40000',
            amout: 1,
            img: 'https://cdn.tgdd.vn/Products/Images/3364/79708/bhx/snack-bi-do-vi-bo-nuong-oishi-goi-39g-202203281421475034.jpg',
            status: 'out of stock',

        },
        {
            id: 3,
            name: 'Snack',
            price: '40000',
            amout: 1,
            img: 'https://cdn.tgdd.vn/Products/Images/3364/79708/bhx/snack-bi-do-vi-bo-nuong-oishi-goi-39g-202203281421475034.jpg',
            status: 'stocking',

        },
        {
            id: 4,
            name: 'Snack',
            price: '40000',
            amout: 1,
            img: 'https://cdn.tgdd.vn/Products/Images/3364/79708/bhx/snack-bi-do-vi-bo-nuong-oishi-goi-39g-202203281421475034.jpg',
            status: 'stocking',

        },
        ],
        listPrices: [{
            id: 1,
            name: 'Snack',
            price: '40000',
            amout: 1,
            img: 'https://cdn.tgdd.vn/Products/Images/3364/79708/bhx/snack-bi-do-vi-bo-nuong-oishi-goi-39g-202203281421475034.jpg',
            status: 'stocking',
        },
        {
            id: 2,
            name: 'Snack',
            price: '40000',
            amout: 1,
            img: 'https://cdn.tgdd.vn/Products/Images/3364/79708/bhx/snack-bi-do-vi-bo-nuong-oishi-goi-39g-202203281421475034.jpg',
            status: 'out of stock',

        },
        {
            id: 3,
            name: 'Snack',
            price: '40000',
            amout: 1,
            img: 'https://cdn.tgdd.vn/Products/Images/3364/79708/bhx/snack-bi-do-vi-bo-nuong-oishi-goi-39g-202203281421475034.jpg',
            status: 'stocking',

        },
        {
            id: 4,
            name: 'Snack',
            price: '40000',
            amout: 1,
            img: 'https://cdn.tgdd.vn/Products/Images/3364/79708/bhx/snack-bi-do-vi-bo-nuong-oishi-goi-39g-202203281421475034.jpg',
            status: 'stocking',

        },
        ],
    },
    reducers: {
        setAmoutProduct: (state, action) => {
            // console.log(state.listProducts)
            for(let i = 0; i < state.listPrices.length; i++){
                if(state.listPrices[i].id ===  action.payload.id){
                    state.listPrices[i].amout = action.payload.amout
                    break
                }
            }
            // console.log(state.listPrices)

        }
        

    }
})

export const {
    setAmoutProduct

} = cartSlice.actions;

export default cartSlice.reducer