import { Row, Col, Modal, Button, Pagination } from "antd";
import { useState } from "react";

import CardAccount from "./Card_Account";

export default function AccountList({ accounts }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(12);
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
    setMinValue((page - 1) * 32);
    setMaxValue((page - 1) * 32 + 32);
  };
  
  return (
    <>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h1>Sample</h1>
      </Modal>
      <div className="account-list">
        <h2>Account: {accounts.length}</h2>
        <Row gutter={[16, 24]} style={{ textAlign: "center" }}>
          <CardAccount
            accounts={accounts}
            minValue={minValue}
            maxValue={maxValue}
            showModal={showModal}
          />
        </Row>
        <Pagination
          current={currentPage}
          defaultPageSize={32}
          total={accounts.length/32}
          style={{ textAlign: "center" }}
          onChange={onPageChange}
        />
      </div>
    </>
  );
}
