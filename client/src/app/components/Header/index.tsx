"use client";
import useScroll from "@/app/hooks/useScroll";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const scroll = useScroll();

  return (
    <header
      className={clsx(
        "navbar navbar-expand-lg navbar-light bg-white fixed-top",
        scroll > 0 && "navbar-stuck"
      )}
    >
      <div className="container">
        <Link href="/" className="navbar-brand me-3 me-xl-4">
          <Image
            src="/logo.svg"
            alt="Finded"
            width={116}
            height={32}
            className="d-block"
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler ms-auto collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          arira-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <button
          type="button"
          className="btn btn-sm text-primary d-none d-lg-block order-lg-3"
        >
          <i className="me-2 fi-user"></i>
          Sign in
        </button>
        <Link
          href="/profile/properties/new"
          className="btn btn-primary btn-sm ms-2 d-flex align-items-center order-lg-3"
        >
          <i className="me-2 fi-plus"></i>
          <span>
            Add <span className="d-none d-sm-inline-block">property</span>
          </span>
        </Link>
        <div className="navbar-collapse collapse order-lg-2" id="navbar">
          <ul
            className="navbar-nav navbar-nav-scroll"
            style={{ maxHeight: "35rem" }}
          >
            <li className="nav-item">
              <Link href="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/properties" className="nav-link">
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item d-lg-none">
              <button className="nav-link" type="button">
                <i className="me-2 fi-user"></i>
                Sign in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
