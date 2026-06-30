import FadeWrapper from "../ui/FadeWrapper";

const Services = () => {
  return (
    <FadeWrapper>
      <section className="py-24 bg-[#120d1f]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-16">
            OUR SERVICES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              ["🏋️","Weight Training","Build muscle and strength with expert-guided programs using state-of-the-art equipment."],
              ["❤️","Cardio Training","Improve endurance and burn calories with our comprehensive cardio programs."],
              ["👤","Personal Training","Get one-on-one attention from certified trainers who design custom workout plans."],
              ["🥗","Diet Guidance","Receive personalized nutrition plans and dietary advice to complement your fitness journey."]
            ].map(([icon,title,desc],i)=>(
              <div key={i} className="bg-[#1c142b] p-8 rounded-xl hover:-translate-y-2 transition duration-300">
                <div className="text-yellow-400 text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </FadeWrapper>
  );
};

export default Services;