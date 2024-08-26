import { Card, CardContent, CardHeader } from "../ui/card"
import TechItem, { TechItemProps } from "./tech-item";

const techItems: TechItemProps[] = [
  {
    name: "JavaScript",
    logo: "src/assets/tech/js.png"
  },
  {
    name: "TypeScript",
    logo: "src/assets/tech/ts.png"
  },
  {
    name: "TailwindCSS",
    logo: "src/assets/tech/tailwind.png"
  },
  {
    name: "ReactJS",
    logo: "src/assets/tech/react.png"
  },
  {
    name: "Redux",
    logo: "src/assets/tech/redux.png"
  },
  {
    name: "NextJS",
    logo: "src/assets/tech/next.png"
  },
  {
    name: "NodeJS",
    logo: "src/assets/tech/node.png"
  },
  {
    name: "NestJS",
    logo: "src/assets/tech/nest.png"
  },
  {
    name: "MongoDB",
    logo: "src/assets/tech/mongodb.png"
  },
  {
    name: "PostgreSQL",
    logo: "src/assets/tech/postgres.png"
  },
  {
    name: "Firebase",
    logo: "src/assets/tech/firebase.png"
  },
  {
    name: "Git",
    logo: "src/assets/tech/git.png"
  }
];

const TechStack = () => {
  return (
    <Card className="bg-card-bg-light border border-gray-800 col-span-7">
      <CardHeader className="relative">
        <h1 className="text-white text-left text-3xl uppercase font-medium font-acorn">
          Technologies
        </h1>
        <img src="src/assets/hang-star-icon.png" alt="hanging star" className="w-16 h-16 object-contain absolute -top-2 right-0" />
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