import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ScrollToTop,
  TopAlert,
  Navbar,
  Sidebar,
  FooterLinks,
  Footer,
} from './components';
import {
  Home,
  About,
  FAQs,
  Reviews,
  SingleService,
  Contact,
  Error,
} from './pages';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopAlert />
      <Navbar />
      <Sidebar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/faqs">
          <FAQs />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/:serviceURL" children={<SingleService />} />
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>

      <FooterLinks />
      <Footer />
    </Router>
  );
}

export default App;
