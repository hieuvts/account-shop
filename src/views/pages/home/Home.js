import "./Home.scss";
import CarouselBanner from "../../components/CarouselBanner";
import AccountFilter from "./Home.AccountFilter";
import { useState } from "react";
import AccountList from "./Home.AccountList";

export default function HomePage() {
  return (
    <div>
      <CarouselBanner />
      <AccountFilter />
      <AccountList />
    </div>
  );
}
