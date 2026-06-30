const Hero = ({ phone }) => {
  return (
    <section className="relative h-screen flex items-center">

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581009137042-c552e485697a"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h1 className="hero-title text-5xl md:text-7xl font-extrabold text-yellow-400 leading-tight">
          TRAIN HARD.<br />
          BREATHE STRONG.<br />
          TRANSFORM YOUR LIFE.
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Join O² Fitness Gym and unlock your full potential.
        </p>

        <div className="mt-8 space-x-4">
          <a href={`https://wa.me/${phone}`} target="_blank"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition">
            JOIN NOW
          </a>

          <a href="/contact"
            className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
            CONTACT US
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;