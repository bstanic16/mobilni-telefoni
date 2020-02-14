import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
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
        <Nav></Nav>
        <LightDark theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/categories" component={Categories} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
