import { Card, CardContent } from "../ui/card"

const ProfilePic = () => {
  return (
    <Card className="flex lg:col-span-2 col-span-7 rounded-3xl bg-card-bg-lighter border border-gray-800 lg:w-full mx-auto">
      <CardContent className="flex justify-center items-center w-full pt-6">
        <img src="src/assets/profile-gradient-2.png" alt="Profile" className="lg:h-full h-72 min-w-56 object-cover rounded-3xl brightness-75" />
      </CardContent>
    </Card>
  )
}

export default ProfilePic