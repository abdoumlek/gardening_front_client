import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <div className="home__welcome">
        <div className="container-fluid Home__welcome-container">
          <div className="text-container mt-lg-4">
            <h1 className="Home__title">Plantes & jardins</h1>
            <p className="Home__paragraph">
              Un beau jardin pour une belle maison
            </p>
            <Link
              className="btn btn-outline-light Home__bnt-about-us"
              type="submit"
              to="/contacts"
            >
              Demander un devis
            </Link>
          </div>
        </div>
        <div className="container welcome__services">
          <div className="row services p-5">
            <div className="col-12 col-lg-4 text-center services-details">
              <img
                src={require("../../assets/img/garden.svg")}
                alt="garden"
                className="icon"
              ></img>
              <h2 className="mt-3">Jardins</h2>
              <p>
                Nous vous proposons une transformation total de votre jardin en
                prenant soin de toutes vos demandes
              </p>
              <Link to="/contacts" className="plus-link">
                Demander un devis
              </Link>
            </div>
            <div className="col-12 col-lg-4 text-center services-details">
              <img
                src={require("../../assets/img/plant.svg")}
                alt="plant"
                className="icon"
              ></img>
              <h2 className="mt-3">Produits</h2>
              <p>
                Nous vous proposons une larges collections d'arbres, fleurs et
                d'outils de jardinage
              </p>
              <Link to="/products" className="plus-link">
                En savoir plus
              </Link>
            </div>
            <div className="col-12 col-lg-4 text-center services-details">
              <img
                src={require("../../assets/img/shovel.svg")}
                alt="entretien"
                className="icon"
              ></img>
              <h2 className="mt-3">Entretien</h2>
              <p>
                Nous vous proposons d'entrenir votre jardin pour qu'il garde sa
                splendeur toute l'année
              </p>
              <Link to="/contacts" className="plus-link">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h2>
              Des offres vertes et fleuries pour votre extérieur et intérieur
            </h2>
            <p>
              Beaucoup de clients nous ont déjà fait confiance et nous ont
              authorisé à vous donner un apeçu des transformations faites sur
              leurs jardin.
            </p>
            <p>N'hésiter plus demander vous aussi un devis c'est GRATUIT</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-lg-4 text-center card services-details">
            <h3 className="text-dec mb-3">100 </h3>
            <h4>Clients satisfaits par nos services</h4>
            <p className="services-text text-justify">
              Nous réalierons au mieux la transformation désiré de votre jardin
            </p>
            <Link to="/contacts" className="plus-link">
              Demander un devis
            </Link>
          </div>
          <div className="col-12 col-lg-4 text-center card services-details">
            <h3 className="text-dec mb-3">200 </h3>
            <h4>Plantes de différentes tailles</h4>
            <p className="services-text text-justify">
              Une large collections pour trouvez dont vous avez envie
            </p>
            <Link to="/products" className="plus-link">
              En savoir plus
            </Link>
          </div>
          <div className="col-12 col-lg-4 text-center card services-details">
            <h3 className="text-dec mb-3">14 </h3>
            <h4>Jours suffisent pour transformer votre jardin*</h4>
            <p className=" services-text text-justify">
              Une transformation total dans le plus court des délais*
            </p>
            <Link to="/contacts" className="plus-link">
              Demander un devis
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <p className="small-text">(*) pour un jardin de taille moyenne ne dépassants pas le 10m²</p>
            </div></div>
      </div>
      <div className="container-fluid beige-block mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center p-5">
              <h2> Quelques transformations faites par nos soins</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="portfolio my-3">
                <div className="portfolio-image text-center">
                  <img
                    className="rounded img-fluid "
                    src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/oscar-ochoa-WDGfsUO3ZSI-unsplash_VASF0Pf6Pnb2.jpg"
                    alt="Somerest"
                  />
                </div>
                <div className="portfolio-details text-center pt-5">
                  <h3>Somerest</h3>
                  <p>Mirum est notare quam littera gothica, quam nunc.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="portfolio my-3">
                <div className="portfolio-image text-center">
                  <img
                    className="rounded img-fluid"
                    src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/tim-cooper-XfqGuWevmvs-unsplash_blxI5AEGaj4.jpg"
                    alt="Somerest"
                  />
                </div>
                <div className="portfolio-details text-center pt-5">
                  <h3>Somerest</h3>
                  <p>Mirum est notare quam littera gothica, quam nunc.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="portfolio my-3">
                <div className="portfolio-image text-center">
                  <img
                    className="rounded img-fluid "
                    src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/shekhar-chandra-sahu-72P_hMW2l_g-unsplash_6Md5qI8a-.jpg"
                    alt="Somerest"
                  />
                </div>
                <div className="portfolio-details text-center pt-5">
                  <h3>Somerest</h3>
                  <p>Mirum est notare quam littera gothica, quam nunc.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="portfolio my-3">
                <div className="portfolio-image text-center">
                  <img
                    className="rounded img-fluid "
                    src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/victor-malyushev-w_N-XCjiM0o-unsplash_WzsP1K6EFrl.jpg"
                    alt="Somerest"
                  />
                </div>
                <div className="portfolio-details text-center pt-5">
                  <h3>Somerest</h3>
                  <p>Mirum est notare quam littera gothica, quam nunc.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="portfolio my-3">
                <div className="portfolio-image text-center">
                  <img
                    className="rounded img-fluid "
                    src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/paul-bonnar-JvtlFH37LRk-unsplash_trOww5dG06.jpg"
                    alt="Somerest"
                  />
                </div>
                <div className="portfolio-details text-center pt-5">
                  <h3>Somerest</h3>
                  <p>Mirum est notare quam littera gothica, quam nunc.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="portfolio my-3">
                <div className="portfolio-image text-center">
                  <img
                    className="rounded img-fluid "
                    src="https://ik.imagekit.io/cjvyejrxtm/tr:w-400,h-400/mitchell-luo-s56fh3HWPow-unsplash_KKB1BERBM.jpg"
                    alt="Somerest"
                  />
                </div>
                <div className="portfolio-details text-center pt-5">
                  <h3>Somerest</h3>
                  <p>Mirum est notare quam littera gothica, quam nunc.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mb-5">
              {/* <button
                className="btn btn-primary Home__btn-galery "
                type="submit"
              >
                Afficher plus
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
