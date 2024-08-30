import { Card, CardContent, CardHeader } from "../ui/card"

const Summary = () => {
  return (
    <div className="lg:col-span-5 col-span-7 flex flex-col gap-5">
      <h1 className="text-gray-500 flex items-center gap-2">
        <span className="sm:text-8xl text-7xl font-semibold text-white uppercase font-acorn lg:mx-0 mx-auto">Self Summary</span>
      </h1>
      <Card className="flex flex-col justify-between bg-card-bg-lighter border border-gray-800 h-full rounded-3xl">
        <CardContent className="flex flex-col text-left gap-3">
          <CardHeader className="p-0">
            <img src="src/assets/hang-star-icon.png" alt="" className="w-12 h-20 object-contain" />
          </CardHeader>
          <h1 className="text-white text-4xl font-medium font-acorn">Yamal Ali</h1>
          <p className="text-gray-500 text-sm font-medium">I am a software engineer with expertise in developing full-stack responsive web applications using industry standard tools & technologies. I'm always curious to learn more about new and creative technologies.</p>
          <p className="text-gray-500 text-sm font-medium">Beyond my professional interests, I am passionate about food and fragrances. I love exploring diverse cuisines and immersing myself in different cultures, always eager to discover new flavors and experiences.</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Summary