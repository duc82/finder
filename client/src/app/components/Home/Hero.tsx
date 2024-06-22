"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "nouislider/dist/nouislider.css";
import Nouislider from "nouislider-react";

export default function Hero() {
  const [price, setPrice] = useState(250);

  return (
    <section className="container pt-5 my-5 pb-lg-4">
      <div className="row pt-0 pt-md-2 pt-lg-0">
        <div className="col-xl-7 col-lg-6 col-md-5 order-md-2 mb-4 mb-lg-3">
          <Image
            src="/hero-image.jpg"
            alt="Hero image"
            width={0}
            height={0}
            sizes="100vh"
            className="h-auto w-100"
          />
        </div>
        <div className="col-xl-5 col-lg-6 col-md-7 order-md-1 pt-xl-5 pe-lg-0 mb-3 text-md-start text-center">
          <h1 className="display-4 mt-lg-5 mb-md-4 mb-3 pt-md-4 pb-lg-2">
            Easy way to find <br /> a perfect property
          </h1>
          <p className="position-relative lead me-lg-n5">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating more than 10 years. Search
            millions of apartments and houses on Finder.
          </p>
        </div>
        <div className="col-xl-8 col-lg-10 order-3 mt-lg-n5">
          <form className="form-group d-block">
            <div className="row g-0 ms-sm-n2">
              <div className="col-md-8 d-sm-flex align-items-center">
                <div
                  className="dropdown w-sm-50 flex-fill border-sm-end"
                  data-bs-toggle="select"
                >
                  <button
                    className="btn btn-link dropdown-toggle ps-2 ps-sm-3"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="me-2 fi-home"></i>
                    <span className="dropdown-toggle-label">For rent</span>
                  </button>
                  <input type="hidden" />
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/" className="dropdown-item">
                        <span className="dropdown-item-label">For rent</span>
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <span className="dropdown-item-label">For sale</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <hr className="d-sm-none my-2" />
                <div
                  className="dropdown w-sm-50 flex-fill border-sm-end"
                  data-bs-toggle="select"
                >
                  <button
                    className="btn btn-link dropdown-toggle ps-2 ps-sm-3"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="me-2 fi-map-pin"></i>
                    <span className="dropdown-toggle-label">Location</span>
                  </button>
                  <input type="hidden" />
                  <ul className="dropdown-menu">
                    <li>
                      <button type="button" className="dropdown-item">
                        <span className="dropdown-item-label">New York</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <span className="dropdown-item-label">Chicago</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <span className="dropdown-item-label">Los Angeles</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <span className="dropdown-item-label">San Diego</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <hr className="d-sm-none my-2" />
                <div
                  className="dropdown w-sm-50 flex-fill border-sm-end"
                  data-bs-toggle="select"
                >
                  <button
                    className="btn btn-link dropdown-toggle ps-2 ps-sm-3"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="me-2 fi-list"></i>
                    <span className="dropdown-toggle-label">Property type</span>
                  </button>
                  <input type="hidden" />
                  <ul className="dropdown-menu">
                    <li>
                      <button type="button" className="dropdown-item">
                        <span className="dropdown-item-label">Houses</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <span className="dropdown-item-label">Apartments</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <span className="dropdown-item-label">Commercial</span>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <span className="dropdown-item-label">
                          Daily rental
                        </span>
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <span className="dropdown-item-label">
                          New buildings
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="d-md-none mt-2" />
              <div className="col-md-4 d-sm-flex align-items-center pt-4 pt-md-0">
                <div className="d-flex align-items-center w-100 pt-2 pb-4 py-sm-0 ps-2 ps-sm-3 text-muted">
                  <i className="fi-cash me-2 fs-5"></i>
                  <span style={{ paddingRight: "1.125rem" }}>Price</span>
                  <Nouislider
                    range={{ min: 0, max: 1000 }}
                    start={price}
                    step={1}
                    tooltips={true}
                    connect
                    className="w-100 pe-0 pe-sm-3"
                  />
                </div>
                <button
                  className="btn btn-icon btn-primary px-3 w-100 flex-shrink-0"
                  type="button"
                >
                  <i className="fi-search"></i>
                  <span className="d-sm-none d-inline-block ms-2">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
