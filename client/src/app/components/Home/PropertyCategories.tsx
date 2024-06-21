import clsx from "clsx";
import Link from "next/link";

export default function PropertyCategories() {
  const categories = [
    {
      title: "Houses",
      icon: "fi-real-estate-house",
      link: "/"
    },
    {
      title: "Apartments",
      icon: "fi-apartment",
      link: "/"
    },
    {
      title: "Commercial",
      icon: "fi-shop",
      link: "/"
    },
    {
      title: "Daily rental",
      icon: "fi-rent",
      link: "/"
    },
    {
      title: "New buildings",
      icon: "fi-house-chosen",
      link: "/"
    },
    {
      title: "More",
      icon: "fi-dots-horisontal",
      link: "#",
      dropdowns: [
        {
          title: "Room",
          icon: "fi-single-bed",
          link: "/"
        },
        {
          title: "Office",
          icon: "fi-computer",
          link: "/"
        },
        {
          title: "Land",
          icon: "fi-real-estate-buy",
          link: "/"
        },
        {
          title: "Parking lot",
          icon: "fi-parking",
          link: "/"
        }
      ]
    }
  ];

  return (
    <section className="container mb-5">
      <div className="row row-cols-lg-6 row-cols-sm-3 row-cols-2 g-3 g-xl-4">
        {categories.map((category, i) => (
          <div className="col" key={i}>
            <Link
              className="icon-box card card-body h-100 border-0 shadow-sm card-hover h-100 text-center"
              href={category.link}
              data-bs-toggle={category.dropdowns ? "dropdown" : ""}
            >
              <div className="icon-box-media bg-faded-primary text-primary rounded-circle mb-3 mx-auto">
                <i className={category.icon}></i>
              </div>
              <h3 className="icon-box-title mb-0">{category.title}</h3>
            </Link>
            {category.dropdowns && (
              <div
                className="dropdown-menu dropdown-menu-end my-1"
                data-popper-placement="bottom-end"
              >
                {category.dropdowns.map((dropdown, j) => (
                  <Link
                    key={j}
                    className="dropdown-item fw-bold"
                    href={dropdown.link}
                  >
                    <i
                      className={clsx(dropdown.icon, "fs-base opacity-60 me-2")}
                    ></i>
                    {dropdown.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
