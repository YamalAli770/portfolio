import { Blend, Paintbrush, Smartphone, SquareTerminal } from "lucide-react"
import { Card, CardContent } from "../ui/card"

const services = [
  {
    icon: <SquareTerminal size={30} />,
    title: "Web Development"
  },
  {
    icon: <Smartphone size={30} />,
    title: "Mobile Development"
  },
  {
    icon: <Paintbrush size={30} />,
    title: "Design"
  },
  {
    icon: <Blend size={30} />,
    title: "Branding"
  }
]

const ServiceList = () => {
  return (
    <Card className="col-span-2 xl:block hidden bg-card-bg-dark rounded-3xl border border-gray-800">
      <CardContent className="flex flex-col gap-28 text-white p-20">
        {services.map((service) => (
          <div className="flex items-center gap-14">
            {service.icon}
            <h3 className="text-lg uppercase">{service.title}</h3>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default ServiceList