import SignIn from "../pages/account/SignIn";
import ContactPage from "../pages/contact/Contact";
import DepositPage from "../pages/deposit/Deposit";
import HomePage from "../pages/home/Home";

export const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>item1</div>,
        main: () => <div> <HomePage /></div>
    },
    {
        path: '/deposit',
        sidebar: () => <div>item2</div>,
        main: () => <div> <DepositPage /></div>
    },
    {
        path: '/contact',
        sidebar: () => <div>item3</div>,
        main: () => <div><ContactPage /></div>
    },
    {
        path: '/account',
        sidebar: () => <div>item3</div>,
        main: () => <div><SignIn /></div>
    }
]