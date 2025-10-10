"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { formatDate } from "@/lib/utils";
import TagBadge from "./tag-badge";
import { Button } from "./ui/button";
import type { BlogListItem } from "@/types/api";

type BlogCardProps = {
  post: BlogListItem;
};

export default function BlogCard({ post }: BlogCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 group sm:mb-8 last:mb-0 "
    >
      <article className="w-full border border-black/5 rounded-2xl overflow-hidden relative sm:h-[20rem] transition text-white bg-white/5 backdrop-blur-lg hover:bg-white/10">
        <div className={`pt-6 pb-6 md:pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-8 flex flex-col h-full ${post.cover_image_url ? 'sm:max-w-[53%]' : 'sm:max-w-full'}`}>
           <div className="flex flex-col">
             <div className="flex items-center gap-3 mb-2">
               {post.category && (
                 <span className="text-xs uppercase tracking-wider text-white/50 font-semibold">
                   {post.category}
                 </span>
               )}
               {post.published_at && (
                 <time
                   className="text-xs text-white/50"
                   dateTime={post.published_at}
                 >
                   {formatDate(post.published_at)}
                 </time>
               )}
             </div>
             <Link href={`/blog/${post.slug}`}>
               <h3 className="text-2xl font-semibold hover:text-white/90 transition">
                 {post.title}
               </h3>
             </Link>
             {post.tags && post.tags.length > 0 && (
               <ul className="flex flex-wrap gap-2 my-1 sm:hidden">
                 {post.tags.slice(0, 3).map((tag) => (
                   <li key={tag}>
                     <TagBadge tag={tag} />
                   </li>
                 ))}
                 {post.tags.length > 3 && (
                   <li className="text-white/50 text-sm">
                     +{post.tags.length - 3} more
                   </li>
                 )}
               </ul>
             )}
           </div>

          {post.excerpt && (
            <p className="mt-2 leading-relaxed text-white/70 line-clamp-3">
              {post.excerpt}
            </p>
          )}

          {post.tags && post.tags.length > 0 && (
            <ul className="hidden sm:flex flex-wrap gap-2 mt-2">
              {post.tags.slice(0, 3).map((tag) => (
                <li key={tag}>
                  <TagBadge tag={tag} />
                </li>
              ))}
              {post.tags.length > 3 && (
                <li className="text-white/50 text-sm self-center">
                  +{post.tags.length - 3} more
                </li>
              )}
            </ul>
          )}

          <div className="mt-auto pt-4">
            <Link href={`/blog/${post.slug}`}>
              <Button variant="glass" size="sm">
                Read more
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile image */}
        {post.cover_image_url && (
          <div className="relative mt-4 w-full h-48 sm:hidden">
            <Image
              src={post.cover_image_url}
              alt={post.title}
              quality={95}
              className="object-cover object-center ml-5 rounded-t-lg shadow-lg overflow-hidden"
              fill
            />
          </div>
        )}

        {/* Desktop image */}
        {post.cover_image_url && (
          <Image
            src={post.cover_image_url}
            alt={post.title}
            width={452}
            height={300}
            quality={95}
            className="absolute hidden sm:block top-8 -right-36 w-[24rem] h-[20rem] rounded-t-lg shadow-2xl
            object-cover object-center
            opacity-85
            hover:opacity-100
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            overflow-hidden"
            
          />
        )}
      </article>
    </motion.div>
  );
}

