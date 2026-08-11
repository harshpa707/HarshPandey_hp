
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <p className="text-center text-cyan-400">Contact</p>

        <h2 className="mt-2 text-center text-4xl font-bold">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-center text-slate-400">
          Have a project or opportunity? Feel free to connect with me.
        </p>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {/* Email */}
          <a
            href="harshpa707@gmail.com"
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950 p-5 transition hover:border-cyan-400"
          >
            <Mail className="text-cyan-400" />

            <div>
              <p className="text-sm text-slate-500">Email</p>

              <p className="break-all">harshpa707@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919752422247"
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950 p-5 transition hover:border-cyan-400"
          >
            <Phone className="text-cyan-400" />

            <div>
              <p className="text-sm text-slate-500">Phone</p>

              <p>+91 9752807707 , 6264202403</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/harshpa707"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-slate-950 p-5 transition hover:border-cyan-400"
          >
            <p className="text-sm text-slate-500">GitHub</p>

            <p className="mt-1 font-semibold">github.com/harshpa707</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/harshpandey8077"
            className="rounded-xl border border-white/10 bg-slate-950 p-5 transition hover:border-cyan-400"
          >
            <p className="text-sm text-slate-500">LinkedIn</p>

            <p className="mt-1 font-semibold">Harsh Pandey</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
