import styled from "styled-components";
import { StudiesInterface } from "../../../interfaces/studies.interface";

interface StudiesCardProps extends StudiesInterface {}

const StudiesCardComponent = ({
  background,
  duration,
  img,
  studie,
  studieType,
  title,
}: StudiesCardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="infos">
          <img className="image" src={img} />
          <div className="info">
            <div>
              <p className="name">{title}</p>
              <p className="function">{studie}</p>
            </div>
            <div className="stats">
              <div className="div-stats">
                <p className="flex flex-col">Duration</p>
                <p className="state-value">{duration}</p>
              </div>
              <div className="div-stats">
                <p className="flex">Type</p>
                <p className="state-value">{studieType}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="background">
          <p className="background-text">{background}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 420px;
    border-radius: 1rem;
    background-color: rgba(31, 41, 55, 1);
    padding: 0.6rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer
  }

  .card:hover {
    transform: scale(1.05); /* Hace que se agrande un poco */
    box-shadow: 0px 4px 20px rgba(118, 36, 194, 0.6); /* Sombra luminosa */
    background: linear-gradient(
      to bottom right,
      rgb(39, 53, 79),
      rgb(68, 30, 128)
    ); /* Leve cambio de color */
  }

  .infos {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .image {
    height: 5rem;
    width: 5rem;
    border-radius: 0.5rem;
    background-color: rgb(118, 36, 194);
    background: linear-gradient(
      to bottom right,
      rgb(118, 36, 194),
      rgb(185, 128, 240)
    );
  }

  .info {
    height: 5rem;
    flex: 1;
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }

  .name {
    font-size: 1rem;
    line-height: 1.4rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }

  .function {
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
  }

  .stats {
    width: 10rem;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 1);
    padding: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.65rem;
    line-height: 1rem;
    height: 4.5rem;
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 4px;
    width: 5rem;
    text-align: center;
  }

  .state-value {
    font-weight: 700;
    color: rgb(118, 36, 194);
  }

  .background {
    min-height: 5rem;
    margin-top: 1rem;
    padding: 2px;
  }

  .background-text {
    color: white;
    font-size: 13px;
  }

  .div-stats {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 5rem;
    height: 4.5rem;
    justify-content: space-evenly;
  }
`;

export default StudiesCardComponent;
