import Footer from "../layout/Footer";
import FadeWrapper from "../ui/FadeWrapper";

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="py-28 bg-[#120d1f] text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400">
          ABOUT O² FITNESS GYM
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Where Transformation Begins
        </p>
      </section>

      {/* OUR STORY */}
      <FadeWrapper>
        <section className="py-20 bg-[#0f0b1a]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Our Story
            </h2>
            <p className="text-gray-300 leading-relaxed">
              O² Fitness Gym was founded with a simple vision: to create a space
              where anyone, regardless of fitness level, can transform their life.
              We believe fitness is not just about physical strength, but about
              discipline, confidence, and long-term health.
            </p>
          </div>
        </section>
      </FadeWrapper>

      {/* OUR MISSION */}
      <FadeWrapper>
        <section className="py-20 bg-[#120d1f]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to empower individuals to achieve their fitness goals
              through expert guidance, modern facilities, and a supportive
              community. We are committed to helping you become the best
              version of yourself.
            </p>
          </div>
        </section>
      </FadeWrapper>

      {/* TRAINER */}
      <FadeWrapper>
        <section className="py-24 bg-[#0f0b1a]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1676655079738-af54dfd6318e"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                Meet The Trainer
              </h2>

              <h3 className="text-2xl text-yellow-400 mb-4">
                Certified Fitness Expert
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Our head trainer brings over 10 years of experience in fitness,
                bodybuilding, and nutrition. With multiple certifications and
                a passion for transforming lives, our trainer has helped
                hundreds achieve their goals through personalized programs.
              </p>
            </div>

          </div>
        </section>
      </FadeWrapper>

      {/* FACILITIES */}
      <FadeWrapper>
        <section className="py-24 bg-[#120d1f]">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-yellow-400 text-center mb-16">
              OUR FACILITIES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-6">

              {[
                "✔ Modern gym equipment and machines",
                "✔ Spacious workout area with ventilation",
                "✔ Separate training zones for cardio & weights",
                "✔ Flexible timing – Morning & evening batches",
                "✔ Regular equipment maintenance & upgrades"
              ].map((item, i) => (
                <div key={i} className="bg-[#1c142b] p-6 rounded-lg">
                  {item}
                </div>
              ))}

            </div>

          </div>
        </section>
      </FadeWrapper>

      <Footer />
    </>
  );
};

export default About;