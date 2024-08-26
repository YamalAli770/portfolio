import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const ContactForm = () => {
  return (
    <Card className="bg-card-bg-dark border border-gray-800 rounded-3xl w-8/12 relative p-5">
      <CardHeader className="flex flex-row">
        <h1 className="text-white text-5xl font-medium font-acorn">Let's work <span className="text-main-accent">together.</span></h1>
        <img src="src/assets/hang-star-icon.png" alt="hanging star" className="w-20 h-20 object-contain absolute -top-2 right-0" />
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Input placeholder="Name *" required />
        <Input placeholder="Email *" required />
        <Input placeholder="Your Subject *" required />
        <Textarea placeholder="Message *" required />
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary-btn py-2 hover:bg-white hover:text-black h-12">Send Message</Button>
      </CardFooter>
    </Card>
  )
}

export default ContactForm