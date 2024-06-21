import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Buy a property",
      image: {
        src: "/buy.svg",
        alt: "Buy"
      },
      description:
        "Blandit lorem dictum in velit. Et nisi at faucibus mauris pretium enim. Risus sapien nisi aliquam egestas leo dignissim.",
      link: {
        href: "/",
        label: "Find a home"
      }
    },
    {
      title: "Sell a property",
      image: {
        src: "/sell.svg",
        alt: "Sell"
      },
      description:
        "Amet, cras orci justo, tortor nisl aliquet. Enim tincidunt tellus nunc, nulla arcu posuere quis. Velit turpis orci venenatis.",
      link: {
        href: "/",
        label: "Place an ad"
      }
    },
    {
      title: "Rent a property",
      image: {
        src: "/rent.svg",
        alt: "Rent"
      },
      description:
        "Sed sed aliquet sed id purus malesuada congue viverra. Habitant quis lacus, volutpat natoque ipsum iaculis cursus.",
      link: {
        href: "/",
        label: "Find a rental"
      }
    }
  ];

  return (
    <section className="container mb-5 mt-n3 mt-lg-0">
      <div className="row">
        {services.map((service, i) => (
          <div className="col-12 col-lg-4" key={i}>
            <div className="card card-hover border-0 h-100 pb-2 pb-sm-3 px-sm-3 text-center">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-100 d-block mx-auto my-3"
              />
              <div className="card-body">
                <h2 className="h4 card-title">{service.title}</h2>
                <p className="card-text fs-sm">{service.description}</p>
              </div>
              <div className="card-footer pt-0 border-0">
                <Link
                  className="btn btn-outline-primary"
                  href={service.link.href}
                >
                  {service.link.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
