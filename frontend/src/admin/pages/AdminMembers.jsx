const members = [
  {
    id: 1,
    name: "Satish Kumar",
    email: "satish@gmail.com",
    plan: "Premium",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    plan: "Standard",
  },
];

const AdminMembers = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-yellow-400">
          Members
        </h1>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold">
          Add Member
        </button>
      </div>

      <div className="overflow-x-auto bg-[#1c142b] rounded-2xl border border-gray-800">
        <table className="w-full text-left">
          <thead className="bg-[#120d1f]">
            <tr>
              <th className="p-5">Name</th>
              <th className="p-5">Email</th>
              <th className="p-5">Plan</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-t border-gray-800">
                <td className="p-5">{member.name}</td>
                <td className="p-5">{member.email}</td>
                <td className="p-5 text-yellow-400 font-semibold">
                  {member.plan}
                </td>

                <td className="p-5 flex gap-3">
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                    Edit
                  </button>

                  <button className="bg-red-500 px-4 py-2 rounded-lg font-semibold">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMembers;