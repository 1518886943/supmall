import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import('../views/home/Home')
const Category = () =>
    import('../views/category/CateGory')
const Cart = () =>
    import('../views/cart/Cart')
const ProFile = () =>
    import('../views/profile/ProFile')

Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: "/home"
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: ProFile
    },
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router;