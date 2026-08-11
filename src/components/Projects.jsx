// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     title: "Talent IQ",
//     description:
//       "A modern web platform designed to connect users with career and talent-related opportunities.",
//     tech: ["React", "Node.js", "Express", "MongoDB"],
//     live: "https://talent-iq-steel-alpha.vercel.app",
//     github: "https://github.com/harshpa707",
//   },
//   {
//     title: "SolveMate",
//     description:
//       "A coding practice platform inspired by LeetCode, designed for college students to improve problem-solving skills.",
//     tech: ["React", "Tailwind", "Node.js", "MongoDB"],
//     live: "#",
//     github: "https://github.com/harshpa707",
//   },
// ];

// function Projects() {
//   return (
//     <section id="projects" className="px-6 py-24">
//       <div className="mx-auto max-w-6xl">
//         <p className="text-center text-cyan-400">My Work</p>

//         <h2 className="mt-2 text-center text-4xl font-bold">
//           Featured Projects
//         </h2>

//         <div className="mt-12 grid gap-7 md:grid-cols-2">
//           {projects.map((project) => (
//             <div
//               key={project.title}
//               className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-2 hover:border-cyan-400/50"
//             >
//               <h3 className="text-2xl font-bold">{project.title}</h3>

//               <p className="mt-4 leading-7 text-slate-400">
//                 {project.description}
//               </p>

//               <div className="mt-6 flex flex-wrap gap-2">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-400"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="mt-7 flex gap-4">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950"
//                 >
//                   Live Demo
//                   <ExternalLink size={17} />
//                 </a>

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2"
//                 >
//                   GitHub
//                   <Github size={17} />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Talent IQ",
    description:
      "A modern web platform designed to connect users with career and talent-related opportunities.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://talent-iq-steel-alpha.vercel.app",
    github: "https://github.com/harshpa707",
  },
  {
    title: "SolveMate",
    description:
      "A coding practice platform inspired by LeetCode, designed for college students to improve problem-solving skills.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    live: "#",
    github: "https://github.com/harshpa707",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-cyan-400">My Work</p>

        <h2 className="mt-2 text-center text-4xl font-bold">
          Featured Projects
        </h2>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-bold">{project.title}</h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-4">
                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Live Demo
                  <ExternalLink size={17} />
                </a>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/20 px-4 py-2 font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
