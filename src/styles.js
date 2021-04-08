import styled from 'styled-components';
import { motion } from 'framer-motion';

//styled compontents
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10vw;
  color: white;

  .image,
  img {
    border-radius: 5rem;
  }

  .alt-btn {
    border-color: white;
  }

  .call-btn {
    margin-right: 2rem;
  }

  @media (max-width: 1300px) {
    padding: 2.5rem 5vw;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    /* padding: 2rem 3vw; */
    text-align: center;

    .image,
    img {
      border-radius: 4%;
      height: 15vh;
      width: auto;
    }
    .image {
      margin-bottom: 1rem;
    }
  }
`;

export const Description = styled.div`
  flex: 2;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: normal;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  display: flex;
  justify-content: center;
  img {
    width: 40vw;
    height: auto;
    max-height: 70vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
