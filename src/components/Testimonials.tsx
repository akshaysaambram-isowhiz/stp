import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Testimonials() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-2xl bg-gray-50 p-2 lg:p-12"
    >
      <h2 className="mb-12 text-center text-3xl font-bold">
        What Travelers Say
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            name: "Sarah Johnson",
            location: "Paris Trip",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            quote:
              "The AI suggestions were spot-on! Found amazing local cafes I would have never discovered otherwise.",
          },
          {
            name: "Michael Chen",
            location: "Tokyo Adventure",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            quote:
              "Saved hours of planning time. The itinerary was perfectly balanced between tourist spots and hidden gems.",
          },
          {
            name: "Emma Davis",
            location: "Rome Getaway",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            quote:
              "As a solo traveler, this tool was invaluable. Made my trip planning stress-free and enjoyable.",
          },
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            variants={item}
            className="rounded-xl bg-white p-6 shadow-md"
          >
            <div className="flex items-start space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="size-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="mt-4">
              <Quote className="size-8 text-blue-500 opacity-20" />
              <p className="mt-2 text-gray-600">{testimonial.quote}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
