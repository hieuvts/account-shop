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

export const gridItems = [
    {
      key: 1,
      title: "Card 1",
      rating: 3,
      content: {
        metaTitle: "Yasuo",
        imgSrc:
          "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/LoL-Patch-Notes-11-4-Article-Banner.jpg",
        imgAlt: "So 1",
      },
    },
    {
      key: 2,
      title: "Card 2",
      rating: 3,
      content: {
        metaTitle: "Ahri",
        imgSrc:
          "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8d1a3e286ee753cf/5f76a07faf58110efed2652d/Ahri_Skin01.jpg",
        imgAlt: "So 1",
      },
    },
    {
      key: 3,
      title: "Card 3",
      rating: 5,
      content: {
        metaTitle: "Annie",
        imgSrc:
          "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt58c3738da05c4ab0/5f7f707e9223840f03e064b8/annie_skin01.jpg",
        imgAlt: "So 1",
      },
    },
    {
      key: 4,
      title: "Card 4",
      rating: 1,
      content: {
        metaTitle: "Darius",
        imgSrc:
          "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt43e58e72bf11c2de/6010735b82548c0f8284c492/Darius_Skin01.jpg",
        imgAlt: "So 1",
      },
    },
    {
      key: 5,
      title: "Card5",
      rating: 2,
      content: {
        metaTitle: "Fiora",
        imgSrc:
          "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt90d49183649cacd5/5f7f7158a11c740ee7364b87/fiora_skin01.jpg",
        imgAlt: "So 1",
      },
    },
    {
      key: 6,
      title: "Card 6",
      rating: 3,
      content: {
        metaTitle: "Jax",
        imgSrc:
          "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt4e67d5c984816196/5f7f721bc1be730f80a84ab2/jax_skin01.jpg",
        imgAlt: "So 1",
      },
    },
  ];