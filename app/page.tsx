import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      
       <div>
      <h1>Hello, Next.js 14 App Directory!</h1>
      <p>
        <Link prefetch href="/initial-data">
          Prefetching Using initial data --- Good for SEO
        </Link>
      </p>
      <p>
        <Link prefetch href="/hydration">
          Prefetching Using Hydration --- Good for SEO
        </Link>
      </p>
    </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    
      </footer>
    </div>
  );
}
