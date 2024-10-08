import { Link } from "react-router-dom"
import { Card, CardContent } from "../ui/card"
import CardLinkIcon from "./card-link-icon"

const WorkTogether = () => {
  return (
    <Card className="xl:col-span-5 md:col-span-3 col-span-5 bg-card-bg-dark border border-gray-800 rounded-3xl">
      <CardContent className="flex justify-between items-end py-12">
        <div className="text-white text-5xl font-medium font-acorn">
          <h1>Let's work <span className="text-main-accent">together</span></h1>
        </div>
        <Link to='/contact'>
          <CardLinkIcon />
        </Link>
      </CardContent>
    </Card>
  )
}

export default WorkTogether