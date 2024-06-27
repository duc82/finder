"use client";

export default function RecentlyAdded() {
  return (
    <section className="container pb-4 pt-1 mb-5">
      <div className="d-flex align-items-end align-items-lg-center justify-content-between mb-4 pb-md-2">
        <div className="d-flex w-100 align-items-center justify-content-between justify-content-lg-start">
          <h2 className="h3 mb-0 me-md-4">Added today</h2>
          <div className="dropdown d-md-none" data-bs-toggle="select">
            <button
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <span className="dropdown-toggle-label">Houses</span>
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" type="button">
                <span className="dropdown-item-label">Apartments</span>
              </button>
              <button className="dropdown-item" type="button">
                <span className="dropdown-item-label">Houses</span>
              </button>
              <button className="dropdown-item" type="button">
                <span className="dropdown-item-label">Rooms</span>
              </button>
              <button className="dropdown-item" type="button">
                <span className="dropdown-item-label">Commercial</span>
              </button>
            </div>
          </div>
          <ul className="nav nav-tabs d-none d-md-flex ps-lg-2 mb-0">
            <li className="nav-item">
              <button type="button" className="nav-link fs-sm mb-2 mb-md-0">
                Apartments
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link fs-sm active mb-2 mb-md-0"
              >
                Houses
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="nav-link fs-sm mb-2 mb-md-0">
                Rooms
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="nav-link fs-sm mb-2 mb-md-0">
                Commercial
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-6">
          <div
            className="card bg-size-cover bg-position-center border-0 overflow-hidden h-100"
            style="background-image: url(img/real-estate/recent/01.jpg);"
          >
            <span className="img-gradient-overlay"></span>
            <div className="card-body content-overlay pb-0">
              <div className="d-flex">
                <span className="badge bg-success fs-sm me-2">Verified</span>
                <span className="badge bg-info fs-sm">New</span>
              </div>
            </div>
            <div className="card-footer content-overlay border-0 pt-0 pb-4">
              <div className="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                <a
                  className="text-decoration-none text-light pe-2"
                  href="real-estate-single-v1.html"
                >
                  <div className="fs-sm text-uppercase pt-2 mb-1">
                    For rental
                  </div>
                  <h3 className="h5 text-light mb-1">Luxury Rental Villa</h3>
                  <div className="fs-sm opacity-70">
                    <i className="fi-map-pin me-1"></i>118-11 Sutphin Blvd
                    Jamaica, NY 11434
                  </div>
                </a>
                <div className="btn-group ms-n2 ms-sm-0 mt-3">
                  <a
                    className="btn btn-primary px-3"
                    href="real-estate-single-v1.html"
                    style="height: 2.75rem;"
                  >
                    From $3,850
                  </a>
                  <button
                    className="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm"
                    type="button"
                  >
                    <i className="fi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card bg-size-cover bg-position-center border-0 overflow-hidden mb-4"
            style="background-image: url(img/real-estate/recent/02.jpg);"
          >
            <span className="img-gradient-overlay"></span>
            <div className="card-body content-overlay pb-0">
              <span className="badge bg-info fs-sm">New</span>
            </div>
            <div className="card-footer content-overlay border-0 pt-0 pb-4">
              <div className="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                <a
                  className="text-decoration-none text-light pe-2"
                  href="real-estate-single-v1.html"
                >
                  <div className="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                  <h3 className="h5 text-light mb-1">Duplex with Garage</h3>
                  <div className="fs-sm opacity-70">
                    <i className="fi-map-pin me-1"></i>21 Pulaski Road Kings
                    Park, NY 11754
                  </div>
                </a>
                <div className="btn-group ms-n2 ms-sm-0 mt-3">
                  <a
                    className="btn btn-primary px-3"
                    href="real-estate-single-v1.html"
                    style="height: 2.75rem;"
                  >
                    $200,410
                  </a>
                  <button
                    className="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm"
                    type="button"
                  >
                    <i className="fi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card bg-size-cover bg-position-center border-0 overflow-hidden"
            style="background-image: url(img/real-estate/recent/03.jpg);"
          >
            <span className="img-gradient-overlay"></span>
            <div className="card-body content-overlay pb-0">
              <span className="badge bg-info fs-sm">New</span>
            </div>
            <div className="card-footer content-overlay border-0 pt-0 pb-4">
              <div className="d-sm-flex justify-content-between align-items-end pt-5 mt-2 mt-sm-5">
                <a
                  className="text-decoration-none text-light pe-2"
                  href="real-estate-single-v1.html"
                >
                  <div className="fs-sm text-uppercase pt-2 mb-1">For sale</div>
                  <h3 className="h5 text-light mb-1">Country House</h3>
                  <div className="fs-sm opacity-70">
                    <i className="fi-map-pin me-1"></i>6954 Grand AveMaspeth, NY
                    11378
                  </div>
                </a>
                <div className="btn-group ms-n2 ms-sm-0 mt-3">
                  <a
                    className="btn btn-primary px-3"
                    href="real-estate-single-v1.html"
                    style="height: 2.75rem;"
                  >
                    $162,000
                  </a>
                  <button
                    className="btn btn-primary btn-icon border-end-0 border-top-0 border-bottom-0 border-light fs-sm"
                    type="button"
                  >
                    <i className="fi-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
