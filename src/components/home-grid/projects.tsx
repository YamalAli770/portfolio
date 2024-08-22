import CardMulti from "./card-multi"

const ProjectLogo = () => {
  return (
    <div className="relative">
      <h1 className="absolute inset-0 bottom-8 flex items-center justify-center text-3xl font-bold bg-gradient-to-b from-slate-400 to-slate-500 bg-clip-text text-transparent uppercase z-0">
        My Works
      </h1>
      <img src="src/assets/project-mockup.png" alt="project mockup" className="relative w-full h-auto z-10" />
    </div>
  )
}

const Projects = () => {
  return (
    <div className="w-full">
      <CardMulti cardLogo={<ProjectLogo />} text="Showcase" title="Projects" href="/work" />
    </div>
  )
}

export default Projects