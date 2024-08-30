export interface TechItemProps {
    name: string,
    logo: string
}

const TechItem = ({ name, logo }: TechItemProps) => {
  return (
    <div className="flex flex-col items-center gap-1 sm:basis-40 basis-36">
        <img src={logo} alt="tech-image" className={`h-12 w-12 ${logo.includes('next') && 'invert'}`} />
        <h3 className="text-lg text-white">{name}</h3>
    </div>
  )
}

export default TechItem