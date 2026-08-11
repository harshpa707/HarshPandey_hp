import { ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="mb-4 text-cyan-400">Hello, I'm</p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
            Harsh Pandey
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            MERN Stack Developer
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            I build modern, responsive and user-friendly web applications using
            MongoDB, Express.js, React.js and Node.js.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://talentiq-steel-alpha.vercel.app/"
              className="flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/Harsh_Pandey_CV.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/harshpa707"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/10 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            <img
              src="/harsh.JPG"
              alt="Harsh Pandey"
              className="relative h-72 w-72 rounded-full border-4 border-cyan-400/50 object-cover shadow-2xl sm:h-96 sm:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
