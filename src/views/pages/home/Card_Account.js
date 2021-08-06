import { Button, Col, Card, Rate } from "antd";
import { FaFlag } from "react-icons/fa";
import { addItemToCart } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";
const { Meta } = Card;

const priceStyle = {
  color: "red",
  fontWeight: "800",
  border: "solid",
  borderColor: "red",
  borderWidth: "0.5px",
  padding: "5px",
};
const accoutDetailStyle = { color: "blue", fontWeight: "800" };
var moneyFormatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
export default function CardAccount({
  accounts,
  minValue,
  maxValue,
  showModal,
}) {
  const dispatch = useDispatch();
  return (
    accounts.length > 0 &&
    accounts.slice(minValue, maxValue).map((element, index) => {
      return (
        <Col className="gutter-row" span={6} key={index}>
          <Card
            hoverable
            style={{ width: "90%", height: "auto", maxHeight: "1000px"}}
            cover={
              <img
                alt="Images"
                src={element.imgPreview}
                height="300px"
                onClick={() => {
                  showModal();
                }}
              />
            }
          >
            <Meta
              title={
                <Rate disabled defaultValue="3" style={{ fontSize: "15px" }} />
              }
              description={
                <div className="card-meta-description">
                  <div className="card-meta-description-child">
                    <h2>Rank</h2>
                    <h2 style={accoutDetailStyle}>{element.rank}</h2>
                  </div>
                  <div className="card-meta-description-child">
                    <h2>Total champion</h2>
                    <h2 style={accoutDetailStyle}>{element.totalChampion}</h2>
                  </div>
                  <div className="card-meta-description-child">
                    <h2>Total skin</h2>
                    <h2 style={accoutDetailStyle}>{element.totalSkin}</h2>
                  </div>
                  <div className="card-meta-description-child">
                    <h2>{element.accountID}</h2>
                    <h2 style={accoutDetailStyle}>{element.rank}</h2>
                  </div>
                  <div className="card-meta-description-child">
                    <div style={priceStyle}>{moneyFormatter.format(element.price)}</div>
                    <Button
                      type="primary"
                      size="large"
                      onClick={() => {
                        console.log("clicked btn BUY");
                        dispatch(addItemToCart(element));
                      }}
                    >
                      Buy
                    </Button>
                  </div>
                </div>
              }
            />
          </Card>
        </Col>
      );
    })
  );
}
