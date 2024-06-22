import Link from "next/link";
import Image from "next/image";
import { Pagination, Swiper, SwiperSlide } from "../Swiper";

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
        modules={[Pagination]}
      >
        <SwiperSlide className="card shadow-sm card-hover border-0 h-100">
          <div className="card-img-top ca rd-img-hover">
            <Link href="/" className="img-overlay"></Link>
            <div className="position-absolute start-0 top-0 pt-3 ps-3"></div>
            <div className="content-overlay end-0 top-0 pt-3 pe-3"></div>
            <Image
              src="/01.jpg"
              alt={"01"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
