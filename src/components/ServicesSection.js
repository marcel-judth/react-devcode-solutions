//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.jpg';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';
const ServicesSection = () => {
  const [element, controls, view] = useScroll();
  console.log(view);
  return (
    <Services
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
    >
      <Description className="description">
        <h2>
          Höchste Qualität - <span> effiziente </span> Arbeitsweise
        </h2>
        <Cards className="cards">
          <Card className="card">
            <div className="icon">
              <img src={clock} alt="icon clock" />
              <h3>Effizienz</h3>
            </div>
            <p>Höchste Qualität - effiziente Arbeitsweise</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={teamwork} alt="icon teamwork" />
              <h3>Beratung</h3>
            </div>
            <p>Ihre Idee - persönliche Beratung</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={diaphragm} alt="icon diaphragm" />
              <h3>Individualität</h3>
            </div>
            <p>Ergebnisse die Ihre Kunden begeistert.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={money} alt="icon money" />
              <h3>Preis/Leistung</h3>
            </div>
            <p>Fairer Preis</p>
          </Card>
        </Cards>
      </Description>
      <Image className="image">
        <img src={home2} alt="home camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    img {
      max-height: 5vh;
    }
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 2rem 0rem;

    p {
      display: none;
    }
  }
`;

export default ServicesSection;
