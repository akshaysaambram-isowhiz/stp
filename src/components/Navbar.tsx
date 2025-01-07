import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const pages = [
  { to: "/", label: "Home" },
  { to: "/planner", label: "Plan Trip" },
  { to: "/feedback", label: "Feedback" },
] as const;

export function Navbar() {
  return (
    <div className="mx-auto p-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Link to="/">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Plane className="size-5 text-blue-500 lg:size-8" />
            <h1 className="text-lg font-bold text-gray-900 lg:text-2xl">
              Smart Travel Planner
            </h1>
          </motion.div>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          {pages.map((page) => (
            <NavLink
              to={page.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-blue-50"
                }`
              }
            >
              {page.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
