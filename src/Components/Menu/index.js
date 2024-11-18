import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const menuRef = ref(db, "menu");
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      setMenu(data);
  });
  }, []);
    return (
        <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              {menu.title}
            </h5>
            <h1 className="mb-5">{menu.teks1}</h1>
          </div>
          <div
            className="tab-class text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <i className="fa fa-coffee fa-2x text-primary" />
                  {/* <div className="ps-3">
                    <small className="text-body">{menu.teks2}</small>
                    <h6 className="mt-n1 mb-0">{menu.teks3}</h6>
                  </div> */}
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-1.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.menu1}</span>
                          <span className="text-primary">{menu.harga1}</span>
                        </h5>
                        <small className="fst-italic">
                          {/* isi */}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-2.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.menu2}</span>
                          <span className="text-primary">{menu.harga2}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-3.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.menu3}</span>
                          <span className="text-primary">{menu.harga3}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-4.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.menu4}</span>
                          <span className="text-primary">{menu.harga4}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-5.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.menu5}</span>
                          <span className="text-primary">{menu.harga5}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-6.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.menu6}</span>
                          <span className="text-primary">{menu.Harga6}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-7.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.menu7}</span>
                          <span className="text-primary">{menu.harga7}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-8.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.menu8}</span>
                          <span className="text-primary">{menu.Harga8}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-1.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-2.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-3.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-4.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-5.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-6.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-7.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-8.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-1.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-2.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-3.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-4.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-5.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-6.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-7.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-8.jpg"
                        alt
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{menu.teks8}</span>
                          <span className="text-primary">{menu.teks9}</span>
                        </h5>
                        <small className="fst-italic">
                          {/*isi*/}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Menu