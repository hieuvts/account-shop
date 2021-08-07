import { InputNumber, Modal, Button, Input, Divider } from "antd";
import { useState } from "react";
import { sampleAccounts } from "../../shared/constants";
import { moneyFormatter } from "../../shared/utility";

export default function CartItems({ totalCartItem, showModal }) {
  const calcTotalPrice = () => {
    let price = 0;
    totalCartItem.map((item) => {
      if (Number.isInteger(parseInt(item.price))) {
        price += parseInt(item.price);
      }
    });
    return (
      <span style={{ color: "red", fontWeight: "800", fontSize: "30px" }}>
        {moneyFormatter(price)}
      </span>
    );
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      ></div>
      <div className="cart-items">
        <div className="cart-items-col-left">
          {totalCartItem.map((account) => {
            return (
              <div className="cart-items-row">
                <img
                  src={account.imgPreview}
                  alt="cart"
                  width="50px"
                  height="50px"
                ></img>
                <p>{account.game}</p>
                <p>{moneyFormatter(account.price)}</p>
                <Button type="link" size="large" onClick={showModal}>
                  Remove
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-items-col-right">
          <div className="cart-items-col">
            <h2>Voucher/Coupon</h2>
            <div className="flex-row">
              <Input
                style={{ width: "70%" }}
                placeholder="Enter your code here..."
              ></Input>
              <Button type="secondary">Submit</Button>
            </div>
            <Divider style={{ borderColor: "grey" }} dashed />
          </div>
          <div className="cart-items-col">
            <h1 style={{ color: "black" }}>Cart summary</h1>
            <div className="flex-row">
              <h2>Total</h2>
              <h2 style={{ color: "red", fontSize: "20px", fontWeight: "800" }}>
                {calcTotalPrice()}
              </h2>
            </div>
            <Button type="primary" style={{ width: "100%" }}>
              PROCEED TO CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
