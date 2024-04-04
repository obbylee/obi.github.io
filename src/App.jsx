import { sosialMedia, projects } from "./data";

export default function App() {
  return (
    <div className="px-6 py-12">
      <header className="flex flex-col gap-5">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-300">
          <a href="/">LEE OBBY WAQOZ</a>
        </h1>
        <h2 className="text-xl sm:text-lg font-medium tracking-tight text-slate-300">
          Fullstack Developer
        </h2>
        <p className="max-w-xs md:max-w-full leading-normal font-medium text-slate-300">
          "Versatile Fullstack developer proficient in Java, PHP, and
          Javascript."
        </p>
        <ul className="flex gap-5">
          {sosialMedia && sosialMedia.length > 0
            ? sosialMedia.map((sosmed, idx) => (
                <li
                  key={idx}
                  className="border border-slate-300 hover:bg-slate-500 px-3 py-1 rounded-xl font-medium text-slate-300"
                >
                  <a href={sosmed.url}>{sosmed.name}</a>
                </li>
              ))
            : null}
        </ul>
      </header>

      <main className="mt-24 grid md:grid-cols-3 gap-5">
        {projects && projects.length > 0
          ? projects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-xl hover:bg-slate-500 hover:bg-opacity-25 p-3 flex flex-col gap-5 w-full"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-slate-300 hover:text-white">
                    <a target="_blank" href={project.url}>
                      {project.title} &#8599;
                    </a>
                  </h2>

                  <div className="flex gap-5">
                    <a
                      target="_blank"
                      href={project.github}
                      className="px-3 py-1 rounded-xl bg-slate-600 hover:bg-slate-300"
                    >
                      Source Code
                    </a>

                    <a
                      target="_blank"
                      href={project.url}
                      className="px-3 py-1 rounded-xl bg-slate-600 hover:bg-slate-300"
                    >
                      Visit
                    </a>
                  </div>
                </div>
                <p className="leading-normal font-medium text-slate-300">
                  {project.description}
                </p>
                <ul className="flex gap-3">
                  {project.techstack.map((stack, idx) => (
                    <li
                      key={idx}
                      className="px-2 py-1 font-medium rounded-xl border border-teal-300 text-teal-300 text-sm"
                    >
                      {stack}
                    </li>
                  ))}
                </ul>

                <img
                  src={project.img.url}
                  alt={project.img.alt}
                  className="object-contain w-60 h-40 md:w-96 md:h-64"
                />
              </div>
            ))
          : null}
      </main>
      <footer className="flex justify-center items-center p-10">
        &copy; leeobbyw 2024
      </footer>
    </div>
  );
}
