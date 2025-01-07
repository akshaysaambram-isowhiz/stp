import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Plane, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 pb-8 pt-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Plane className="size-6 text-blue-500" />
            <span className="text-lg font-bold">Smart Travel Planner</span>
          </div>
          <p className="text-gray-600">
            Making travel planning smarter, faster, and more enjoyable.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/planner" className="text-gray-600 hover:text-blue-500">
                Plan Trip
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className="text-gray-600 hover:text-blue-500"
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Travel Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Travel Guide
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Tips & Tricks
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Connect With Us</h3>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-600 hover:text-blue-500"
            >
              <Facebook className="size-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-600 hover:text-blue-500"
            >
              <Twitter className="size-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-600 hover:text-blue-500"
            >
              <Instagram className="size-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-600 hover:text-blue-500"
            >
              <Mail className="size-5" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Smart Travel Planner. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
