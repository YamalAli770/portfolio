import CardMulti from "./card-multi"

const Signature = () => {
  return (
    <h1 className="font-playwrite text-3xl text-gray-600 opacity-55">
      Yamal
    </h1>
  )
};

const Credentials = () => {
  return (
    <div className="w-full">
      <CardMulti cardLogo={<Signature />} text="More About Me" title="Credentials" href="/about" />
    </div>
  )
}

export default Credentials