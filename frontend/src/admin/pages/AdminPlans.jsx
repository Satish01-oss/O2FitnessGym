const plans = [
  {
    name: "Basic",
    price: "₹999",
  },
  {
    name: "Standard",
    price: "₹1499",
  },
  {
    name: "Premium",
    price: "₹2499",
  },
];

const AdminPlans = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-yellow-400">
          Membership Plans
        </h1>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold">
          Add Plan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#1c142b] p-8 rounded-2xl border border-gray-800"
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              {plan.name}
            </h2>

            <p className="text-4xl font-extrabold mb-8">
              {plan.price}
            </p>

            <div className="flex gap-4">
              <button className="flex-1 bg-yellow-400 text-black py-3 rounded-xl font-bold">
                Edit
              </button>

              <button className="flex-1 bg-red-500 py-3 rounded-xl font-bold">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPlans;