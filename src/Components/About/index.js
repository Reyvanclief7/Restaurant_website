import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
    return (
        <div className="container-xxl py-5">
        <div id ="about" className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="img/about-1.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="img/about-2.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="img/about-3.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="img/about-4.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                {about.title}
              </h5>
              <h1 className="mb-4">
                {about.teks1} <i className="fa fa-utensils text-primary me-2" />
                {/* {about.teks0} */}
              </h1>
              <p className="mb-4">
                {about.teks2}
              </p>
              <p className="mb-4">
                {about.teks3}
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      data-toggle="counter-up"
                    >
                      {about.number1}
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">{about.teks4}</p>
                      <h6 className="text-uppercase mb-0">{about.teks5}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      data-toggle="counter-up"
                    >
                      {about.number2}
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">{about.teks6}</p>
                      <h6 className="text-uppercase mb-0">{about.teks7}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href>
                {about.teks8}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About