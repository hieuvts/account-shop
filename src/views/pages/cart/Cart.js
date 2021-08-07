import { getCardItem, deleteAllItemInCart } from "../../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { cartColumns } from "../../shared/constants";
import { Link } from "react-router-dom";
import { sampleAccounts } from "../../shared/constants";
import CartItems from "./CartItems";
export default function Cart() {
  const totalCartItem = useSelector((state) => state.cart);
  const [selectedRowKeys, setSelectedRowKey] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardItem());
  }, [dispatch]);
  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKey(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const handleDeleteAll = () => {
    dispatch(deleteAllItemInCart());
  };
  const calcTotalPrice = () => {
    let price = 0;
    totalCartItem.map((item) => {
      if (Number.isInteger(parseInt(item.price))) {
        price += parseInt(item.price);
      }
    });
    return <span style={{ color: "blue", fontWeight: "500" }}>{price}</span>;
  };
  return (
    <>
      {sampleAccounts.length > 0 ? (
        <div>
          <CartItems />
        </div>
      ) : (
        <div>
          <h1>Your cart is empty</h1>
          <h1>
            Go back to
            <span>
              <a href="/"> home page </a>
            </span>
            and buy some
          </h1>
        </div>
      )}
    </>
  );
}
