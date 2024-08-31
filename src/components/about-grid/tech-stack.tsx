import { Card, CardContent, CardHeader } from "../ui/card"
import TechItem, { TechItemProps } from "./tech-item";

const techItems: TechItemProps[] = [
  {
    name: "JavaScript",
    logo: "assets/tech/js.png"
  },
  {
    name: "TypeScript",
    logo: "assets/tech/ts.png"
  },
  {
    name: "TailwindCSS",
    logo: "assets/tech/tailwind.png"
  },
  {
    name: "ReactJS",
    logo: "assets/tech/react.png"
  },
  {
    name: "Redux",
    logo: "assets/tech/redux.png"
  },
  {
    name: "NextJS",
    logo: "assets/tech/next.png"
  },
  {
    name: "NodeJS",
    logo: "assets/tech/node.png"
  },
  {
    name: "NestJS",
    logo: "/assets/tech/nest.png"
  },
  {
    name: "MongoDB",
    logo: "assets/tech/mongodb.png"
  },
  {
    name: "PostgreSQL",
    logo: "assets/tech/postgres.png"
  },
  {
    name: "Firebase",
    logo: "assets/tech/firebase.png"
  },
  {
    name: "Git",
    logo: "assets/tech/git.png"
  }
];

const TechStack = () => {
  return (
    <Card className="bg-card-bg-light border border-gray-800 col-span-7">
      <CardHeader className="relative">
        <h1 className="text-white text-left text-3xl uppercase font-medium font-acorn">
          Technologies
        </h1>
        <img src="assets/hang-star-icon.png" alt="hanging star" className="w-16 h-16 object-contain absolute -top-2 right-0" />
      </CardHeader>
      <CardContent className="flex items-center gap-10 justify-center flex-wrap">
        {techItems.map((item, index) => (
          <TechItem key={index}  {...item} />
        ))}
      </CardContent>
    </Card>
  )
}

export default TechStack