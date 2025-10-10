import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import TagBadge from "@/components/tag-badge";
import Prose from "@/components/prose";
import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa6";
import type { Metadata } from "next";

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt || "";
  const images = post.seo?.ogImage ? [post.seo.ogImage] : [];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      type: "article",
      publishedTime: post.published_at || undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center px-4 mx-auto md:max-w-screen-2xl sm:px-6 lg:px-8 py-8 md:py-10 max-w-full overflow-x-hidden">
      <article className="w-full max-w-[56rem]">
        {/* Back link */}
        <Link href="/blog" className="inline-block mb-8">
          <Button size="md" className="gap-2 rounded-full group">
            <FaChevronLeft className="opacity-80 transition group-hover:-translate-x-1" />
            Back to blog
          </Button>
        </Link>

        {/* Cover image */}
        {post.cover_image_url && (
          <div className="relative w-full h-[300px] md:h-[350px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src={post.cover_image_url}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex flex-wrap items-center gap-3">
              {post.category && (
                <span className="text-sm uppercase tracking-wider text-white/50 font-semibold">
                  {post.category}
                </span>
              )}
              {post.published_at && (
                <time
                  className="text-sm text-white/50"
                  dateTime={post.published_at}
                >
                  {formatDate(post.published_at)}
                </time>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 md:ml-auto md:mt-0">
                {post.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-white/70 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Tags moved to header right */}

        {/* Content */}
        <div className="mb-12">
          <Prose html={post.content_html} />
        </div>

        {/* Back link (bottom) */}
        <Link href="/blog" className="inline-block">
          <Button size="md" className="rounded-full gap-2 group">
            <FaChevronLeft className="opacity-80 transition group-hover:-translate-x-1" />
            Back to blog
          </Button>
        </Link>
      </article>
    </main>
  );
}

