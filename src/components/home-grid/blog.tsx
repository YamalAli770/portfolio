import CardMulti from "./card-multi"

const BlogsLogo = () => {
  return (
    <img src="assets/blogs-icon.png" alt="" />
  )

};

const Blog = () => {
  return (
    <div className="lg:col-span-2 xl:col-span-1 col-span-5">
      <CardMulti cardLogo={<BlogsLogo />} text="My Writings" title="Blogs" href="/blogs" />
    </div>
  )
}

export default Blog