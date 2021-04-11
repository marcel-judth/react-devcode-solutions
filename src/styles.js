import styled from "styled-components";
import { motion } from "framer-motion";

//styled compontents
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10vw;
  color: white;

  .image img {
    border-radius: 5rem;
  }

  .alt-btn {
    border-color: white;
  }

  .call-btn {
    margin-right: 2rem;
  }

  .imageSmall {
    display: none;
  }

  @media (max-width: 1300px) {
    padding: 2.5rem 5vw;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    text-align: center;

    .image {
      display: none;
    }

    .imageSmall {
      align-items: center;
      display: flex;
    }

    img {
      display: block;
      height: 15vh !important;
      width: auto !important;
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

  @media (max-width: 800px) {
    overflow: visible;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
