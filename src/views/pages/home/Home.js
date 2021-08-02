import "./Home.scss";
import CarouselBanner from "../../components/CarouselBanner";
import AccountFilter from "./Home.AccountFilter";
import { useState, useEffect } from "react";
import AccountList from "./Home.AccountList";
import { useDispatch, useSelector } from "react-redux";
import { getAccountAsync } from "../../../redux/accountSlice";

export default function HomePage() {
  const accounts = useSelector((state) => state.account);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccountAsync());
  }, [dispatch]);
  console.log("home.js", accounts.map((ele) => ele.type));
  return (
    
    <div>
      <CarouselBanner />
      <AccountFilter />
      <AccountList accounts={accounts}/>
    </div>
  );
}
