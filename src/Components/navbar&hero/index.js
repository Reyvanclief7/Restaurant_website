import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const NavHero = () => {
  const [navHero, setNavHero] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const navHeroRef = ref(db, "navHero");
    onValue(navHeroRef, (snapshot) => {
      const data = snapshot.val();
      setNavHero(data);
    });
  }, []);
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <a href className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3" />
            {navHero.title}
          </h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <a href="index.html" className="nav-item nav-link active">
              {navHero.home}
            </a>
            <a href="about.html" className="nav-item nav-link">
              {navHero.about}
            </a>
            <a href="service.html" className="nav-item nav-link">
              {navHero.service}
            </a>
            <a href="menu.html" className="nav-item nav-link">
              {navHero.menu}
            </a>
            <a href="contact.html" className="nav-item nav-link">
              {navHero.contact}
            </a>
          </div>
          <a href className="btn btn-primary py-2 px-4">
            {navHero.booking}
          </a>
        </div>
      </nav>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                {navHero.text1}
                <br />
                {navHero.text2}
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                {navHero.text3}
              </p>
              <a
                href
                className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                {navHero.booking}
              </a>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src="img/hero.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHero;
