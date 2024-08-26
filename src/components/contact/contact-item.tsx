import { ReactNode } from "react"

export interface ContactItemProps {
    icon: ReactNode,
    title: string,
    values: string[]
}

const ContactItem = ({ icon, title, values }: ContactItemProps) => {
  return (
    <div className="flex gap-5">
        <div className="flex justify-center items-center bg-card-bg-dark border border-gray-800 p-6 rounded-2xl">
            {icon}
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-gray-500 uppercase text-left font-acorn">{title}</h3>
            <div className="flex flex-col items-start">
                {values.map((value, index) => (
                    <span className="text-white text-sm font-medium" key={index}>{value}</span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ContactItem