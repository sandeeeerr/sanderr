import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaChevronLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center px-4 mx-auto md:max-w-screen-2xl sm:px-6 lg:px-8 py-20 md:py-32 max-w-full overflow-x-hidden min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-white/90 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white/80 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-white/60 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="glass" size="md" className="group">
            <FaChevronLeft className="opacity-80 transition group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}

