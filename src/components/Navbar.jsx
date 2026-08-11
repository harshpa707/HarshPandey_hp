import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Contact", "contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold">
          <Code2 className="text-cyan-400" />
          <span>
            Harsh<span className="text-cyan-400">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {name}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
