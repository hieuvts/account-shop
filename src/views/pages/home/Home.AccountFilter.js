import { Input, Select } from "antd";
import './Home.scss';
const { Option } = Select;

export default function AccountFilter() {
  return (
    <div className="account-filter">
      <h2>Filter</h2>
      <Input.Group compact className='input-group'>
        <Select defaultValue="Price filter">
          <Option value="highToLow">High to low</Option>
          <Option value="lowToHigh">Low to high</Option>
        </Select>
        <Select defaultValue="Date filter" className='input-group'>
          <Option value="latestAccount">Latest</Option>
          <Option value="oldestAccount">Oldest</Option>
        </Select>
        <Input style={{ width: '80%'}} defaultValue="Search by..." />
      </Input.Group>
    </div>
  );
}
