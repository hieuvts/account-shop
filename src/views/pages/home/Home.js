import { Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccountAsync } from "../../../redux/accountSlice";
import CarouselBanner from "../../components/CarouselBanner";
import AccountList from "./Home.AccountList";
import "./Home.scss";
import { sampleAccounts } from "../../shared/constants";
const { Option } = Select;

export default function HomePage() {
  const dispatch = useDispatch();
  const [priceSort, setPriceSort] = useState("az");
  const [searchInput, setSearchInput] = useState("");
  const regex = new RegExp(`(?=.*\\b${searchInput}).*`, "i");
  useEffect(() => {
    dispatch(getAccountAsync());
  }, [dispatch]);
  const accounts = useSelector((state) => state.account);

  function handleSearch() {
    return sampleAccounts.filter((ele) => ele.game.match(regex));
  }
  const searchResult = handleSearch();
  const handlePriceSort = (value) => {
    setPriceSort(value);
  };
  if (priceSort === "az") {
    console.log("triger az price");
    searchResult.sort((a, b) => b.price - a.price);
  } else {
    console.log("triger za price");
    searchResult.sort((a, b) => a.price - b.price);
  }
  return (
    <div>
      <CarouselBanner />
      <div className="account-filter">
        <div className="account-filter-child">
          <div style={{ minWidth: "20%" }}>
            <h2>Search: </h2>
          </div>
          <Input
            style={{ width: "40%" }}
            defaultValue={searchInput}
            placeholder="Search by game..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="account-filter-child">
          <div style={{ minWidth: "20%" }}>
            <h2>Sort by price: </h2>
          </div>

          <Select
            style={{ width: "40%" }}
            defaultValue="az"
            onChange={handlePriceSort}
          >
            <Option value="az">High to low</Option>
            <Option value="za">Low to high</Option>
          </Select>
        </div>
      </div>
      <AccountList accounts={searchResult} />
    </div>
  );
}
