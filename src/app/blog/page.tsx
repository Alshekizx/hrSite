'use client';
import React, { useState } from 'react';
import BlogCard from '../components/blogComponent/blogCard';
import { blogData } from './blogSampleData';
import HeroSection from '../components/ourHrServiceComponent/heroSection';
import FreeDownloadCard from '../components/blogComponent/freeDownload';

const topFilters = ['All', 'Case Study', 'Management Guide', 'Free Download'];
const sideFilters = [
  'All',
  'Product Management',
  'Control of Employment',
  'Compensations and Benefits',
  'Conducts',
  'Statutory Leave',
  'Health and Safety',
  'Employee Unboarding',
  'Performance Management',
  'Workplace Culture',
  'Leadership and Management',
];

const BlogIndexPage = () => {
  const [activeTopFilter, setActiveTopFilter] = useState('All');
  const [activeSideFilter, setActiveSideFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const filteredPosts = blogData.filter((post) => {
    const matchTop = activeTopFilter === 'All' || post.topCategory === activeTopFilter;
    const matchSide = activeSideFilter === 'All' || post.sideCategory === activeSideFilter;
    return matchTop && matchSide;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.datePosted).getTime();
    const dateB = new Date(b.datePosted).getTime();

    switch (sortBy) {
      case 'Newest':
        return dateB - dateA;
      case 'Oldest':
        return dateA - dateB;
      case 'ReadTimeAsc':
        return parseInt(a.readTime) - parseInt(b.readTime);
      case 'ReadTimeDesc':
        return parseInt(b.readTime) - parseInt(a.readTime);
      default:
        return 0;
    }
  });

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-10 pb-20">
      <HeroSection
        title="HR Blogs"
        description="Insights, trends, and practical tips on recruitment and shift-based workforce management for HR teams, locum workers, and business leaders."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Learning Hub' },
          { label: 'HR Blogs' },
        ]}
      />
      <div className='containerDiv'>

        {/* Top Filters */}
        <div className="sticky mb-5 top-20 z-10 px-4 flex justify-end">
  <div className="flex flex-wrap gap-4 items-center">
    {topFilters.map((filter) => (
      <button
        key={filter}
        className={`px-4 py-2 border rounded-lg text-sm ${
          activeTopFilter === filter
            ? 'bg-[var(--primary-color)] text-white border-[var(--primary-color)]'
            : 'bg-[var(--secondary-100)] text-[var(--secondary-300)] border-[var(--secondary-300)]'
        }`}
        onClick={() => setActiveTopFilter(filter)}
      >
        {filter}
      </button>
    ))}

    <div className="flex items-center gap-2 ml-4">
      <span>Sort By:</span>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-4 py-2 border rounded-lg text-sm bg-[var(--secondary-100)] text-[var(--secondary-300)] border-[var(--secondary-300)]"
      >
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="ReadTimeAsc">Shortest Read</option>
        <option value="ReadTimeDesc">Longest Read</option>
      </select>
    </div>
  </div>
</div>

        {/* Main Content */}
        <div className="flex w-full px-4 gap-8">
          {/* Side Filters */}
          <aside className="hidden lg:block w-1/4">
            <div className="sticky top-20 space-y-2">
              {sideFilters.map((filter) => (
                <button
                  key={filter}
                  className={`block w-full text-left transition-colors duration-200 ${
                    activeSideFilter === filter
                      ? 'text-[var(--primary-color)] no-underline font-semibold'
                      : 'text-[var(--text-muted)] hover:text-[var(--primary-200)] underline'
                  }`}
                  onClick={() => setActiveSideFilter(filter)}
                  aria-pressed={activeSideFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </aside>

          {/* Blog Cards */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sortedPosts.length > 0 ? (
              sortedPosts.map((post) =>
                activeTopFilter === 'Free Download' ? (
                  <FreeDownloadCard
                    key={post.slug}
                    slug={post.slug}
                    image={post.image}
                    title={post.title}
                    date={formatDate(post.datePosted)}
                    readTime={post.readTime}
                    description={post.summary}
                    category={post.category}
                    author={post.author}
                  />
                ) : (
                  <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    image={post.image}
                    title={post.title}
                    date={formatDate(post.datePosted)}
                    readTime={post.readTime}
                    description={post.summary}
                    category={post.category}
                    author={post.author}
                  />
                )
              )
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No blogs found for selected filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage;