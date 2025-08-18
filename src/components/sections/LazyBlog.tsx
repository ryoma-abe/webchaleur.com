import dynamic from 'next/dynamic';

const BlogSection = dynamic(
  () => import('./BlogServer'),
  {
    loading: () => (
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-32 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-[20px] h-80"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    ssr: true,
  }
);

export default BlogSection;