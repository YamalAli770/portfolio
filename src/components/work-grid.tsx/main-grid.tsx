import ProjectCard from "@/components/work-grid.tsx/project-card"

const projectData = [
  {
    img: "src/assets/work/studysphere.jpg",
    category: "Web Application",
    name: "Study Sphere",
    href: "https://studysphere-frontend-omega.vercel.app/"
  },
  {
    img: "src/assets/work/synq.jpg",
    category: "Mobile Application",
    name: "Synq",
    href: "/work/seven-studio"
  },
  {
    img: "src/assets/work/zawiyah.jpg",
    category: "Web Application",
    name: "Zawiyah",
    href: "https://zawiyah-frontend-sigma.vercel.app/"
  },
  {
    img: "src/assets/work/guythatcooks.jpg",
    category: "Web Application",
    name: "Guy That Cooks",
    href: "https://guythatcooks.netlify.app/"
  },
  {
    img: "src/assets/work/kohaku.jpg",
    category: "Website Designing",
    name: "Kohaku",
    href: "https://kohakku.netlify.app/"
  },
]

const MainGrid = () => {
  return (
    <div className="grid grid-cols-6 items-center gap-5 mt-28">
        <div className="flex items-center justify-center gap-5 lg:col-span-4 lg:row-span-2 lg:col-start-3 col-span-6">
            <img src="src/assets/star-icon.png" alt="star-icon" className="md:block hidden" />
            <h1 className="md:text-8xl text-6xl text-white font-medium uppercase font-acorn">All Projects</h1>
            <img src="src/assets/star-icon.png" alt="star-icon" className="md:block hidden" />
        </div>
        {projectData.map((project) => (
          <ProjectCard {...project} />
        ))}
    </div>
  )
}

export default MainGrid