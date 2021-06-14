import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Nav from './components/Nav';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
//globalStyle
import GlobalStyle from './components/GlobalStyle';
//animation
import { AnimatePresence } from 'framer-motion';
import Terms from './pages/Terms';

function App() {
  const location = useLocation();
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <Projects />
          </Route>
          <Route path="/work/:id">
            <ProjectDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
