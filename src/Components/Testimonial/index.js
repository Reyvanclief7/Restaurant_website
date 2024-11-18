import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const testimonialRef = ref(db, "testimonial");
    onValue(testimonialRef, (snapshot) => {
      const data = snapshot.val();
      setTestimonial(data);
    });
  }, []);
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {testimonial.tsti}
          </h5>
          <h1 className="mb-5">{testimonial.komen}</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>{testimonial.komen1}</p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src="img/testimonial-1.jpg"
                style={{ width: 50, height: 50 }}
              />
              <div className="ps-3">
                <h5 className="mb-1">{testimonial.nama1}</h5>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>{testimonial.komen2}</p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src="img/testimonial-2.jpg"
                style={{ width: 50, height: 50 }}
              />
              <div className="ps-3">
                <h5 className="mb-1">{testimonial.nama2}</h5>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>{testimonial.komen3}</p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src="img/testimonial-3.jpg"
                style={{ width: 50, height: 50 }}
              />
              <div className="ps-3">
                <h5 className="mb-1">{testimonial.nama3}</h5>
              </div>
            </div>
          </div>
          <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>{testimonial.komen4}</p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src="img/testimonial-4.jpg"
                style={{ width: 50, height: 50 }}
              />
              <div className="ps-3">
                <h5 className="mb-1">{testimonial.nama4}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
