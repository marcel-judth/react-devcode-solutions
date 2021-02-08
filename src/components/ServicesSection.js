//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/about-section.png';
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
          High <span>quality</span> services
        </h2>
        <Cards className="cards">
          <Card className="card">
            <div className="icon">
              <img src={clock} alt="icon clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={teamwork} alt="icon teamwork" />
              <h3>Guidance</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={diaphragm} alt="icon diaphragm" />
              <h3>Breathtaking</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={money} alt="icon money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
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
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
