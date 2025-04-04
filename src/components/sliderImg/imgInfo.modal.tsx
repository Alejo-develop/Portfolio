import ReactDom from "react-dom";
import { ModalInterface } from "../../interfaces/modal.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "motion/react";
import { ImgMobile } from "../../interfaces/projects.interface";

interface ModalIngProps extends ModalInterface {
  data: ImgMobile;
}

const ModalImg = ({ isOpen, data, onClose }: ModalIngProps) => {
  const portalDiv = document.getElementById("portal");
  if (!portalDiv) return null;

  return ReactDom.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="backgroundModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={onClose}
              className="arrowBack"
            />
            <div className="containerInfo-ImgMobile">
              <img src={data.img} alt="" className="imgView" />
              <p className="title-imgMobileProject">{data.title}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    portalDiv
  );
};

export default ModalImg;
