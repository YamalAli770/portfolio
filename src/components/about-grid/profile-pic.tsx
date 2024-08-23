import { Card, CardContent } from "../ui/card"

const ProfilePic = () => {
  return (
    <Card className="col-span-2 rounded-3xl bg-card-bg-lighter pt-6 border border-gray-800">
      <CardContent>
        <img src="src/assets/profile-pic.jpg" alt="Profile" className="w-72 h-72 object-cover rounded-3xl" />
      </CardContent>
    </Card>
  )
}

export default ProfilePic