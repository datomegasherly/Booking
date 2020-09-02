import React, { Component } from 'react';
import './css/open-iconic-bootstrap.min.css';
import './css/animate.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/magnific-popup.css';
import './css/aos.css';
import './css/ionicons.min.css';
import './css/bootstrap-datepicker.css';
import './css/jquery.timepicker.css';
import './css/flaticon.css';
import './css/icomoon.css';
import './css/style.css';

import './js/bootstrap.min.js';
import './js/jquery.waypoints.min.js';
import './js/owl.carousel.min.js';
import './js/jquery.magnific-popup.min.js';
import './js/aos.js';
import './js/jquery.animateNumber.min.js';
import './js/bootstrap-datepicker.js';
import './js/scrollax.min.js';
import Navbar from './static/navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Footer from './static/footer';
import About from './pages/about';
import Hotels from './pages/hotels';
import Hotel from './pages/hotel';

//navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light
require('./js/main.js');

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/hotels" component={Hotels} />
                    <Route exact path="/hotel/:id" component={Hotel} />
                </Switch>
                <Footer />
            </Router>
        )
    }
}

export default App;