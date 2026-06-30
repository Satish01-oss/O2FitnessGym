import Footer from "../layout/Footer";
import FadeWrapper from "../ui/FadeWrapper";

const Membership = ({ phone }) => {
  return (
    <>

      {/* PLANS */}
      <FadeWrapper>
      {/* HERO */}
      <section className="py-28 bg-[#120d1f] text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400">
          MEMBERSHIP PLANS
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          Choose the plan that fits your fitness journey
        </p>
      </section>

        <section className="py-24 bg-[#0f0b1a]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* BASIC */}
            <div className="bg-[#1c142b] p-8 rounded-xl text-center hover:-translate-y-2 transition">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Basic</h2>

              <p className="text-4xl font-extrabold mb-4 text-white">
                ₹999<span className="text-lg">/month</span>
              </p>

              <ul className="space-y-3 text-gray-300 mb-6">
                <li>✔ Access to gym equipment</li>
                <li>✔ Free locker usage</li>
                <li>✖ Personal trainer</li>
              </ul>

              <a
                href={`https://wa.me/${phone}?text=Hello I am interested in Basic Plan`}
                target="_blank"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold inline-block"
              >
                Choose Plan
              </a>
            </div>

            {/* STANDARD (HIGHLIGHTED) */}
            <div className="bg-yellow-400 text-black p-8 rounded-xl text-center scale-105 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Standard</h2>

              <p className="text-4xl font-extrabold mb-4">
                ₹1499<span className="text-lg">/month</span>
              </p>

              <ul className="space-y-3 mb-6">
                <li>✔ Gym + Cardio</li>
                <li>✔ Group Classes</li>
                <li>✔ Diet Guidance</li>
              </ul>

              <a
                href={`https://wa.me/${phone}?text=Hello I am interested in Standard Plan`}
                target="_blank"
                className="bg-black text-yellow-400 px-6 py-3 rounded-full font-semibold inline-block"
              >
                Most Popular
              </a>
            </div>

            {/* PREMIUM */}
            <div className="bg-[#1c142b] p-8 rounded-xl text-center hover:-translate-y-2 transition">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Premium</h2>

              <p className="text-4xl font-extrabold mb-4 text-white">
                ₹2499<span className="text-lg">/month</span>
              </p>

              <ul className="space-y-3 text-gray-300 mb-6">
                <li>✔ All Access</li>
                <li>✔ Personal Trainer</li>
                <li>✔ Custom Diet Plan</li>
              </ul>

              <a
                href={`https://wa.me/${phone}?text=Hello I am interested in Premium Plan`}
                target="_blank"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold inline-block"
              >
                Choose Plan
              </a>
            </div>

          </div>
        </section>
      </FadeWrapper>

      {/* CTA */}
      <section className="py-24 bg-linear-to-r from-yellow-500 to-yellow-400 text-black text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Start Your Transformation Today
        </h2>

        <a
          href={`https://wa.me/${phone}`}
          target="_blank"
          className="bg-black text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:scale-110 transition"
        >
          JOIN NOW
        </a>
      </section>

      <Footer />
    </>
  );
};

export default Membership;