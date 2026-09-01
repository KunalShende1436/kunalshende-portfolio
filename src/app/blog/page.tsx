import { getAllBlogs } from '@/services'
import BlogCard from '@/components/Blog/BlogCard'
import SectionHeading from '@/components/SectionHeading/SectionHeading'

export const metadata = {
  title: 'Blog | Kunal M Shende',
  description: 'Read the latest technical articles, tutorials, and project writeups by Kunal M Shende.',
}

export default async function BlogPage() {
  const blogs = await getAllBlogs()

  return (
    <main className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem] min-h-[60vh]">
      <section id="blog" className="mb-12 mt-12">
        <SectionHeading title="Blog" subtitle="Articles, tutorials, and technical insights" />

        {blogs.length > 0 ? (
          <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} data={blog} />
            ))}
          </div>
        ) : (
          <div className="text-secondary-content mt-12 text-center text-lg">
            <p>No blog posts found yet. Check back soon!</p>
          </div>
        )}
      </section>
    </main>
  )
}
