import ReactDom from "react-dom"; 
import { ModalInterface } from "../../interfaces/modal.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ModalIngProps extends ModalInterface {
  img: string;
}

const ModalImg = ({ isOpen, img, onClose }: ModalIngProps) => {
  if (!isOpen) return null;

  const portalDiv = document.getElementById("portal");
  if (!portalDiv) return null;

  return ReactDom.createPortal(
    <>
      <div className="backgroundModal" />
      <div className="modal">
        <FontAwesomeIcon icon={faArrowLeft} onClick={onClose} className="arrowBack"/>

        <img src={img} alt="" className="imgView"/>
      </div>
    </>,
    portalDiv
  );
};

export default ModalImg;
