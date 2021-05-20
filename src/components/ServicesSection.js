//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
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
        <h2>About</h2>
        <Cards className="cards">
          <Card className="card">
            <div className="icon">
              <img src={clock} alt="icon clock" />
              <h3>Effizienz</h3>
            </div>
            <p>Rasche Abwicklung von Projekten</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={teamwork} alt="icon teamwork" />
              <h3>Beratung</h3>
            </div>
            <p>Bedarfserhebung durch strukturierte Beratungsgespräche</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={diaphragm} alt="icon diaphragm" />
              <h3>Individualität</h3>
            </div>
            <p>Ergebnisse, die zu Ihnen passen und Ihre Kunden begeistern</p>
          </Card>
          <Card className="card">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40.053"
                height="34.281"
                viewBox="0 0 2054 1758"
              >
                <image
                  x="6"
                  y="6"
                  width="2042"
                  height="1746"
                  href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAiCAYAAAAtZZsLAAACRElEQVRYhdXYW4jNURTH8c+MkXJ7YNS4JYwHJETKA4VG4Rm51DwqD1KeR8QzCXnFA+J9HlyHkgf3RIlESYxLyaXctad16sz4n/9gnPM/frU7u7P+p//3rL3X2mvthqn3Dwk1Yy82KlbHsRXdiaIpUJbgfMyf4RoaMahGqN/xDfOwLkYbzibASWVwy8rmRWkxLuIMWpOXOgJkVR3AJV3C8phvT3vwK15gfMFgffU4rW5pn92tL7Ye3ROBIDZpvamHqSkHajOW4mWVwcegCweyjHmA7VhQPa5emvI3gCmSWvClynCD8bySMQ/wbYxC1Vg0QH/K8+BCzMK7KjOMiDR3OcuYB7g/zsZa6Dbm/CngJsyugQeH404lYx7g9RiF6r8OkpThJ+NTlRmGRGHQnWXMA+zE/Opx9dItzM0y5AEexCK8rjLc6EopRj+Ah2MUqlKQ1GOwNAiwVFHPLJ7nF/UwJcAjGIcVdQTXFs3c0QS4K77sjAK1aKWu7nQw7ExB8iT64gs4h6e4GQE0kL2Z6ryh2INTFZ5ZiW34HFstHa0Ty7z4qBTFXZGY92E9JvxDL57EjuSNDFt7xqqdwJZSq1GeZl5hQ1x9DAvv/RgAWCoyRkUDngBnYG2fZ5rjsyVa38a+DVxWHkxQ7wcAVq43UbKlJV6DaZH8P8QzDWV/RlZ3Wav8txq74zhLdz+tv/vDWibojthCI/EA0wM2V3lHXTV0LOCuxM1BWtKPee8p4oi7irF4GO/PLeeKOoNTCkkBcyNa22wv4ie1HWorjRbtrAAAAABJRU5ErkJggg=="
                />
              </svg>

              <h3>Betreuung</h3>
            </div>
            <p>Kontinuierliche Betreuung, auch nach Projektabschluss</p>
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
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 40rem;
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
  }
`;

export default ServicesSection;
