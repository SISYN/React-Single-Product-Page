import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <p>&copy; Your Website 2018. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#privacy">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="#tos">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
