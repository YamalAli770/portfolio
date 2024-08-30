import ServiceDescription from "./service-description"
import ServiceList from "./service-list"

const MainGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-10 text-white mt-28">
        <ServiceList />
        <div className="flex flex-col gap-5 xl:col-span-3 col-span-5">
            <h1 className="flex items-center gap-5 md:text-8xl text-7xl font-medium font-acorn xl:justify-start justify-center">
                <img src="src/assets/star-icon.png" alt="" className="md:block hidden" />
                My Offerings
                <img src="src/assets/star-icon.png" alt="" className="md:block hidden" />
            </h1>
            <ServiceDescription />
        </div>
    </div>
  )
}

export default MainGrid