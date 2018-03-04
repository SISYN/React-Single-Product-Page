import React, { Component } from 'react';
import Navigation from './Navigation';
import Cover from './Cover';
import Download from './Download';
import Features from './Features';
import CallToAction from './CTA';
import Social from './Social';
import Footer from './Footer';

//import Alert from './jsx/Alert';

class Splash extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Cover />
        <Download />
        <Features />
        <CallToAction />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default Splash;
