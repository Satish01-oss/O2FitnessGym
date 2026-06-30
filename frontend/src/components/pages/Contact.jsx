import Footer from "../layout/Footer";
import FadeWrapper from "../ui/FadeWrapper";

const Contact = ({ phone }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const number = e.target.phone.value;
    const msg = e.target.message.value;

    const text = `Hello O² Fitness Gym,%0A%0AMy Name: ${name}%0APhone: ${number}%0AMessage: ${msg}`;

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* HERO */}
      <section className="py-28 bg-[#120d1f] text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400">
          GET IN TOUCH
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          Visit Us Today and Start Your Transformation
        </p>
      </section>

      {/* CONTACT SECTION */}
      <FadeWrapper>
        <section className="py-24 bg-[#0f0b1a]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT: FORM */}
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                Send Us A Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full p-4 rounded bg-[#1c142b] text-white"
                />

                <input
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 rounded bg-[#1c142b] text-white"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your fitness goals..."
                  required
                  className="w-full p-4 rounded bg-[#1c142b] text-white"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-4 rounded-full font-semibold hover:scale-105 transition"
                >
                  SEND MESSAGE
                </button>

              </form>
            </div>

            {/* RIGHT: INFO */}
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 text-gray-300">

                <p>
                  <strong className="text-yellow-400">Address:</strong><br />
                  Siliguri, West Bengal, India
                </p>

                <p>
                  <strong className="text-yellow-400">Phone:</strong><br />
                  +91 9XXXXXXXXX
                </p>

                <p>
                  <strong className="text-yellow-400">Email:</strong><br />
                  info@o2fitnessgym.com
                </p>

                <p>
                  <strong className="text-yellow-400">Business Hours:</strong><br />
                  Mon-Sat: 5:00 AM – 10:00 PM<br />
                  Sunday: 6:00 AM – 2:00 PM
                </p>

              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                className="block mt-8 bg-green-500 text-white text-center py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Chat on WhatsApp
              </a>

            </div>

          </div>
        </section>
      </FadeWrapper>

      {/* GOOGLE MAP */}
      <section>
        <iframe
          src="https://www.google.com/maps?q=Siliguri&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </>
  );
};

export default Contact;