import { sliderSettings } from "../../utils/slider.settings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderImg.css";
import ModalImg from "./imgInfo.modal";
import { useState } from "react";

interface SliderImgComponentsProps {
  data: string[];
}

const SliderImgComponent = ({ data }: SliderImgComponentsProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [imgSelected, setImgSelected] = useState<string>("");

  const handleSelected = (img: string) => {
    setIsOpenModal(true)
    setImgSelected(img)
  }

  return (
    <div className="slider">
      <Slider {...sliderSettings}>
        {data.map((img) => (
          <div>
            <button className="img-slider" onClick={() => handleSelected(img)}>
              <img src={img} alt="" className="img" />
            </button>
          </div>
        ))}
      </Slider>
      <ModalImg
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        img={imgSelected}
      />
    </div>
  );
};

export default SliderImgComponent;
