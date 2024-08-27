import ServiceDescription from "./service-description"
import ServiceList from "./service-list"

const MainGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-10 text-white mt-28">
        <ServiceList />
        <div className="flex flex-col gap-5 col-span-3">
            <h1 className="flex items-center gap-5 text-8xl font-medium font-acorn">
                <img src="src/assets/star-icon.png" alt="" />
                My Offerings
                <img src="src/assets/star-icon.png" alt="" />
            </h1>
            <ServiceDescription />
        </div>
    </div>
  )
}

export default MainGrid