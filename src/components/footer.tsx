import { ArrowUp } from "lucide-react"

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 my-20 relative">
      <div className="text-gray-500 font-kristi text-4xl">Yamal</div>
      <p className="text-gray-500 font-medium text-sm">© All rights reserved by <span className="text-main-accent">Yamal Ali</span></p>
      <button className="absolute right-0 bottom-0 rounded-full bg-gray-500 p-3"><ArrowUp color="white" /></button>
    </div>
  )
}

export default Footer