import React, { Component } from 'react';
import IndexComponent from "./components/IndexComponent"
import AboutComponent from "./components/AboutComponent"
import MenuComponent from "./components/MenuComponent"
import TestimonialsComponent from "./components/TestimonialsComponent"

import ContactComponent from "./components/ContactComponent"

import NotFound from "./components/NotFound"

import { Router, browserHistory, Route } from "react-router"

import "./App.css"

import PageTransition from 'react-router-page-transition';



//History for router

// import history from "./config/history"

class App extends Component {
  render() {
    return (
        <div>
          <PageTransition timeout={1000}>
            <Router history={browserHistory}>
                    <Route path="/" exact component={IndexComponent} />
                    <Route path="about" component={AboutComponent} />
                    <Route path="contact" component={ContactComponent} />
                    <Route path="menu" component={MenuComponent} />
                    <Route path="testimonials" component={TestimonialsComponent} />
                    <Route path="*" component={NotFound} />
            </Router>
          </PageTransition>
        </div>
    );
  }
}

export default App;
