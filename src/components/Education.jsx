function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-cyan-400">Education</p>

        <h2 className="mt-2 text-center text-4xl font-bold">My Education</h2>

        <div className="mt-12 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <span className="text-sm text-cyan-400">2024 - 2027</span>

            <h3 className="mt-2 text-xl font-bold">
              B.Tech - Computer Science & Engineering
            </h3>

            <p className="mt-2 text-slate-400">
              Swami Vivekanand Group of Institutes, Indore
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <span className="text-sm text-cyan-400">2021 - 2024</span>

            <h3 className="mt-2 text-xl font-bold">
              Diploma - Computer Science & Engineering
            </h3>

            <p className="mt-2 text-slate-400">
              Sardar Vallabhbhai Patel Polytechnic College, Bhopal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
