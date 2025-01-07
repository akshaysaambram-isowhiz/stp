import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-white shadow-sm"
      >
        <Navbar />
      </motion.header>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto px-4 py-8 sm:px-6 lg:px-8"
      >
        {children}
      </motion.main>
    </div>
  );
}
