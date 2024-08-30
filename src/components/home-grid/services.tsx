import { Bug, Paintbrush, Smartphone, SquareTerminal } from "lucide-react";
import CardMulti from "./card-multi"

const ServicesLogo = () => {
    return (
        <div className="flex justify-evenly items-center w-full">
            <SquareTerminal size={50} color="white" />
            <Smartphone size={50} color="white" />
            <Paintbrush size={50} color="white" />
            <Bug size={50} color="white" />
        </div>
    )
};

const Services = () => {
  return (
    <div className="lg:col-span-3 col-span-5">
        <CardMulti cardLogo={<ServicesLogo />} text="Specialization" title="Services Offering" href="/services" />
    </div>
  )
}

export default Services