import { Row, Col, Modal, Button, Card, Rate } from "antd";
import { FaFlag } from "react-icons/fa";
import { useState } from "react";
import { gridItems } from "../../shared/constants";
const { Meta } = Card;

export default function AccountList() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal
        title={modalTitle}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="card-meta-description">
          <div className="card-meta-description-child">
            <h3>Country</h3>
            <FaFlag />
          </div>
          <div className="card-meta-description-child">
            <h3>Total friends</h3>
            <h3>100</h3>
          </div>
          <div className="card-meta-description-child">
            <h3>Created at</h3>
            <h3 style={{ color: "blue", fontWeight: "800" }}>01/08/2021</h3>
          </div>
          <div className="card-meta-description-child">
            <h3>blah...blah</h3>
            <h3>blah...blah</h3>
          </div>
        </div>
      </Modal>
      <div className="account-list">
        <h2>Account</h2>
        <Row gutter={[16, 24]} style={{ textAlign: "center" }}>
          {gridItems.map((item, index) => {
            return (
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  style={{ width: "100%", height: "auto" }}
                  cover={
                    <img
                      alt={item.content.imgAlt}
                      src={item.content.imgSrc}
                      height="300px"
                      onClick={() => {
                        showModal();
                        setmodalTitle(item.content.metaTitle);
                      }}
                    />
                  }
                >
                  <Meta
                    title={
                      <Rate
                        disabled
                        defaultValue={item.rating}
                        style={{ fontSize: "15px" }}
                      />
                    }
                    description={
                      <div className="card-meta-description">
                        <div className="card-meta-description-child">
                          <h3>Country</h3>
                          <FaFlag />
                        </div>
                        <div className="card-meta-description-child">
                          <h3>Total friends</h3>
                          <h3>100</h3>
                        </div>
                        <div className="card-meta-description-child">
                          <h3>Created at</h3>
                          <h3 style={{ color: "blue", fontWeight: "800" }}>
                            01/08/2021
                          </h3>
                        </div>
                        <div className="card-meta-description-child">
                          <h3>blah...blah</h3>
                          <h3>blah...blah</h3>
                        </div>
                        <div className="card-meta-description-child">
                          <div
                            style={{
                              color: "red",
                              border: "solid",
                              borderColor: "red",
                              borderWidth: "0.5px",
                              padding: "5px",
                            }}
                          >
                            1.000 VND
                          </div>
                          <Button
                            type="primary"
                            size="large"
                            onClick={() => console.log("button")}
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
          })}
        </Row>
      </div>
    </>
  );
}
