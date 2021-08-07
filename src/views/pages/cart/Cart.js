import { getCardItem, deleteAllItemInCart } from "../../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Divider, Button, Modal } from "antd";
import { cartColumns } from "../../shared/constants";
import { Link } from "react-router-dom";
import { sampleAccounts } from "../../shared/constants";
import CartItems from "./CartItems";
export default function Cart() {
  const totalCartItem = useSelector((state) => state.cart);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCardItem());
  }, [dispatch]);

  const h1Style = {
    color: "black",
  };
  const handleDeleteAll = () => {
    dispatch(deleteAllItemInCart());
  };
  const showModal = () => {
    console.log("1");
    setIsModalVisible(true);
  };

  const handleOk = () => {
    handleDeleteAll();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    console.log("1");
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Remove from cart?</p>
      </Modal>
      <Divider style={{ fontSize: "50px" }}>SHOPPING CART</Divider>

      {totalCartItem.length > 0 ? (
        <div>
          <Button
            style={{ marginLeft: "20px" }}
            type="primary"
            size="large"
            danger
            onClick={showModal}
          >
            Remove all
          </Button>
          <CartItems totalCartItem={totalCartItem} showModal={showModal} />
        </div>
      ) : (
        <div style={{textAlign: "center"}}>
          <h1 style={h1Style}>Your cart is empty</h1>
          <h1 style={h1Style}>
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
