"use client";

import dynamic from "next/dynamic";

const ExperienceLazy = dynamic(() => import("@/components/experience"), {
  ssr: false,
  loading: () => <div className="h-40 w-full" />,
});

const BlogTeaserLazy = dynamic(() => import("@/components/blog-teaser"), {
  ssr: false,
  loading: () => <div className="h-40 w-full" />,
});

interface ClientLazySectionsProps {
  blogPosts: any[];
}

export default function ClientLazySections({ blogPosts }: ClientLazySectionsProps) {
  return (
    <>
      <ExperienceLazy />
      <BlogTeaserLazy posts={blogPosts} />
    </>
  );
}

