import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/NavBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';
import Categories from './components/Categories';
import Contact from './components/Contact';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import LightDark from './components/LightDark';
import Footer from './components/Footer';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import Infos from './components/Infos';

function App() {

  const [theme, setTheme] = useState('light');
  console.log(theme)
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light')
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <React.Fragment>
        <GlobalStyles />
        <Router>
          <Nav></Nav>
          <LightDark theme={theme} toggleTheme={toggleTheme} />
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/categories" component={Categories} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/informacije" component={Infos} />
            <Route component={Default} />
          </Switch>
          <Modal />
          <Footer />
        </Router>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;