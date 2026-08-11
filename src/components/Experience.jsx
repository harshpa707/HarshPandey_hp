function Experience() {
  return (
    <section id="experience" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <p className="text-center text-cyan-400">Experience</p>

        <h2 className="mt-2 text-center text-4xl font-bold">My Experience</h2>

        {/* Experience Card */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-slate-950 p-7 transition hover:border-cyan-400/50">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <h3 className="text-xl font-bold">MERN Stack Developer</h3>

            <span className="text-sm text-cyan-400">2026</span>
          </div>

          <p className="mt-2 text-sm text-slate-500">Internship / Training</p>

          <p className="mt-5 leading-7 text-slate-400">
            Worked on frontend and backend development using React.js, Node.js,
            Express.js and MongoDB. Developed responsive user interfaces and
            REST APIs while working with modern web development practices.
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-400">
              React.js
            </span>

            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-400">
              Node.js
            </span>

            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-400">
              Express.js
            </span>

            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-400">
              MongoDB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
