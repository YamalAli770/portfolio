import { Mail, MapPin, Phone } from "lucide-react";
import ContactItem, { ContactItemProps } from "./contact-item";

const contactItems: ContactItemProps[] = [
    {
      icon: <Mail size={24} color="white" />,
      title: "Mail",
      values: ["yamalali770@gmail.com", "yamal.ali@outlook.com"]
    },
    {
      icon: <Phone size={24} color="white" />,
      title: "Contact",
      values: ["N/A"]
    },
    {
      icon: <MapPin size={24} color="white" />,
      title: "Location",
      values: ["Karachi"]
    }
]

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-white text-left uppercase font-medium font-acorn">Contact Info</h2>
        <div className="flex flex-col gap-20">
          {contactItems.map((item, index) => (
              <ContactItem key={index} {...item} />
          ))}
        </div>
    </div>
  )
}

export default ContactInfo