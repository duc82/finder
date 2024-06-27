"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function TopOffers() {
  return (
    <section className="container mb-5 pb-md-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="h3 mb-0">Top offers</h2>
        <Link className="btn btn-link fw-normal p-0" href="/">
          View all<i className="fi-arrow-long-right ms-2"></i>
        </Link>
      </div>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          }
        }}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        wrapperClass="pb-4 pt-3"
      >
        <SwiperSlide>
          <div className="card shadow-sm card-hover border-0 h-100">
            <div className="card-img-top card-img-hover">
              <Link href="/" className="img-overlay"></Link>
              <div className="position-absolute start-0 top-0 pt-3 ps-3 z-2">
                <span className="d-block badge bg-success mb-1">Verified</span>
                <span className="d-block badge bg-info mb-1">New</span>
                <span className="d-block badge bg-danger">Featured</span>
              </div>
              <div className="content-overlay end-0 top-0 pt-3 pe-3">
                <button
                  className="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  aria-label="Add to Wishlist"
                  data-bs-title="Add to Wishlist"
                >
                  <i className="fi-heart"></i>
                </button>
              </div>
              <Image
                src="/01.jpg"
                alt="01"
                width={0}
                height={0}
                sizes="100vw"
                className="w-100 h-auto"
              />
            </div>
            <div className="card-body position-relative pb-3">
              <span className="d-block mb-1 fs-6 text-uppercase text-primary">
                For rent
              </span>
              <h3 className="h6 mb-2 fs-base">
                <Link className="nav-link stretched-link" href="/">
                  3-bed Apartment | 67 sq.m
                </Link>
              </h3>
              <p className="mb-2 fs-sm text-muted">
                3811 Ditmars Blvd Astoria, NY 11105
              </p>
              <div className="fw-bold">
                <i className="fi-cash mt-n1 me-2 lead align-middle opacity-70"></i>
                $1,629
              </div>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-center mx-3 pt-3 text-nowrap">
              <span className="d-inline-block mx-1 px-2 fs-sm">
                3<i className="fi-bed ms-1 mt-n1 fs-lg text-muted"></i>
              </span>
              <span className="d-inline-block mx-1 px-2 fs-sm">
                2<i className="fi-bath ms-1 mt-n1 fs-lg text-muted"></i>
              </span>
              <span className="d-inline-block mx-1 px-2 fs-sm">
                2<i className="fi-car ms-1 mt-n1 fs-lg text-muted"></i>
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
