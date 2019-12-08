import React from 'react';
import { I18nContextProvider } from "./i18n";
import NavBar from './components/app/NavBar';
import Footer from './components/app/Footer';
import Home from './pages/Home';
import Web from './pages/Web';
import Portfolio from './pages/Porfolio';
import About from './pages/About'
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Questions from './pages/Questions';
import WhatsApp from './components/app/WhatsApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  
  return (
    <div className='app'>
      <I18nContextProvider>
      <Router>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/web" component={Web} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/questions" component={Questions} />
        </Switch>
        <Footer />
        <WhatsApp />
      </Router>
      </I18nContextProvider>
    </div>
  );
}


