import Section from "../component/Section";
import BrowseStyle from "../component/BrowseStyle";
import Testimonials from "../component/Testimonials";
import Newsletter from "../component/Newsletter";
import ProductCard from "../component/ProductCard";
import NewArrivalsProduct from "../component/NewArrivalsProduct";

export default function Home() {
  return (
    <>
      <div className="mr-5 ml-5">
        <NewArrivalsProduct />
        <Section title="TOP SELLING" />
        
        <Testimonials />
      </div>
      <Newsletter />
    </>
  );
}
