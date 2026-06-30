const AdminTopbar = () => {
  return (
    <header className="bg-[#120d1f] border-b border-gray-800 px-6 py-5 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-yellow-400">
          Admin Dashboard
        </h2>
      </div>

      <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition">
        Logout
      </button>
    </header>
  );
};

export default AdminTopbar;