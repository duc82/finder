import Hero from "./components/Home/Hero";
import PropertyCategories from "./components/Home/PropertyCategories";
import RecentlyAdded from "./components/Home/RecentlyAdded";
import Services from "./components/Home/Services";
import TopOffers from "./components/Home/TopOffers";

export default function Home() {
  return (
    <>
      <Hero />
      <PropertyCategories />
      <Services />
      <TopOffers />
      <RecentlyAdded />
    </>
  );
}
