import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import SocialInfo from "@/components/contact/social-info"

const Contact = () => {
  return (
    <div className="flex justify-between pt-28">
      <div className="flex flex-col gap-10">
        <ContactInfo />
        <SocialInfo />
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact