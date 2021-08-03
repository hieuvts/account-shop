import { Input, Select } from "antd";
import "./Home.scss";
const { Option } = Select;

export default function AccountFilter({
  priceSort,
  setPriceSort,
  dateSort,
  setDateSort,
}) {
  const handlePriceSort = (value) => {
    setPriceSort(value);
  };
  const handleDateSort = (value) => {
    setDateSort(value);
  };
  return (
    <div className="account-filter">
      <h2>Filter</h2>
      <Input.Group compact className="input-group">
        <Select defaultValue="Price filter" onChange={handlePriceSort}>
          <Option value="az">High to low</Option>
          <Option value="za">Low to high</Option>
        </Select>
        <Select defaultValue="Date filter" onChange={handleDateSort}>
          <Option value="latestAccount">Latest</Option>
          <Option value="oldestAccount">Oldest</Option>
        </Select>
        <Input style={{ width: "80%" }} defaultValue="Search by..." />
      </Input.Group>
    </div>
  );
}
