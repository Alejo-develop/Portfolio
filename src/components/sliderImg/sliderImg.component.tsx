import { sliderSettings } from "../../utils/slider.settings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderImg.css";
import ModalImg from "./imgInfo.modal";
import { useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";
import { ImgMobile } from "../../interfaces/projects.interface";

interface SliderImgComponentsProps {
  data: ImgMobile[];
}

const SliderImgComponent = ({ data }: SliderImgComponentsProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [dataSelected, setDataSelected] = useState<ImgMobile>({
    img: "",
    title: "",
  });

  const handleSelected = (data: ImgMobile) => {
    setIsOpenModal(true);
    setDataSelected(data);
  };

  return (
    <div className="slider">
      <Slider {...sliderSettings}>
        {data.map((data, key) => (
          <div key={key}>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <button
                className="img-slider"
                onClick={() => handleSelected(data)}
              >
                <img src={data.img} alt="" className="img" />
              </button>
            </motion.div>
          </div>
        ))}
      </Slider>

      <AnimatePresence>
        <ModalImg
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          data={dataSelected}
        />
      </AnimatePresence>
    </div>
  );
};

export default SliderImgComponent;
