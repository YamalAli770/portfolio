import { Link } from "react-router-dom";
import CardLinkIcon from "../home-grid/card-link-icon";
import { Card, CardContent, CardHeader } from "../ui/card";

export interface ProjectCardProps {
    img: string;
    category: string;
    name: string;
    href: string;
}

const ProjectCard = ({ img, category, name, href }: ProjectCardProps) => {
  return (
    <Card className="lg:col-span-2 md:col-span-3 col-span-6 bg-card-bg-dark border border-gray-800 rounded-3xl">
        <CardHeader>
            <img src={img} alt={name} className="rounded-3xl w-full h-56 object-cover object-top" />
        </CardHeader>
        <CardContent className="flex justify-between items-center">
            <div className="flex flex-col gap-1 items-start">
                <h3 className="text-gray-500 uppercase text-sm">{category}</h3>
                <h1 className="text-white font-medium text-xl font-acorn">{name}</h1>
            </div>
            <Link to={href} target="__blank" referrerPolicy={"no-referrer"}>
                <CardLinkIcon />
            </Link>
        </CardContent>
    </Card>
  )
}

export default ProjectCard