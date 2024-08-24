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
    <Card className=" bg-card-bg-dark border border-gray-800 rounded-3xl col-span-2">
        <CardHeader>
            <img src={img} alt={name} className="rounded-3xl w-full h-56 object-cover" />
        </CardHeader>
        <CardContent className="flex justify-between items-center">
            <div className="flex flex-col gap-1 items-start">
                <h3 className="text-gray-500 uppercase text-sm">{category}</h3>
                <h1 className="text-white font-medium text-xl">{name}</h1>
            </div>
            <Link to={href}>
                <CardLinkIcon />
            </Link>
        </CardContent>
    </Card>
  )
}

export default ProjectCard