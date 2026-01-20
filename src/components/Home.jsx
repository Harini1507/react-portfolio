import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-12"
      >
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Hi, I’m <span className="text-indigo-600">Harini</span>
        </h1>

        {/* Role */}
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Frontend Developer · React Learner · MERN Intern
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-indigo-500 mx-auto my-6 rounded-full" />

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          I design and develop responsive, user-friendly web applications using
          modern frontend technologies with a strong focus on clean UI and UX.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/Harini1507"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/harini-senthil/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
