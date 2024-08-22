import { Link } from "react-router-dom"
import { Card, CardContent } from "../ui/card"
import CardLinkIcon from "./card-link-icon"

const WorkTogether = () => {
  return (
    <Card className="bg-card-bg-dark border border-gray-800 col-span-5">
      <CardContent className="flex justify-between items-end py-12">
        <div className="text-white text-5xl font-medium">
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