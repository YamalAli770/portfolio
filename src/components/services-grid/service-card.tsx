import { Card, CardContent } from "../ui/card"

export interface ServiceCardProps {
    title: string,
    description: string
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <Card className="bg-card-bg-lighter border border-gray-800 rounded-3xl basis-1/2">
        <CardContent className="flex flex-col gap-2 text-left pt-6 p-8">
            <h3 className="text-gray-600 uppercase text-lg">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </CardContent>
    </Card>
  )
}

export default ServiceCard