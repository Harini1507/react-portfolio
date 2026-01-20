import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        >
          Projects
        </motion.h2>

        <div className="w-16 h-1 bg-indigo-500 mx-auto my-4 rounded-full" />

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          A glimpse into the projects where I applied my skills to solve
          meaningful real-world problems.
        </p>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-10 mb-10"
        >
          <div className="absolute left-0 top-0 h-full w-2 bg-indigo-500 rounded-l-3xl" />

          <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
            Missing Person Detection System
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            An AI-powered platform designed to identify missing individuals by
            matching facial data from uploaded images and surveillance sources,
            helping authorities act faster and more accurately.
          </p>

          <div className="flex flex-wrap gap-3">
            {["AI", "Face Recognition", "OpenCV", "Python", "Django"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-10"
        >
          <div className="absolute left-0 top-0 h-full w-2 bg-purple-500 rounded-l-3xl" />

          <h3 className="text-2xl font-semibold text-purple-600 mb-3">
            Autism Support & Awareness Platform
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            A user-friendly web application focused on autism awareness,
            providing educational resources and supportive content for children,
            parents, and caregivers.
          </p>

          <div className="flex flex-wrap gap-3">
            {["React", "UI/UX", "Accessibility", "Responsive Design"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm bg-purple-100 text-purple-600 rounded-full"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
