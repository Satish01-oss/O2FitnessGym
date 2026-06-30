import FadeWrapper from "../ui/FadeWrapper";

const Results = () => {
  return (
    <FadeWrapper>
      <section className="py-24 bg-[#0f0b1a]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-16">
            REAL RESULTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              ["https://images.unsplash.com/photo-1599058917212-d750089bc07e","Weight Loss Success","Members lose an average of 10-15kg in their first 3 months."],
              ["https://images.unsplash.com/photo-1583454110551-21f2fa2afe61","Muscle Building","Build lean muscle mass with expert guidance."],
              ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b","Lifestyle Change","Transform your entire approach to health."]
            ].map(([img,title,desc],i)=>(
              <div key={i} className="bg-[#1c142b] rounded-xl overflow-hidden group hover:-translate-y-2 transition">
                <img src={img} className="w-full h-64 object-cover group-hover:scale-110 transition"/>
                <div className="p-6">
                  <h3 className="text-yellow-400">{title}</h3>
                  <p className="text-gray-300 text-sm">{desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </section>
    </FadeWrapper>
  );
};

export default Results;