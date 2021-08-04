import { getCardItem, deleteAllItemInCart } from "../../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { cartColumns } from "../../shared/constants";
import { Link } from "react-router-dom";

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
    console.log("goi ham calc");
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
      {totalCartItem.length > 0 ? (
        <>
          <Table
            rowSelection={rowSelection}
            columns={cartColumns}
            dataSource={totalCartItem}
          />
          <div
            style={{
              textAlign: "right",
              fontSize: "18px",
              justifyContent: "space-between",
            }}
          >
            <h2>Total price: {calcTotalPrice(totalCartItem)}</h2>
            <Button type="primary">Check out</Button>
            <Button type="secondary" danger onClick={handleDeleteAll}>
              Delete all
            </Button>
          </div>
        </>
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
