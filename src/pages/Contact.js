//animations
import { motion } from 'framer-motion';
import {
  fadeContact,
  flyIn,
  flyInLong,
  pageAnimation,
  titleAnim,
} from '../animation';
import styled from 'styled-components';
import { FaPhone, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import ScrollTop from '../components/ScrollTop';

const Contact = () => {
  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        const button = document.querySelector('.contact-form-btn');
        button.disabled = true;
        button.innerText = 'Vielen Dank!';
        button.classList.add('btn-sent');
        document.getElementById('contact-form').reset();
        console.log('SUCCESS');
      } else {
        console.log('ERROR', xhr);
      }
    };
    xhr.send(data);
  };

  return (
    <>
      <ContactStyle
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="form-wrapper">
          <Title>
            <Hide>
              <motion.h2 variants={titleAnim}>Kontakt</motion.h2>
            </Hide>
          </Title>
          <Hide>
            <ContactText variants={titleAnim}>
              DevCode Solutions freut sich auf Ihre unverbindliche Anfrage!
            </ContactText>
          </Hide>

          <motion.form
            id="contact-form"
            variants={fadeContact}
            autoComplete="off"
            onSubmit={submitForm}
            action="https://formspree.io/f/mzbklnpk"
            method="POST"
          >
            <InputWrapper>
              <input type="text" name="name" autoComplete="off" required />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Name</span>
              </label>
            </InputWrapper>
            <InputWrapper>
              <input type="text" name="contact" autoComplete="off" required />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Email / Tel.</span>
              </label>
            </InputWrapper>
            <InputWrapper>
              <input type="text" name="message" autoComplete="off" required />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Nachricht</span>
              </label>
            </InputWrapper>

            <SubmitButton type="submit" className="contact-form-btn">
              Senden
            </SubmitButton>
          </motion.form>
        </div>

        <InfoContainer variants={flyInLong}>
          <h3>Info</h3>

          <div className="info-wrapper">
            <FaPhone /> <a href="tel:+4367682595032">+43 676 8259 5032</a>
          </div>
          <div className="info-wrapper">
            <IoMdMail />
            <a href="tel:info@devcodesolutions.com">
              info@devcodesolutions.com
            </a>
          </div>
          <div className="info-wrapper">
            <FaMapMarkerAlt /> <a href="https://instagram.com">Villach, AT</a>
          </div>
        </InfoContainer>
        <BackgroundDiv variants={flyIn} initial="hidden" animate="show" />
        <SocialMediaIcons variants={flyIn}>
          <a href="https://www.instagram.com/devcode.solutions/">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/devcode.solutions/">
            <AiFillInstagram />
          </a>
        </SocialMediaIcons>
      </ContactStyle>
      <ScrollTop />
    </>
  );
};

const BackgroundDiv = styled(motion.div)`
  height: 100%;
  width: 20%;
  position: absolute;
  right: 0%;
  top: 0%;
  background: #23d997;
  @media (max-width: 900px) {
    display: none;
  }
`;

const ContactStyle = styled(motion.div)`
  padding: 0rem 10rem;
  padding-top: 5rem;
  color: #353535;
  min-height: 90vh;
  background: rgb(231, 231, 231);
  position: relative;

  .btn-sent {
    border: none;
    border: 0.1rem solid grey;
    background: unset;
    color: grey;
    background: unset;
    &:hover {
      transform: scale(1);
      transition: 1s ease;
    }
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 900px) {
    padding: 0rem;
    padding-top: 5vh;
    min-height: auto;
    .form-wrapper {
      padding: 0rem 8vw;
    }
  } ;
`;

const ContactText = styled(motion.p)`
  width: 50%;
  color: black;
  opacity: 0.8;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const Title = styled.div`
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const SubmitButton = styled.button`
  border: none;
  background: #23d997;
  color: white;
  border-radius: 0.2rem;
  width: 25%;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 20rem;
  }
`;

const InfoContainer = styled(motion.div)`
  width: 35%;
  height: 50%;
  position: absolute;
  right: 0;
  top: 30%;
  background: #282828;
  padding: 0rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  color: white;
  font-size: 1.5rem;
  z-index: 1;
  h3 {
    font-size: 2rem;
    font-weight: 400;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .info-wrapper {
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }

  @media (max-width: 900px) {
    position: inherit;
    width: 100%;
    height: auto;
    min-height: 30vh;
    margin-top: 5rem;
  }
`;

const SocialMediaIcons = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20%;
  min-width: 10rem;
  display: flex;
  z-index: 1;
  justify-content: space-evenly;
  a {
    color: white;
    font-size: 2.5rem;
  }
`;

const InputWrapper = styled.div`
  width: 25%;
  position: relative;
  height: 5vh;
  overflow: hidden;
  margin-bottom: 2rem;
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding-top: 2rem;
    outline: none;
    background: rgb(231, 231, 231);
  }

  label {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    color: gray;
    border-bottom: 1px solid grey;
  }

  label::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #23d997;
    transform: translateX(-100%);
    transition: transform 1s ease-in-out;
  }

  .content-name {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
    color: grey;
  }

  input:focus + .label-name .content-name,
  input:valid + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 0.8rem;
  }

  input:focus + .label-name::after,
  .form input:valid + .label-name::after {
    transform: translateX(0%);
  }

  @media (max-width: 900px) {
    width: auto;
    max-width: 20rem;
  }
`;

// const Circle = styled.div`
//   border-radius: 50%;
//   width: 3rem;
//   height: 3rem;
//   background: #353535;
// `;

// const Social = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   h2 {
//     margin: 2rem;
//   }
// `;

export default Contact;
