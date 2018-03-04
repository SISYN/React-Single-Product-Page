import React, { Component } from 'react';
import AnchorScroll from './../../AnchorScroll';
import $ from 'jquery';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      scrollPos: 0,
      scrollSpy: ''
    };
  }
  componentWillMount() {
    let self = this;
    window.onscroll = function() {
      self.setState({
        scrollPos: window.pageYOffset | document.body.scrollTop
      });
    }
  }
  componentDidMount() {
    this.scrollListener();
  }

  navClasses() {
    let classes = ['navbar', 'navbar-expand-lg', 'navbar-light', 'fixed-top'];
    if ( this.state.scrollPos > 100 )
      classes.push('navbar-shrink');
    return classes.join(' ');
  }

  scrollListener() {
    window.onscroll = function() {
      this.setState({
        scrollPos: window.pageYOffset | document.body.scrollTop
      });
      this.activeNavController();
    }.bind(this);
  }

  activeNavController() {
    let
      self = this,
      navItems = $('#navbarResponsive > ul > li');
      navItems.children('a').removeClass('active');
      navItems.each(function(){
      let target = $(this).children('a').attr('data-scrollspy');
      if ( target === undefined )
        return;
      if ( self.isInViewport(target) )
        $(this).children('a').addClass('active').closest('li').siblings().children('a').removeClass('active');
    });
  }

  isInViewport(element) {
    let
      deadzone = 0.60, // 60% from bottom is same as not visible
      elementTop = $(element).offset().top,
      elementBottom = elementTop + $(element).outerHeight(),
      viewportTop = $(window).scrollTop(),
      viewportBottom = viewportTop + $(window).height() - $(window).height() * deadzone;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  hideMobileNav() {
    $('.navbar-collapse').collapse('hide');
  }

  render() {
    return (
      <nav className={this.navClasses()} id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu&nbsp;
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <AnchorScroll callback={this.hideMobileNav()} spy="#download" className="nav-link" href="#download">Download</AnchorScroll>
              </li>
              <li className="nav-item">
                <AnchorScroll callback={this.hideMobileNav()} spy="#features" className="nav-link" href="#features">Features</AnchorScroll>
              </li>
              <li className="nav-item">
                <AnchorScroll callback={this.hideMobileNav()} spy="#contact" className="nav-link" href="#contact">Contact</AnchorScroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
