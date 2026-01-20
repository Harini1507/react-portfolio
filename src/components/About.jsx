import { motion } from "framer-motion";

function About() {
  return (
    // 🔴 CHANGE: added id="about"
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl w-full bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-10 md:p-14"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          About Me
        </h2>

        <div className="w-16 h-1 bg-indigo-500 mx-auto my-4 rounded-full" />

        {/* Intro */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I am a passionate frontend developer with a strong interest in
          building responsive and interactive web applications using modern
          technologies.
        </p>

        {/* Info Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Education
            </h3>
            <p className="text-gray-600">
              Computer Science background with hands-on project experience.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Experience
            </h3>
            <p className="text-gray-600">
              MERN Stack Intern working on real-time React-based applications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              Interests
            </h3>
            <p className="text-gray-600">
              UI/UX design, animations, and building smooth user experiences.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
