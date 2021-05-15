import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';
import { MdComputer, MdWeb } from 'react-icons/md';
import { FaMobileAlt, FaInstagram } from 'react-icons/fa';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
    >
      <h2>
        <span>Leistungen</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Web-Anwendungen" icon={<MdWeb />}>
          <div className="answer">
            <p> (Webshops, CMS, Portfolios, Business, ...)</p>
            <p>
              Individuell designte Website für Ihre Firma die auf Ihre
              Bedürfnisse abgestimmt wird. Von einfachen statischen Websiten bis
              hin zu dynamischen Web-Applikationen.
            </p>
          </div>
        </Toggle>

        <Toggle title="Desktop-Anwendungen" icon={<MdComputer color="white" />}>
          <div className="answer">
            <p>
              {' '}
              (Rechnungsverwaltung, kleinere ERP-Systeme, Automatisierungen,
              Auftragsverwaltung ...)
            </p>
            <p>
              Viele Aufgaben in Ihrem Unternehmen können durch einfache
              Programme vereinfacht werden damit Sie sich auf die wesentlichen
              Themen konzentrieren können.
            </p>
          </div>
        </Toggle>

        <Toggle title="Mobile Apps " icon={<FaMobileAlt color="white" />}>
          <div className="answer">
            <p>(Shops, Zeiterfassung, Steuerungen, Lagerverwaltungs, ...)</p>
            <p>
              Eine Idee die Sie schon länger verwirklichen wollen? Melden Sie
              sich bei DevCode Solutions. Zusammen finden wir eine Lösung.
            </p>
          </div>
        </Toggle>

        <Toggle
          title="Social-Media marketing "
          icon={<FaInstagram color="white" />}
        >
          <div className="answer">
            <p>(Instagram, Facebook, Twitter, ...)</p>
            <p>
              Strategien um möglichst viele Nutzer auf Ihr Unternehemen
              aufmerksam zu machen und damit die Neukundengewinnung anzukurbeln.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .toogle-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  h4 {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
