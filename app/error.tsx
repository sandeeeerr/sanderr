"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center px-4 mx-auto md:max-w-screen-2xl sm:px-6 lg:px-8 py-20 md:py-32 max-w-full overflow-x-hidden min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white/90 mb-4">Oops!</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white/80 mb-4">
          Something went wrong
        </h2>
        <p className="text-lg text-white/60 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again.
        </p>
        <Button
          variant="glass"
          size="md"
          onClick={reset}
          className="group"
        >
          Try Again
        </Button>
      </div>
    </main>
  );
}

