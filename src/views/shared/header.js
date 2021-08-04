import { Menu, Badge, Layout } from "antd";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/google.svg";
import { getCardItem } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
const { Header } = Layout;
export default function HomeHeader() {
  const totalCartItem = useSelector((state) => state.cart);
  //   const dispatch = useDispatch();
  //   dispatch(getCardItem());
  return (
    <Header>
      <div className="logo">
        <img src={logo} alt="Home" width="50px" height="50px"></img>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        disabledOverflow="true"
      >
        <Menu.Item key={1} onClick={() => console.log("clicked Home")}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key={2} onClick={() => console.log("clicked Deposit")}>
          <Link to="/deposit">Deposit</Link>
        </Menu.Item>
        <Menu.Item key={3} onClick={() => console.log("clicked Contact")}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item key={4} onClick={() => console.log("clicked SignIn")}>
          <Link to="/signin"> SignIn</Link>
        </Menu.Item>
        <Menu.Item key={5} onClick={() => console.log("clicked cart")}>
          <Link to="/cart">
            <Badge count={totalCartItem.length} offset={[15, -5]}>
              <FaCartPlus style={{ color: "white" }} />
            </Badge>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
