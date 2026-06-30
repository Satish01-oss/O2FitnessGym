import StatsCard from "../components/StatsCard";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-10">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Members" value="245" />
        <StatsCard title="Active Plans" value="3" />
        <StatsCard title="Monthly Revenue" value="₹85K" />
      </div>

      <div className="mt-12 bg-[#1c142b] rounded-2xl p-8 border border-gray-800">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4 text-gray-300">
          <div className="bg-[#120d1f] p-4 rounded-lg">
            New member registered.
          </div>

          <div className="bg-[#120d1f] p-4 rounded-lg">
            Premium plan purchased.
          </div>

          <div className="bg-[#120d1f] p-4 rounded-lg">
            Payment completed successfully.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;