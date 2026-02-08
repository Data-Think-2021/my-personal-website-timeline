import Navigation from '@/components/Navigation';
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export default function EnBlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gray-900 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              My Blog
            </h1>
            <p className="text-xl text-gray-300">
              Thoughts on data, leadership, and my journey as Head of Data and Cloud
            </p>
          </div>

          <div className="space-y-8">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
                      <Link href={`/en/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <time className="text-gray-400 text-sm">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  
                  {post.excerpt && (
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  )}
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Link
                    href={`/en/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
