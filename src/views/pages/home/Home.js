import { Input, Select } from "antd";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccountAsync } from "../../../redux/accountSlice";
import CarouselBanner from "../../components/CarouselBanner";
import AccountFilter from "./Home.AccountFilter";
import AccountList from "./Home.AccountList";
import "./Home.scss";
const { Option } = Select;

export default function HomePage() {
  // const accounts = useSelector((state) => state.account);
  const accounts = [
    {
      game: "LOL",
      price: 3879624,
      imgPreview: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      totalChampion: 47,
      totalSkin: 10,
      rank: "Iron",
      _id: "610b958b3ea72956b33760de",
      __v: 0,
    },
    {
      game: "LOL",
      price: 1602282,
      imgPreview: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      totalChampion: 73,
      totalSkin: 44,
      rank: "Iron",
      _id: "610b958b3ea72956b33760df",
      __v: 0,
    },
    {
      game: "LOL",
      price: 321563,
      imgPreview: "http://dummyimage.com/300x300.png/dddddd/000000",
      totalChampion: 71,
      totalSkin: 85,
      rank: "Iron",
      _id: "610b958b3ea72956b33760e0",
      __v: 0,
    },
    {
      game: "LOL",
      price: 4655748,
      imgPreview: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      totalChampion: 60,
      totalSkin: 8,
      rank: "Iron",
      _id: "610b958b3ea72956b33760e1",
      __v: 0,
    },
    {
      game: "LOL",
      price: 1851296,
      imgPreview: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      totalChampion: 75,
      totalSkin: 98,
      rank: "Iron",
      _id: "610b958b3ea72956b33760e2",
      __v: 0,
    },
  ];
  const dispatch = useDispatch();

  const [priceSort, setPriceSort] = useState("az");
  const [dateSort, setDateSort] = useState("oldest");
  const [searchInput, setSearchInput] = useState(" ");

  useEffect(() => {
    dispatch(getAccountAsync());
  }, [dispatch, priceSort, dateSort]);
  // useEffect(() => {
  //   dispatch(sortAccountByPrice(priceSort));
  // }, [priceSort, dispatch]);
  // useEffect(() => {
  //   dispatch(sortAccountByDate(dateSort));
  // }, [dateSort, dispatch]);
  const fuse = new Fuse(accounts, {
    keys: ["price"],
    includeScore: true,
    threshold: 1,
  });
  const searchResult = fuse.search(!searchInput ? " " : searchInput);
  console.log("searchResult ", searchResult);


  const handlePriceSort = (value) => {
    setPriceSort(value);
  };
  const handleDateSort = (value) => {
    setDateSort(value);
  };
  return (
    <div>
      <CarouselBanner />
      <div className="account-filter">
        <h2>Filter</h2>
        <h2>Search input: {searchInput}</h2>
        <Input.Group compact className="input-group">
          <Select defaultValue="Price filter" onChange={handlePriceSort}>
            <Option value="az">High to low</Option>
            <Option value="za">Low to high</Option>
          </Select>
          <Select defaultValue="Date filter" onChange={handleDateSort}>
            <Option value="latestAccount">Latest</Option>
            <Option value="oldestAccount">Oldest</Option>
          </Select>
          <Input
            style={{ width: "80%" }}
            defaultValue={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </Input.Group>
      </div>
      <AccountList accounts={searchResult} />
    </div>
  );
}
