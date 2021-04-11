import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import travelly from "../img/Travelly-1.png";
import eventApp from "../img/IphoneMockups.png";
import uniconta from "../img/Desktop.png";
import webshop from "../img/Webshop.png";
import outdoor from "../img/Outdoorsolution.png";
import elenaJoy from "../img/ElenaJoy.png";
import kinofabrik from "../img/Kinofabrik.png";
import gh from "../img/GH.png";
import musicPlayer from "../img/musicPlayer.png";
import portfolio from "../img/portfolio.png";

//animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  sliderContainer,
  slider,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  const [element6, controls6] = useScroll();
  const [element7, controls7] = useScroll();
  const [element8, controls8] = useScroll();
  const [element9, controls9] = useScroll();

  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "rgb(231, 231, 231)" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>

      <Project>
        <motion.h2 variants={fade}>Website1</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/travelly-website">
          <Hide>
            <motion.img
              src={travelly}
              variants={photoAnim}
              alt="travelly website"
              loading="lazy"
            />
          </Hide>
        </Link>
      </Project>

      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>App1</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/eventApp">
          <Hide>
            <motion.img
              src={eventApp}
              variants={photoAnim}
              alt="eventApp-mockups"
              loading="lazy"
            />
          </Hide>
        </Link>
      </Project>
      <Project
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Desktop-App</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/uniconta">
          <img src={uniconta} alt="desktop application macbook" />
        </Link>
      </Project>

      <Project
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <h2>Webshop</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/webshop">
          <img src={webshop} alt="webshop mockups" />
        </Link>
      </Project>

      <Project
        ref={element4}
        variants={fade}
        animate={controls4}
        initial="hidden"
      >
        <h2>Website</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/outdoorsolution">
          <img src={outdoor} alt="outdoorsolution website" />
        </Link>
      </Project>
      <Project
        ref={element5}
        variants={fade}
        animate={controls5}
        initial="hidden"
      >
        <h2>Website</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/elena-joy-website">
          <img src={elenaJoy} alt="elena joy website" />
        </Link>
      </Project>
      <Project
        ref={element6}
        variants={fade}
        animate={controls6}
        initial="hidden"
      >
        <h2>Website</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/kinofabrik">
          <img src={kinofabrik} alt="kinofabrik Website" />
        </Link>
      </Project>
      <Project
        ref={element7}
        variants={fade}
        animate={controls7}
        initial="hidden"
      >
        <h2>Website</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/gh-social-media">
          <img src={gh} alt="the athlete" />
        </Link>
      </Project>
      <Project
        ref={element8}
        variants={fade}
        animate={controls8}
        initial="hidden"
      >
        <h2>Music-Player</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/music-player">
          <img src={musicPlayer} alt="music player" />
        </Link>
      </Project>
      <Project
        ref={element9}
        variants={fade}
        animate={controls9}
        initial="hidden"
      >
        <h2>Website</h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/portfolio">
          <img src={portfolio} alt="portfolio website" />
        </Link>
      </Project>

      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled(motion.div)`
  padding-bottom: 10rem;
  overflow: hidden;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
