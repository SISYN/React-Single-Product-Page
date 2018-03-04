import React, { Component } from 'react';

class Cover extends Component {
  render() {
    return (
      <section className="download bg-primary text-center" id="download">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="section-heading">Discover what all the buzz is about!</h2>
              <p>Our app is available on any mobile device! Download now to get started!</p>
              <div className="badges">
                <a className="badge-link" href="#download"><img src="/media/images/template/google-play-badge.svg" alt="" /></a>
                <a className="badge-link" href="#download"><img src="/media/images/template/app-store-badge.svg" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;
