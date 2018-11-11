import React from 'react';
import './Header.scss';

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/">
          Planet
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/feature">
                Feature
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/download">
                Download
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/demo">
                Demo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong>Your Favorite Source of Free Bootstrap Themes</strong>
            </h1>
            <hr />
          </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5">
              Start Bootstrap can help you build better websites using the Bootstrap CSS framework!
              Just download your template and start going, no strings attached!
            </p>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="/demo">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
