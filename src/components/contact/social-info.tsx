import { Github, Instagram, Linkedin } from "lucide-react";
import SocialItem, { SocialItemProps } from "./social-item";

const socialItems: SocialItemProps[] = [
  {
    icon: <Linkedin size={30} color="white" />,
    href: "https://linkedin.com/in/yamalali"
  },
  {
    icon: <Github size={30} color="white" />,
    href: "https://github.com/YamalAli770"
  },
  {
    icon: <Instagram size={30} color="white" />,
    href: 'https://www.instagram.com/'
  }
];

const SocialInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-white text-left uppercase font-medium font-acorn">Social Info</h2>
      <div className="flex gap-5">
        {socialItems.map((item, index) => (
          <SocialItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default SocialInfo