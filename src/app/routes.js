import HomePage from "../pages/HomePage"
import ProductReviewPage from "../pages/ProductReviewPage"
import CartPage from "../pages/CartPage"
import SearchProductPage from "../pages/SearchProductPage"

const routes =[
    {
        path:'/',
        main: () => {return <HomePage />},
    },
    {
        path: '/products/:product',
        main: () => {return <ProductReviewPage />},
    },
    {
        path: '/cart',
        main: () => {return <CartPage />},
    },
    {
        path: '/search',
        main: () => {return <SearchProductPage />},
    },
    {
        path: '*',
        main: () => {return <>Not Found</>}
    }
]

export default routes