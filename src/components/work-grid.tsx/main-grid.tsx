import ProjectCard from "@/components/work-grid.tsx/project-card"

const projectData = [
  {
    img: "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Web Application",
    name: "Study Sphere",
    href: "/work/dynamic"
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Mobile Application",
    name: "Synq",
    href: "/work/seven-studio"
  },
  {
    img: "https://images.unsplash.com/photo-1556228578-567ba127e37f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Web Application",
    name: "Zawiyah",
    href: "/work/raven-studio"
  },
  {
    img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Web Application",
    name: "Guy That Cooks",
    href: "/work/diesel-h1"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    category: "Mobile Designing",
    name: "Submarine",
    href: "/work/submarine"
  },
  {
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    category: "Web Designing",
    name: "Hydra Merc",
    href: "/work/hydra-merc"
  }
]

const MainGrid = () => {
  return (
    <div className="grid grid-cols-6 items-center gap-5 mt-28">
        <div className="flex items-center justify-center gap-5 col-span-4 row-span-2 col-start-3">
            <img src="src/assets/star-icon.png" alt="star-icon" />
            <h1 className="text-8xl text-white font-medium uppercase">All Projects</h1>
            <img src="src/assets/star-icon.png" alt="star-icon" />
        </div>
        {projectData.map((project) => (
            <ProjectCard {...project} />
        ))}
    </div>
  )
}

export default MainGrid