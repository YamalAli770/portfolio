import { ReactNode } from "react"
import { Card, CardContent, CardFooter } from "../ui/card"
import { Link } from "react-router-dom"
import CardLinkIcon from "./card-link-icon"

interface CardMultiProps {
  cardLogo: ReactNode,
  text: string,
  title: string,
  href: string,
}

const CardMulti = ({cardLogo, text, title, href}: CardMultiProps) => {
  return (
    <Card className="flex flex-col justify-between h-full bg-card-bg-light border-gray-800 rounded-3xl bg-scroll">
        <CardContent className="h-full flex items-center justify-center pt-6">
          {cardLogo}
        </CardContent>
        <CardFooter className="flex justify-between items-end">
          <div className="flex flex-col gap-5 items-start">
            <h3 className="text-gray-400 uppercase font-medium text-sm">{text}</h3>
            <h1 className="text-white text-lg font-medium font-acorn">{title}</h1>
          </div>
          <Link to={href}>
            <CardLinkIcon />
          </Link>
        </CardFooter>
    </Card>
  )
}

export default CardMulti