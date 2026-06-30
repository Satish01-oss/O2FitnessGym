const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-[#1c142b] rounded-2xl p-6 shadow-lg border border-gray-800">
      <h3 className="text-gray-400 mb-3 text-lg">{title}</h3>

      <p className="text-4xl font-extrabold text-yellow-400">
        {value}
      </p>
    </div>
  );
};

export default StatsCard;