import Hero from "../home/Hero";
import Services from "../home/Services";
import Results from "../home/Results";
import Testimonials from "../home/Testimonials";
import CTA from "../home/CTA";
import Footer from "../layout/Footer";

const Home = ({ phone }) => {
  return (
    <>
      <Hero phone={phone} />
      <Services />
      <Results />
      <Testimonials />
      <CTA phone={phone} />
      <Footer />
    </>
  );
};

export default Home;