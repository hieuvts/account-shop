import "./Home.scss";
import CarouselBanner from "../../components/CarouselBanner";
import AccountFilter from "./Home.AccountFilter";
import { useState, useEffect } from "react";
import AccountList from "./Home.AccountList";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccountAsync,
  sortAccountByPrice,
  sortAccountByDate,
} from "../../../redux/accountSlice";

export default function HomePage() {
  const accounts = useSelector((state) => {
    // console.log("home.js selector ok ", state);
    return state.account;
  });
  const dispatch = useDispatch();

  const [priceSort, setPriceSort] = useState("az");
  const [dateSort, setDateSort] = useState("oldest");

  useEffect(() => {
    dispatch(getAccountAsync());
  }, [dispatch, priceSort, dateSort]);
  // useEffect(() => {
  //   dispatch(sortAccountByPrice(priceSort));
  // }, [priceSort, dispatch]);
  // useEffect(() => {
  //   dispatch(sortAccountByDate(dateSort));
  // }, [dateSort, dispatch]);

  return (
    <div>
      <CarouselBanner />
      <AccountFilter
        priceSort={priceSort}
        setPriceSort={setPriceSort}
        dateSort={dateSort}
        setDateSort={setDateSort}
      />
      <AccountList accounts={accounts} />
    </div>
  );
}
