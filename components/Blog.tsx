import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: 'The Future of Web Development in Maharashtra',
    excerpt: 'Exploring emerging trends and technologies shaping the digital landscape in our region.',
    date: '2023-06-15',
    slug: 'future-web-development-maharashtra'
  },
  {
    title: 'How AI is Transforming Web Design',
    excerpt: 'Discover the impact of artificial intelligence on modern web design practices.',
    date: '2023-06-01',
    slug: 'ai-transforming-web-design'
  },
  {
    title: 'Building Accessible Websites: A Guide',
    excerpt: 'Learn best practices for creating inclusive and accessible web experiences for all users.',
    date: '2023-05-20',
    slug: 'building-accessible-websites-guide'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                    Read More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}