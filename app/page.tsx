import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">

      <div className="relative flex place-items-center before:absolute before:h-[40px] before:w-[280px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-[280px] after:bg-gradient-conic after:from-sky-50 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-50 before:lg:h-[160px]">
      <Image
          className="relative"
          src="/logo.png"
          alt="Next.js Logo"
          width={200}
          height={200}
          priority
        />
      </div>

    </main>
  )
}
