import React from "react";

type ProseProps = {
  html: string;
};

export default function Prose({ html }: ProseProps) {
  return (
    <div
      className="prose prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

