import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const teamRef = ref(db, "team");
    onValue(teamRef, (snapshot) => {
      const data = snapshot.val();
      setTeam(data);
    });
  }, []);
  return (
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {team.tim}
          </h5>
          <h1 className="mb-5">{team.mmber}</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src={`data:image/jpeg;base64,${team.foto1}`} alt="1" />
              </div>
              <h5 className="mb-0">{team.org1}</h5>
              {/* <small>Designation</small> */}
              <div className="d-flex justify-content-center mt-3">
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src={`data:image/jpeg;base64,${team.foto2}`} alt />
              </div>
              <h5 className="mb-0">{team.org2}</h5>
              {/* <small>Designation</small> */}
              <div className="d-flex justify-content-center mt-3">
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src={`data:image/jpeg;base64,${team.foto3}`} alt />
              </div>
              <h5 className="mb-0">{team.org3}</h5>
              {/* <small>Designation</small> */}
              <div className="d-flex justify-content-center mt-3">
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src={`data:image/jpeg;base64,${team.foto4}`} alt />
              </div>
              <h5 className="mb-0">{team.org4}</h5>
              {/* <small>Designation</small> */}
              <div className="d-flex justify-content-center mt-3">
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-square btn-primary mx-1" href>
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
