import { motion } from "framer-motion";

const skills = [
  { name: "HTML / CSS", level: "90%" },
  { name: "Java", level: "85%" },
  { name: "MySQL", level: "80%" },
  { name: "JavaScript", level: "70%" },
  { name: "React", level: "70%" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl w-full bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-10 md:p-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Skills
        </h2>

        <div className="w-16 h-1 bg-indigo-500 mx-auto my-4 rounded-full" />

        <div className="space-y-6 mt-10">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.level}</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 0.8 }}
                  className="h-3 rounded-full bg-indigo-500"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
