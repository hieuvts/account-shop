import { Row, Col, Checkbox } from "antd";

export default function CartItems() {
  return (
    <div className="cart-items">
      <div className="cart-items-col-left">
        <div className="cart-items-row">
        <Checkbox />
          <img
            src="https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt790135e9302ea702/5f9b3bdf8825282bcecdeaf1/akali_skin01.jpg"
            alt="cart"
            width="30px"
            height="30px"
          ></img>
          <p>Akali</p>
          <p>300.000 VND</p>
          <p>Delete</p>
          
        </div>
      </div>

      <div className="cart-items-col-right">
        <div className="cart-items-row">3</div>
        <div className="cart-items-row">4</div>
      </div>
    </div>
  );
}
