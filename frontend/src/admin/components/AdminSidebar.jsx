import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const links = [
    {
      name: "Dashboard",
      path: "/admin",
    },
    {
      name: "Members",
      path: "/admin/members",
    },
    {
      name: "Plans",
      path: "/admin/plans",
    },
    {
      name: "Payments",
      path: "/admin/payments",
    },
  ];

  return (
    <aside className="w-72 bg-[#1c142b] border-r border-gray-800 hidden md:block">
      <div className="p-8 border-b border-gray-800">
        <h1 className="text-3xl font-extrabold text-yellow-400">
          O² ADMIN
        </h1>
      </div>

      <nav className="p-6 space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end
            className={({ isActive }) =>
              `block px-5 py-4 rounded-xl font-semibold transition ${
                isActive
                  ? "bg-yellow-400 text-black"
                  : "bg-[#120d1f] hover:bg-[#2a1f40]"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;