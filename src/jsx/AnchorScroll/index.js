import React, { Component } from 'react';
import $ from 'jquery';

class AnchorScroll extends Component {
  constructor() {
    super();
    this.config = {
      offset: 0,
      duration: 800,
      showHash: true
    };
  }
  scrollTo(e) {
    let self = this;
    let desired_scroll_offset = $(  e.target.hash  ).offset().top - this.config.offset;

    e.preventDefault();

    // Animate the scrolling action
    $('html, body').animate({
      scrollTop: desired_scroll_offset
    }, this.config.duration, function() {
      if ( !self.config.showHash )
        window.location.hash = e.target.hash;
      if ( typeof self.props.callback === typeof function(){} )
        self.props.callback();
    });
  }
  render() {
    return (
      <a href={this.props.href} target={this.props.target}
        className={this.props.className} onClick={this.scrollTo.bind(this)}
        data-scrollspy={this.props.spy}>{this.props.children}</a>
    );
  }
}

export default AnchorScroll;
