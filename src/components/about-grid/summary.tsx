import { Card, CardContent, CardHeader } from "../ui/card"

const Summary = () => {
  return (
    <div className="col-span-5 flex flex-col gap-5">
      <h1 className="text-gray-500 flex items-center gap-2">
        <span className="text-8xl font-semibold text-white uppercase">Self Summary</span>
      </h1>
      <Card className="flex flex-col justify-between bg-card-bg-lighter border border-gray-800 h-full rounded-3xl">
        <CardContent className="flex flex-col text-left gap-3">
          <CardHeader className="p-0">
            <img src="src/assets/hang-star-icon.png" alt="" className="w-12 h-20 object-contain" />
          </CardHeader>
          <h1 className="text-white text-4xl font-medium">Yamal Ali</h1>
          <p className="text-gray-500 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquid necessitatibus pariatur laudantium nesciunt in facilis praesentium ullam ea nobis. Eaque ad reiciendis eligendi itaque ipsa repellat cum! In culpa beatae delectus tempore, est aperiam.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Summary