import styled from "styled-components";
import { StudiesInterface } from "../../../../interfaces/studies.interface";

interface StudiesCardProps extends StudiesInterface {}

const StudiesCardComponent = ({
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
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 405px;
    border-radius: 1rem;
    background-color: #121212;
    padding: 0.6rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin: 16px
  }

  .card:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    background: var(--secondary-color) 
  }

  .infos {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .image {
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 0.5rem;
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

  @media screen and (max-width: 600px) {
    .card {
      width: 280px;
    }

    .image {
      width: 3rem;
      height: 3rem;
    }

    .name {
      font-size: 0.8rem;
    }

    .function {
      font-size: 0.6rem;
    }

    .stats {
      width: 7rem;
      font-size: 0.6rem;
    }

    .stats {
      height: 3rem;
    }

    .background-text {
      font-size: 10px;
    }

    .div-stats {
      width: 3.5rem;
    }

    .flex {
      margin: 0 4px;
      width: 3rem;
    }

    .background {
      height: 1rem;
    }

    .info {
      height: 3rem;
    }
  }

  @media screen and (max-width: 1100px) {
      .card {
        width: 280px;
      }

      .image {
        width: 3rem;
        height: 3rem;
      }

      .name {
        font-size: 0.8rem;
      }

      .function {
        font-size: 0.6rem;
      }

      .stats {
        width: 7rem;
        font-size: 0.6rem;
      }

      .stats {
        height: 3rem;
      }

      .background-text {
        font-size: 10px;
      }

      .div-stats {
        width: 3.5rem;
      }

      .flex {
        margin: 0 4px;
        width: 3rem;
      }

      .background {
        height: 1rem;
      }

      .info {
        height: 3rem;
      }
  }

  @media screen and (min-height: 1100px) {
      .card {
        width: 380px;
      }

      .image {
        width: 5rem;
        height: 5rem;
      }

      .name {
        font-size: 1.2rem;
      }

      .function {
        font-size: 0.8rem;
      }

      .stats {
        width: 7rem;
        font-size: 0.7rem;
      }

      .stats {
        height: 4rem;
      }

      .background-text {
        font-size: 15px;
      }

      .div-stats {
        width: 3.5rem;
      }

      .flex {
        margin: 0 4px;
        width: 3rem;
      }

      .background {
        height: 8rem;
      }

      .info {
        height: 4rem;
      }
  }
}
`;

export default StudiesCardComponent;
