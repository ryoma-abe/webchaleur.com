import dynamic from 'next/dynamic';

const BlogSection = dynamic(
  () => import('./BlogServer'),
  {
    ssr: true,
  }
);

export default BlogSection;