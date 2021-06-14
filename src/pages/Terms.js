import styled from 'styled-components';
import { motion } from 'framer-motion';
import { lineAnim, pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const Terms = () => {
  return (
    <>
      <TermsWrapper
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <h2>Rechtliches</h2>
        <motion.div
          className="line"
          initial="hidden"
          animate="show"
          variants={lineAnim}
        ></motion.div>
        <h3>Impressum</h3>
        <p>
          Marcel Judth <br /> Wilhelm-Hohenheim-Str. 17
          <br /> 9500 Villach, AT
          <br />
          Tel: <a href="tel:+4367682595032">+43 676 8259 5032</a>
          <br /> Email:
          <a href="mailto:info@devcodesolutions.com">
            {' '}
            info@devcodesolutions.com
          </a>
          <br />
          UID-Nummer: ATU75372357
          <br />
          <br />
          Mitglied der Wirtschaftskammer Kärnten
          <br />
          Gewerbebehörde: Bezirkshauptmannschaft Villach
          <br />
          Anwendbare Rechtsvorschriften: GewO, ECG: abrufbar unter
          <a href=" http://ris.bka.gv.at/bundesrecht">
            {' '}
            http://ris.bka.gv.at/bundesrecht
          </a>
          <br />
          Berufsbezeichnung: Softwareentwickler
          <br />
          Verleihungsstaat: Österreich
        </p>
        <br />
        <br />
        <br />
        <p>
          <h4>Datenschutzerklärung</h4>
        </p>
        <p>
          In folgender Datenschutzerklärung informieren wir Sie über die
          wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite.
          Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage
          der gesetzlichen Bestimmungen (Datenschutzgrundverordnung,
          Telekommunikationsgesetz 2003).
        </p>
        <p>
          Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese
          besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der
          Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein
          berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.{' '}
        </p>
        <h3>Kontakt mit uns</h3>{' '}
        <p>
          Wenn Sie uns, entweder über unser Kontaktformular auf unserer
          Webseite, oder per Email kontaktieren, dann werden die von Ihnen an
          uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den
          Fall von weiteren Anschlussfragen für sechs Monate bei uns
          gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe
          Ihrer übermittelten Daten.
        </p>
        <h3>Cookies</h3>{' '}
        <p>
          Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um
          kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät
          abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies
          dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies
          bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie
          ermöglichen es uns, Ihren Browser beim nächsten Besuch
          wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren
          Browser so einrichten, dass er Sie über das Setzen von Cookies
          informiert und Sie dies nur im Einzelfall erlauben. Bei der
          Deaktivierung von Cookies kann die Funktionalität unserer Website
          eingeschränkt sein.
        </p>
        <h3>Google Fonts</h3>
        <p>
          {' '}
          Unsere Website verwendet Schriftarten von „Google Fonts“. Der
          Dienstanbieter dieser Funktion ist:{' '}
        </p>{' '}
        <ul>
          {' '}
          <li>
            {' '}
            Google Ireland Limited Gordon House, Barrow Street Dublin 4. Ireland{' '}
          </li>{' '}
        </ul>{' '}
        <p> Tel: +353 1 543 1000 </p>{' '}
        <p>
          {' '}
          Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und
          speichert diese in den Cache. Da Sie, als Besucher der Webseite, Daten
          des Dienstanbieters empfangen kann Google unter Umständen Cookies auf
          Ihrem Rechner setzen oder analysieren.{' '}
        </p>{' '}
        <p>
          {' '}
          Die Nutzung von „Google-Fonts“ dient der Optimierung unserer
          Dienstleistung und der einheitlichen Darstellung von Inhalten. Dies
          stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
          DSGVO dar.{' '}
        </p>{' '}
        <p>
          {' '}
          Weitere Informationen zu Google Fonts erhalten Sie unter folgendem
          Link:{' '}
        </p>{' '}
        <ul>
          {' '}
          <li>
            {' '}
            <a href="https://developers.google.com/fonts/faq">
              {' '}
              https://developers.google.com/fonts/faq{' '}
            </a>{' '}
          </li>{' '}
        </ul>{' '}
        <p>
          {' '}
          Weitere Informationen über den Umgang mit Nutzerdaten von Google
          können Sie der Datenschutzerklärung entnehmen:{' '}
        </p>{' '}
        <ul>
          {' '}
          <li>
            {' '}
            <a href="https://policies.google.com/privacy?hl=de">
              {' '}
              https://policies.google.com/privacy?hl=de{' '}
            </a>{' '}
            .{' '}
          </li>{' '}
        </ul>{' '}
        <p>
          {' '}
          Google verarbeitet die Daten auch in den USA, hat sich jedoch dem{' '}
          <br /> EU-US Privacy-Shield unterworfen.{' '}
        </p>{' '}
        <p>
          {' '}
          <a href="https://www.privacyshield.gov/EU-US-Framework">
            {' '}
            https://www.privacyshield.gov/EU-US-Framework{' '}
          </a>{' '}
        </p>
        <h3> Server-Log Files </h3>{' '}
        <p>
          {' '}
          Diese Webseite und der damit verbundene Provider erhebt im Zuge der
          Webseitennutzung automatisch Informationen im Rahmen sogenannter
          „Server-Log Files“. Dies betrifft insbesondere:{' '}
        </p>{' '}
        <ul>
          {' '}
          <li> IP-Adresse oder Hostname </li> <li> den verwendeten Browser </li>{' '}
          <li> Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit </li>{' '}
          <li> aufgerufene Seiten der Webseite </li>{' '}
          <li> Spracheinstellungen und Betriebssystem </li>{' '}
          <li>
            {' '}
            „Leaving-Page“ (auf welcher URL hat der Benutzer die Webseite
            verlassen){' '}
          </li>{' '}
          <li> ISP (Internet Service Provider) </li>{' '}
        </ul>{' '}
        <p>
          {' '}
          Diese erhobenen Informationen werden nicht personenbezogen verarbeitet
          oder mit personenbezogenen Daten in Verbindung gebracht.{' '}
        </p>{' '}
        <p>
          {' '}
          Der Webseitenbetreiber behält es sich vor, im Falle von Bekanntwerden
          rechtswidriger Tätigkeiten, diese Daten auszuwerten oder zu
          überprüfen.{' '}
        </p>
        <h3>Newsletter</h3>{' '}
        <p>
          Sie haben die Möglichkeit, über unsere Website unseren Newsletter zu
          abonnieren. Hierfür benötigen wir Ihre E-Mail-Adresse und ihre
          Erklärung, dass Sie mit dem Bezug des Newsletters einverstanden sind.
        </p>
        <h3>Ihre Rechte als Betroffener</h3>{' '}
        <p>
          Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns
          gespeichert sind grundsätzlich ein Recht auf:
        </p>{' '}
        <ul>
          <li>Auskunft</li>
          <li>Löschung der Daten</li>
          <li>Berichtigung der Daten</li>
          <li>Übertragbarkeit der Daten</li>
          <li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
          <li>Einschränkung</li>
        </ul>{' '}
        <p>
          Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße
          gegen das Datenschutzrecht passiert sind, so haben Sie die Möglichkeit
          sich bei uns (info@devcodesolutions.com) oder der Datenschutzbehörde
          zu beschweren.
        </p>
        <h3>Sie erreichen uns unter folgenden Kontaktdaten:</h3>{' '}
        <p>
          <b>Webseitenbetreiber:</b> Marcel Judth
          <br /> <b>Telefonnummer:</b> 067682595032
          <br /> <b>Email:</b> info@devcodesolutions.com
        </p>
        <p>
          Quelle:{' '}
          <b>
            <a href="https://advolist.at/spezialisierung/erbrecht/3/1">
              Advolist
            </a>
          </b>{' '}
          in Kooperation mit{' '}
          <b>
            <a href="https://luxoshower.com">Luxoshower</a>
          </b>
        </p>
        <ScrollTop />
      </TermsWrapper>
    </>
  );
};

const TermsWrapper = styled(motion.div)`
  padding: 5vh 5rem;
  color: white;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  a {
    color: white;
  }
  p {
    padding: 1rem 0rem;
  }
`;

export default Terms;
