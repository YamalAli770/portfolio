import { Card, CardContent } from "../ui/card"

const ProfilePic = () => {
  return (
    <Card className="col-span-2 rounded-3xl bg-card-bg-lighter border border-gray-800">
      <CardContent className="flex items-center h-full pt-6">
        <img src="src/assets/profile-pic.jpg" alt="Profile" className="w-72 h-80 object-cover rounded-3xl" />
      </CardContent>
    </Card>
  )
}

export default ProfilePic