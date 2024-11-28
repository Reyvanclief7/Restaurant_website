import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Service = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const serviceRef = ref(db, "service");
    onValue(serviceRef, (snapshot) => {
      const data = snapshot.val();
      setService(data);
  });
  }, []);
    return (
      <div id="service" className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-tie text-primary mb-4" />
                  <h5>{service.title}</h5>
                  <p>
                    {service.ket}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-utensils text-primary mb-4" />
                  <h5>{service.title2}</h5>
                  <p>
                    {service.ket2}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cart-plus text-primary mb-4" />
                  <h5>{service.title3}</h5>
                  <p>
                    {service.ket3}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-headset text-primary mb-4" />
                  <h5>{service.title4}</h5>
                  <p>
                    {service.ket4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Service