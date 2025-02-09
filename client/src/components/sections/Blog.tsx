import { BlogCard } from "../BlogCard";
import { BLOG_POSTS } from "@/lib/constants";

export function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Technical Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
