import { Layout } from "antd";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const { Footer } = Layout;

export default function MyFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      <div className="footer">
        <div className="footer-content">
          <h1>Social Media</h1>
          <a href="https://facebook.com">
            <FaFacebook /> Facebook
          </a>
          <a href="https://twitter.com">
            <FaTwitter /> Twitter
          </a>
          <a href="https://youtube.com">
            <FaYoutube /> Youtube
          </a>
        </div>
        <div className="footer-content">
          <h1>About us</h1>
          <p>Bán acc</p>
          <p>Bán acc</p>
          <p>Bán acc</p>
        </div>
        <div className="footer-content">
          <h1>Contact</h1>

          <p>
            Điện thoại: <span style={{color:'blue'}}>0359545405</span>
          </p>
          <p>
            Email: <span>0359545405</span>
          </p>
          <p>
            Địa chỉ: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </p>
        </div>
      </div>
    </Footer>
  );
}
