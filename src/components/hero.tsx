'use client'
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="container flex flex-col items-center px-4 space-y-4 md:space-y-6 md:px-6 max-w-4xl">
        <div className="space-y-2 text-center w-full">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Cool README</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            The fastest way to build better, and prettier README files. 🧑🏽‍💻
          </p>
          <Link
  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
  href="/app"
  style={{
    transition: 'all 0.3s ease',
    boxShadow: 'none',
  }}
  onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(16, 46, 177, 0.7), 0 0 20px rgba(0, 0, 0, 0.7), 0 0 30px purple'}
  onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
>
  Get Started
</Link>

        </div>
        
        <div className="w-full flex justify-center items-center p-2 rounded-lg shadow-glow">
          <Image
            src="/ui1.gif"  
            alt="Interface Image"
            width={1400}  
            height={600}  
            objectFit="cover"  
            className="rounded-lg"  
          />
        </div>
      </div>
    </section>
  )
}
