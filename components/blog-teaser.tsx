"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { formatDate } from "@/lib/utils";
import { useSectionInView } from "@/lib/hooks";
import type { BlogListItem } from "@/types/api";
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa6";

type BlogTeaserProps = {
  posts: BlogListItem[];
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function BlogTeaser({ posts }: BlogTeaserProps) {
  const { ref } = useSectionInView("Blog", 0.5);

  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      ref={ref}
      className="scroll-mt-28 mb-28 mx-auto max-w-[957.14px]"
    >

     
      <SectionHeading>Latest blog posts</SectionHeading>
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
        {posts.slice(0, 3).map((post, index) => (
          <motion.article
            key={post.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="rounded-2xl p-5 transition group bg-white/5 backdrop-blur-lg hover:bg-white/10 border border-black/5"
          >
            <div className="flex flex-col h-full">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col">
                  {post.published_at && (
                    <time
                      className="text-xs text-white/50 mb-2"
                      dateTime={post.published_at}
                    >
                      {formatDate(post.published_at)}
                    </time>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </Link>

              {post.excerpt && (
                <p className="text-sm text-white/60 line-clamp-3 mb-3">
                  {post.excerpt}
                </p>
              )}

              <div className="mt-auto pt-2">
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="glass" size="sm">Read more</Button>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.div 
        className="text-center mt-8 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Link href="/blog">
          <Button variant="glass" size="md" className="group">
            View all posts
            <FaChevronRight className="opacity-80 transition group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}

