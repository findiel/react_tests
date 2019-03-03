import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import MainPage from './components/pages/MainPage';
import CarouselPage from './components/pages/CarouselPage';
import DisplayMessagesPage from './components/pages/TodoPage';
import TestsPage from './components/pages/TestsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/react_tests" component={MainPage} />
          <Route exact path="/react_tests/todo" component={DisplayMessagesPage} />
          <Route exact path="/react_tests/carousel" component={CarouselPage} />
          <Route exact path = "/react_tests/tests" component={TestsPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
