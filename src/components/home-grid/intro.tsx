import { Card, CardContent, CardFooter } from "../ui/card"
import { Link } from "react-router-dom"
import CardLinkIcon from "./card-link-icon"

const Intro = () => {
  return (
    <Card className="lg:col-span-3 col-span-5 bg-card-bg-dark border-gray-800 rounded-3xl">
      <CardContent className="flex sm:flex-row flex-col gap-8 p-10">
        <img className="w-52 h-64 object-cover rounded-tl-3xl rounded-br-3xl brightness-75 sm:mx-0 mx-auto" src="assets/profile-gradient.png" alt="profile-pic" />
        <div className="flex flex-col sm:gap-1 gap-5 justify-center items-center sm:text-left text-center">
          <h3 className="w-full uppercase text-sm font-medium text-gray-400">A Software Engineer</h3>
          <h1 className="w-full [word-spacing:100vw] text-6xl font-medium break-all text-white font-acorn">Yamal Ali</h1>
          <p className="w-full text-gray-400">I am a Software Engineer based in Karachi, Pakistan.</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link to="/about">
          <CardLinkIcon />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default Intro
