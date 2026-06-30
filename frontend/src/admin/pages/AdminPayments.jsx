const payments = [
  {
    name: "Satish Kumar",
    amount: "₹2499",
    status: "Paid",
  },
  {
    name: "Rahul Sharma",
    amount: "₹1499",
    status: "Pending",
  },
];

const AdminPayments = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-10">
        Payments
      </h1>

      <div className="space-y-5">
        {payments.map((payment, index) => (
          <div
            key={index}
            className="bg-[#1c142b] p-6 rounded-2xl border border-gray-800 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">{payment.name}</h2>
              <p className="text-gray-400">{payment.amount}</p>
            </div>

            <span
              className={`px-5 py-2 rounded-full font-bold ${
                payment.status === "Paid"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {payment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPayments;