import SignIn from "../pages/account/SignIn";
import Cart from "../pages/cart/Cart";
import ContactPage from "../pages/contact/Contact";
import DepositPage from "../pages/deposit/Deposit";
import HomePage from "../pages/home/Home";

export const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>item1</div>,
    main: () => (
      <div>
        <HomePage />
      </div>
    ),
  },
  {
    path: "/deposit",
    sidebar: () => <div>item2</div>,
    main: () => (
      <div>
        <DepositPage />
      </div>
    ),
  },
  {
    path: "/contact",
    sidebar: () => <div>item3</div>,
    main: () => (
      <div>
        <ContactPage />
      </div>
    ),
  },
  {
    path: "/signin",
    sidebar: () => <div>item3</div>,
    main: () => (
      <div>
        <SignIn />
      </div>
    ),
  },
  {
    path: "/cart",
    sidebar: () => <div>item3</div>,
    main: () => (
      <div>
        <Cart />
      </div>
    ),
  },
];

export const cartColumns = [
  {
    title: "Game",
    dataIndex: "game",
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

export const sampleAccounts = [
  {
    game: "LOL",
    price: 1717645,
    imgPreview:
      "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt790135e9302ea702/5f9b3bdf8825282bcecdeaf1/akali_skin01.jpg",
    totalChampion: 18,
    totalSkin: 31,
    rank: "Bronze",
  },
  {
    game: "LOL",
    price: 8106739,
    imgPreview:
      "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt894103142614fcaf/5f7f718e0687250f6aedc1b3/garen_skin01.jpg",
    totalChampion: 89,
    totalSkin: 32,
    rank: "Diamond",
  },
  {
    game: "LOL",
    price: 3993986,
    imgPreview:
      "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/LoL-Patch-Notes-11-4-Article-Banner.jpg",
    totalChampion: 30,
    totalSkin: 65,
    rank: "Gold",
  },
  {
    game: "LOL",
    price: 3230709,
    imgPreview:
      "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt13ca85cdecaf53d2/6010ae6b3c38be10329e3df3/Draven_Skin01.jpg",
    totalChampion: 10,
    totalSkin: 16,
    rank: "Challenger",
  },
  {
    game: "LOL",
    price: 7646953,
    imgPreview:
      "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/LoL-Patch-Notes-11-4-Article-Banner.jpg",
    totalChampion: 62,
    totalSkin: 36,
    rank: "Diamond",
  },
];
