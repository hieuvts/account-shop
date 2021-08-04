import SignIn from "../pages/account/SignIn";
import Cart from "../pages/cart/Cart";
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
    },
    {
        path: '/cart',
        sidebar: () => <div>item3</div>,
        main: () => <div><Cart /></div>
    }
]

export const cartColumns = [
    {
      title: "Account ID",
      dataIndex: "accountID",
    },
    {
      title: "Game",
      dataIndex: "type",
    },
    {
      title: "Total Champion",
      dataIndex: "totalChampion",
    },
    {
      title: "Total Skin",
      dataIndex: "totalSkin",
    },
    {
      title: "Rank",
      dataIndex: "rank",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
  ];