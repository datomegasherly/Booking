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
import './js/main.js';
import Navbar from './static/navbar';


//navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('/app/images/bg_1.jpg')" }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                        <div className="col-md-9 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <h1 className="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><strong>Explore <br /></strong> your amazing city</h1>
                            <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Find great places to stay, eat, shop, or visit from local experts</p>
                            <div className="block-17 my-4">
                            <form action="" method="post" className="d-block d-flex">
                                <div className="fields d-block d-flex">
                                    <div className="textfield-search one-third">
                                        <input type="text" className="form-control" placeholder="Ex: food, service, hotel" />
                                    </div>
                                    <div className="select-wrap one-third">
                                        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                        <select name="" id="" className="form-control" placeholder="Keyword search">
                                        <option value="">Where</option>
                                        <option value="">San Francisco USA</option>
                                        <option value="">Berlin Germany</option>
                                        <option value="">Lodon United Kingdom</option>
                                        <option value="">Paris Italy</option>
                                        </select>
                                    </div>
                                </div>
                                <input type="submit" className="search-submit btn btn-primary" value="Search" />
                            </form>
                            </div>
                            <p>Or browse the highlights</p>
                            <p className="browse d-md-flex">
                                <span className="d-flex justify-content-md-center align-items-md-center"><a href="#"><i className="flaticon-fork"></i>Restaurant</a></span>
                                <span className="d-flex justify-content-md-center align-items-md-center"><a href="#"><i className="flaticon-hotel"></i>Hotel</a></span> 
                                <span className="d-flex justify-content-md-center align-items-md-center"><a href="#"><i className="flaticon-meeting-point"></i>Places</a></span> 
                                <span className="d-flex justify-content-md-center align-items-md-	center"><a href="#"><i className="flaticon-shopping-bag"></i>Shopping</a></span>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;