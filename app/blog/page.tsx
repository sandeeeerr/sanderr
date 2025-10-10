import React, { Suspense } from "react";
import SectionHeading from "@/components/section-heading";
import BlogCard from "@/components/blog-card";
import Pagination from "@/components/pagination";
import { getBlogPostsPaginated } from "@/lib/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa6";

type BlogPageProps = {
  searchParams: Promise<{ page?: string }>;
};

function BlogSkeleton() {
  return (
    <div className="max-w-[42rem] mx-auto">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="mb-8 h-64 bg-white/5 rounded-lg animate-pulse"
        />
      ))}
    </div>
  );
}

async function BlogList({ page }: { page: number }) {
  const { data: posts, pagination } = await getBlogPostsPaginated(page);

  if (posts.length === 0 && page === 1) {
    return (
      <div className="text-center py-12">
        <p className="text-white/60 text-lg mb-4">
          No blog posts yet. Check back soon!
        </p>
        <Link href="/">
          <Button variant="glass" size="sm" className="group">
            <FaChevronLeft className="opacity-80 transition group-hover:-translate-x-1" />
            Back to home
          </Button>
        </Link>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-white/60 text-lg mb-4">No posts found on this page.</p>
        <Link href="/blog">
          <Button variant="glass" size="sm" className="group">
            <FaChevronLeft className="opacity-80 transition group-hover:-translate-x-1" />
            Back to page 1
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        currentPage={pagination.page}
        totalPages={pagination.totalPages}
        baseUrl="/blog"
      />
    </>
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || "1", 10);
  const validPage = isNaN(page) || page < 1 ? 1 : page;

  return (
    <main className="flex flex-col items-center px-4 mx-auto md:max-w-screen-2xl sm:px-6 lg:px-8 py-8 md:py-10 max-w-full overflow-x-hidden">
      <section className="scroll-mt-28 mb-28 w-full max-w-6xl">
        <SectionHeading>Blog</SectionHeading>
        <Suspense fallback={<BlogSkeleton />}>
          <BlogList page={validPage} />
        </Suspense>
      </section>
    </main>
  );
}

