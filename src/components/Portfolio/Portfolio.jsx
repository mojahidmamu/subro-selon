import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-10">My Portfolio</h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            className="bg-gray-800 p-5 rounded-xl shadow-xl hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            <h2 className="text-2xl font-semibold mb-3">Project {item}</h2>
            <p className="text-gray-400">
              This is a brief description of project {item}. It showcases my
              skills and creativity.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
