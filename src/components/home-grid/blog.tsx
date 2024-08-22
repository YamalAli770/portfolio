import CardMulti from "./card-multi"

const BlogsLogo = () => {
  return (
    <img src="src/assets/blogs-icon.png" alt="" />
  )

};

const Blog = () => {
  return (
    <div className="col-span-1">
      <CardMulti cardLogo={<BlogsLogo />} text="My Writings" title="Blogs" href="/blogs" />
    </div>
  )
}

export default Blog