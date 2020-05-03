import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="navbar navbar-expand-lg sticky-top ">
                <a className="navbar-brand" href="#">
                    Logo
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="collapsibleNavbar"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Pages
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home__welcome">
                <div className="container-fluid Home__welcome-container">
                    <div className="text-container">
                        <h1 className="Home__title">Garden based in NY</h1>
                        <p className="Home__paragraph">
                            Provides hassle free backyard transformations with
                            artistic solutions
                        </p>
                        <button
                            className="btn btn-outline-light Home__bnt-about-us"
                            type="submit"
                        >
                            About us
                        </button>
                        <button
                            className="btn btn-primary Home__bnt-request"
                            type="submit"
                        >
                            Request an estimate
                        </button>
                    </div>
                </div>
                <div className="container welcome__services">
                    <div className="row services p-5">
                        <div className="col-12 col-lg-4 text-center">
                            <i className="fas fa-home icon"></i>
                            <h2>Gardens</h2>
                            <p> Get expert advice on how to design a garden.</p>
                            <Link>read more</Link>
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <i className="fas fa-city icon"></i>
                            <h2>Urban</h2>
                            <p> Get expert advice on how to design a garden.</p>
                            <Link>read more</Link>
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <i className="fas fa-toilet icon"></i>
                            <h2>Maintenance</h2>
                            <p> Get expert advice on how to design a garden.</p>
                            <Link>read more</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2> We handle everything for you</h2>
                        <p>
                            We at The Gardeny are proud to offer carefully
                            designed landscapes crafted to suit our commercial
                            clients’ preferences while prioritizing
                            sustainability.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4 text-center">
                        <h2>40</h2>
                        <h3>Years</h3>
                        <h4>Experience</h4>
                        <p> Delivering solutions for your garden.</p>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                        <h2>30</h2>
                        <h3>Specialists</h3>
                        <h4>In landscaping design</h4>
                        <p>
                            {" "}
                            We gather the best talent, creating the best
                            specialist team.
                        </p>
                        <Link>About us</Link>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                        <h2>15</h2>
                        <h3>Awards</h3>
                        <h4>Winning company</h4>
                        <p> Best garden designs works for your inspiration.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid beige-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2> Works</h2>
                            <span className="mx-1">
                                <Link>All</Link>
                            </span>
                            <span className="mx-1">
                                <Link>Gardens</Link>
                            </span>
                            <span className="mx-1">
                                <Link>Interiors</Link>
                            </span>
                            <span className="mx-1">
                                <Link>Maintenance</Link>
                            </span>
                            <span className="mx-1">
                                <Link>Urban</Link>
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="portfolio my-3">
                                <div className="portfolio-image">
                                    <img
                                        className="rounded img-fluid "
                                        src="https://landscaping.vamtam.com/wp-content/uploads/2017/01/before-630x573.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details">
                                    <h3>Somerest</h3>
                                    <p>
                                        Mirum est notare quam littera gothica,
                                        quam nunc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="portfolio my-3">
                                <div className="portfolio-image">
                                    <img
                                        className="rounded img-fluid "
                                        src="https://landscaping.vamtam.com/wp-content/uploads/2017/01/before-630x573.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details">
                                    <h3>Somerest</h3>
                                    <p>
                                        Mirum est notare quam littera gothica,
                                        quam nunc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="portfolio my-3">
                                <div className="portfolio-image">
                                    <img
                                        className="rounded img-fluid "
                                        src="https://landscaping.vamtam.com/wp-content/uploads/2017/01/before-630x573.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details">
                                    <h3>Somerest</h3>
                                    <p>
                                        Mirum est notare quam littera gothica,
                                        quam nunc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="portfolio my-3">
                                <div className="portfolio-image">
                                    <img
                                        className="rounded img-fluid "
                                        src="https://landscaping.vamtam.com/wp-content/uploads/2017/01/before-630x573.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details">
                                    <h3>Somerest</h3>
                                    <p>
                                        Mirum est notare quam littera gothica,
                                        quam nunc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="portfolio my-3">
                                <div className="portfolio-image">
                                    <img
                                        className="rounded img-fluid "
                                        src="https://landscaping.vamtam.com/wp-content/uploads/2017/01/before-630x573.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details">
                                    <h3>Somerest</h3>
                                    <p>
                                        Mirum est notare quam littera gothica,
                                        quam nunc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="portfolio my-3">
                                <div className="portfolio-image">
                                    <img
                                        className="rounded img-fluid "
                                        src="https://landscaping.vamtam.com/wp-content/uploads/2017/01/before-630x573.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details">
                                    <h3>Somerest</h3>
                                    <p>
                                        Mirum est notare quam littera gothica,
                                        quam nunc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
