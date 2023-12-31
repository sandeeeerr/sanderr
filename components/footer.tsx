import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 mt-10 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; 2023 Sander. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        Next.js, TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
