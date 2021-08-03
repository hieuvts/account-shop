import { Button, Col, Card, Rate } from "antd";
import { FaFlag } from "react-icons/fa";
const { Meta } = Card;

const priceStyle = {
  color: "red",
  fontWeight: "800",
  border: "solid",
  borderColor: "red",
  borderWidth: "0.5px",
  padding: "5px",
};

export default function CardAccount({
  accounts,
  minValue,
  maxValue,
  showModal,
}) {
  return (
    accounts.length > 0 &&
    accounts.slice(minValue, maxValue).map((item, index) => {
      return (
        <Col className="gutter-row" span={6} key={index}>
          <Card
            hoverable
            style={{ width: "100%", height: "auto" }}
            cover={
              <img
                alt="Images"
                src={item.imgPreview}
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
                    <h3>Country</h3>
                    <FaFlag />
                  </div>
                  <div className="card-meta-description-child">
                    <h3>Total champion</h3>
                    {item.totalChampion}
                  </div>
                  <div className="card-meta-description-child">
                    <h3>Total skin</h3>
                    <h3 style={{ color: "blue", fontWeight: "800" }}>
                      {item.totalSkin}
                    </h3>
                  </div>
                  <div className="card-meta-description-child">
                    <h3>{item.accountID}</h3>
                    <h3>{item.rank}</h3>
                  </div>
                  <div className="card-meta-description-child">
                    <div style={priceStyle}>{item.price}</div>
                    <Button
                      type="primary"
                      size="large"
                      onClick={() => console.log("button", item._id)}
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
