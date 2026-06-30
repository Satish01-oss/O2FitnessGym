import FadeWrapper from "../ui/FadeWrapper";

const CTA = ({ phone }) => {
  return (
    <FadeWrapper>
      <section className="py-28 bg-linear-to-r from-yellow-500 to-yellow-400 text-black text-center">

        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          READY TO START YOUR FITNESS JOURNEY?
        </h2>

        <p className="mb-10">
          Join O² Fitness Gym today and transform your life!
        </p>

        <a href={`https://wa.me/${phone}`} target="_blank"
          className="bg-black text-yellow-400 px-10 py-4 rounded-full font-bold hover:scale-110 transition">
          GET STARTED NOW
        </a>

      </section>
    </FadeWrapper>
  );
};

export default CTA;