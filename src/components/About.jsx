function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-cyan-400">About Me</p>

        <h2 className="mt-2 text-center text-4xl font-bold">Who I Am</h2>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-center leading-8 text-slate-300">
            I am a Computer Science Engineering student and MERN Stack Developer
            passionate about building dynamic and scalable web applications. I
            enjoy solving problems, learning new technologies and creating clean
            user experiences.
          </p>

          <div className="mt-8 grid gap-6 text-center sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">B.Tech</h3>
              <p className="mt-2 text-slate-400">CSE</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">MERN</h3>
              <p className="mt-2 text-slate-400">Developer</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
              <p className="mt-2 text-slate-400">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
