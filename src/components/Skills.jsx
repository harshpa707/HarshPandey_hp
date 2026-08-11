const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "REST API",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-cyan-400">My Skills</p>

        <h2 className="mt-2 text-center text-4xl font-bold">
          Technologies I Use
        </h2>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-slate-950 p-5 text-center font-semibold text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
