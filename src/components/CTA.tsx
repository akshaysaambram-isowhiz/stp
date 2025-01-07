import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6 text-center"
    >
      <h2 className="text-3xl font-bold">Ready to Start Planning?</h2>
      <p className="text-xl text-gray-600">
        Join thousands of happy travelers who have planned their perfect trips
        with us.
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/planner"
          className="inline-block rounded-lg bg-blue-500 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-600"
        >
          Create Your Itinerary
        </Link>
      </motion.div>
    </motion.section>
  );
}
