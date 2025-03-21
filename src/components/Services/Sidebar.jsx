import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    isActive ? "text-pink-500 font-medium" : "text-gray-500";

  return (
    <div className="w-1/4 bg-gray-100 p-6 h-screen">
      <h1 className="text-xl font-bold mb-8">Jerin's Parlour</h1>
      <ul>
        <li className="mb-6">
          <NavLink to="/book" className="underline text-red-500">
            📖 Book
          </NavLink>
        </li>
        <li className="mb-6">
          <NavLink to="/booking-list" className="underline text-red-500">
            📋 Booking List
          </NavLink>
        </li>
        <li>
          <NavLink to="/review" className="underline text-red-500">
            💬 Review
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
