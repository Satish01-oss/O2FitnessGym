import FadeWrapper from "../ui/FadeWrapper";

const Testimonials = () => {
  return (
    <FadeWrapper>
      <section className="py-24 bg-[#120d1f]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl text-yellow-400 text-center mb-16">
            WHAT OUR MEMBERS SAY
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              ["O² Fitness Gym transformed my life! Lost 15kg in 4 months.","Rajesh Kumar"],
              ["Best gym in the area! The trainers are professional.","Priya Sharma"],
              ["Joined 6 months ago and never looked back.","Amit Das"]
            ].map(([text,name],i)=>(
              <div key={i} className="bg-[#1c142b] p-8 rounded-xl">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-300 italic mb-6">"{text}"</p>
                <p className="text-yellow-400">- {name}</p>
              </div>
            ))}

          </div>

        </div>

      </section>
    </FadeWrapper>
  );
};

export default Testimonials;