import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
    return (
        <div>
            <div className="home__welcome">
                <div className="container-fluid Home__welcome-container">
                    <div className="text-container">
                        <h1 className="Home__title">Plantes & jardins</h1>
                        <p className="Home__paragraph">
                            consectetur adipisicing elit. Possimus magnam quo
                            asperiores saepe, quas culpa ipsum.
                        </p>
                        <button
                            className="btn btn-outline-light Home__bnt-about-us"
                            type="submit"
                        >
                            A propos
                        </button>
                        <button
                            className="btn btn-primary Home__bnt-request"
                            type="submit"
                        >
                            Demander un devis
                        </button>
                    </div>
                </div>
                <div className="container welcome__services">
                    <div className="row services p-5">
                        <div className="col-12 col-lg-4 text-center">
                            <i className="fas fa-home icon"></i>
                            <h2>Jardins</h2>
                            <p>
                                {" "}
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </p>
                            <Link to="/">En savoir plus</Link>
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <i className="fas fa-city icon"></i>
                            <h2>Produits</h2>
                            <p>
                                {" "}
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </p>
                            <Link to="/">En savoir plus</Link>
                        </div>
                        <div className="col-12 col-lg-4 text-center">
                            <i className="fas fa-toilet icon"></i>
                            <h2>Entretien</h2>
                            <p>
                                {" "}
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </p>
                            <Link to="/">En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5">
                        <h2>
                            {" "}
                            Des offres vertes et fleuries pour votre extérieur
                        </h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Possimus magnam quo asperiores saepe, quas
                            culpa ipsum repellat facilis odio natus expedita
                            nulla porro tenetur. Blanditiis nisi atque dolorum
                            sint odio!
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-lg-4 text-center ">
                        <h2> 100</h2>
                        <h3>Clients </h3>
                        <h4>satisfaits par nos services</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                        <h2> 200</h2>
                        <h3>Plantes</h3>
                        <h4>de différentes tailles</h4>
                        <p>
                            {" "}
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.
                        </p>
                        <Link to="/">En savoir plus</Link>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                        <h2>14</h2>
                        <h3>Jours</h3>
                        <h4>Suffisent pour transformer votre jardin</h4>
                        <p>
                            {" "}
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.
                        </p>
                        <Link to="/">Demander un devis</Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid beige-block mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center p-5">
                            <h2> Galerie</h2>
                            <span className="mx-1">
                                <Link to="/">Tout</Link>
                            </span>
                            <span className="mx-1">
                                <Link to="/">Jardins</Link>
                            </span>
                            <span className="mx-1">
                                <Link to="/">Plantes d'intérieurs</Link>
                            </span>
                            <span className="mx-1">
                                <Link to="/">Plantes d'extérieur</Link>
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="portfolio my-3">
                                <div className="portfolio-image">
                                    <img
                                        className="rounded img-fluid "
                                        src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/oscar-ochoa-WDGfsUO3ZSI-unsplash_VASF0Pf6Pnb2.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details text-center pt-5">
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
                                        src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/tim-cooper-XfqGuWevmvs-unsplash_blxI5AEGaj4.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details text-center pt-5">
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
                                        src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/shekhar-chandra-sahu-72P_hMW2l_g-unsplash_6Md5qI8a-.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details text-center pt-5">
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
                                        src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/victor-malyushev-w_N-XCjiM0o-unsplash_WzsP1K6EFrl.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details text-center pt-5">
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
                                        src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/paul-bonnar-JvtlFH37LRk-unsplash_trOww5dG06.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details text-center pt-5">
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
                                        src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/mitchell-luo-s56fh3HWPow-unsplash_KKB1BERBM.jpg"
                                        alt="Somerest"
                                    />
                                </div>
                                <div className="portfolio-details text-center pt-5">
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
        </div>
    );
}
