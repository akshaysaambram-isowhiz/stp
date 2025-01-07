import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Hero() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg bg-black/55 bg-[url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center py-20 bg-blend-overlay sm:py-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative">
        <motion.h1
          className="text-center text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
          variants={itemVariants}
        >
          Your Journey Begins Here
        </motion.h1>
        <motion.p
          className="text-muted-foreground mx-auto mt-6 max-w-[700px] text-center text-lg text-white"
          variants={itemVariants}
        >
          Discover the world with our AI-powered travel companion. Create
          personalized itineraries, explore hidden gems, and make unforgettable
          memories.
        </motion.p>
      </div>
    </motion.div>
  );
}
