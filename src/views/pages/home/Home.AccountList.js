import { Row, Col, Modal, Button, Card, Rate, Pagination } from "antd";
import { FaFlag } from "react-icons/fa";
import { useState } from "react";
import { gridItems } from "../../shared/constants";
const { Meta } = Card;

export default function AccountList({ accounts }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onPageChange = (page) => {
    console.log("page: ", page);
    setcurrentPage(page);
    setMinValue((page - 1) * 4);
    setMaxValue((page - 1) * 4 + 4);
  };
  // const handlePageChange = (page) => {
  //   console.log('page: ', page);
  //   setMinValue(page*4 +4);
  //   setMaxValue(page*4 +4);
  // };
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
        <h2>Account: {accounts.length}</h2>
        <Row gutter={[16, 24]} style={{ textAlign: "center" }}>
          {accounts.slice(minValue, maxValue).map((item, index) => {
            return (
              <Col className="gutter-row" span={6}>
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
                        setmodalTitle(item.content.metaTitle);
                      }}
                    />
                  }
                >
                  <Meta
                    title={
                      <Rate
                        disabled
                        defaultValue="3"
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
                          <div
                            style={{
                              color: "red",
                              border: "solid",
                              borderColor: "red",
                              borderWidth: "0.5px",
                              padding: "5px",
                            }}
                          >
                            {item.price}
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
        <Pagination
          current={currentPage}
          total={30}
          style={{ textAlign: "center" }}
          onChange={onPageChange}
        />
      </div>
    </>
  );
}
