import { Carousel } from "antd";
import bannerGTAV from "../../images/carousel/421641.jpg";
import bannerLOL from "../../images/carousel/536426.png";
import bannerPUBG from "../../images/carousel/816720.jpg";
import bannerFORNITE from "../../images/carousel/889823.jpg";

export default function CarouselBanner() {
  return (
    <Carousel autoplay autoplaySpeed={3000} swipeToSlide={true} draggable={true}>
      <img alt="example" src={bannerGTAV} height="400px" />
      <img alt="example" src={bannerLOL} height="400px" />
      <img alt="example" src={bannerPUBG} height="400px" />
      <img alt="example" src={bannerFORNITE} height="400px" />
    </Carousel>
  );
}
