import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
          Let’s Connect
        </h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto my-4 rounded-full" />

        <p className="text-center text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I’m open to opportunities, collaborations, and exciting projects. Feel
          free to reach out — I’d love to connect with you!
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative p-8 bg-white rounded-2xl shadow-lg text-center"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 mx-auto mb-4">
              <FaEnvelope className="text-2xl text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Email</h3>
            <a
              href="mailto:harinisenthil15072004@gmail.com"
              className="block mt-2 text-sm text-indigo-600 break-all hover:underline"
            >
              harinisenthil15072004@gmail.com
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative p-8 bg-white rounded-2xl shadow-lg text-center"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 mx-auto mb-4">
              <FaGithub className="text-2xl text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-800">GitHub</h3>
            <a
              href="https://github.com/Harini1507"
              target="_blank"
              rel="noreferrer"
              className="block mt-2 text-sm text-indigo-600 hover:underline"
            >
              github.com/Harini1507
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative p-8 bg-white rounded-2xl shadow-lg text-center"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 mx-auto mb-4">
              <FaLinkedin className="text-2xl text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-800">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/harini-senthil"
              target="_blank"
              rel="noreferrer"
              className="block mt-2 text-sm text-indigo-600 hover:underline"
            >
              linkedin.com/in/harini-senthil
            </a>
          </motion.div>
        </div>

        <p className="mt-14 text-center text-sm text-gray-500">
          © 2026 Harini • Designed & Built with React & Tailwind CSS
        </p>
      </motion.div>
    </section>
  );
}

export default Contact;
