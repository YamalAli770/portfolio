import { Card, CardContent } from "../ui/card"
import ServiceCard, { ServiceCardProps } from "./service-card"

const serviceDescriptions: ServiceCardProps[] = [
    {
        title: "Web Development",
        description: "Crafting modern, responsive websites tailored to your business needs. We blend creativity with technical expertise to deliver dynamic web experiences that engage your audience and drive results."
    },
    {
        title: "Mobile Development",
        description: "Transforming your ideas into powerful mobile applications for iOS and Android. Whether it's a simple utility app or a feature-rich mobile solution, we bring your vision to life on any device."
    },
    {
        title: "Design",
        description: "Designing with purpose and passion. Our design services cover everything from branding and visual identity to user interface (UI) and user experience (UX) design."
    },
    {
        title: "Branding",
        description: "Building strong, memorable brands that resonate with your audience. Our branding services include logo design, brand strategy, and identity development."
    },
]

const ServiceDescription = () => {
  return (
    <Card className="bg-card-bg-dark rounded-3xl border border-gray-800">
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6">
            {serviceDescriptions.map((service) => (
                <ServiceCard key={service.title} {...service} />
            ))}
        </CardContent>
    </Card>
  )
}

export default ServiceDescription;
