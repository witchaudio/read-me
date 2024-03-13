import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex h-14 items-center bg-black-900/95 backdrop-blur-sm blur-overflow relative">
      {/* Removed 'shrink-0' and 'justify-end' from here if 'container' has its own full width */}
      <div className="flex justify-end items-center w-full px-4">
        {/* Removed 'container' class that may be restricting the width */}
        
        {/* Image links aligned to the right */}
        <div className="flex items-center gap-2">
          <Link href="/" passHref>

              <Image
                alt="file"
                className="rounded-full"
                height="40"
                src="/code-file.png"
                width="40"
              />
 
          </Link>
          <Link href="https://github.com/witchaudio" passHref>
              <Image
                alt="github"
                className="rounded-full"
                height="40"
                src="/gthub-icon.png"
                width="40"
              />

          </Link>
          
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full border-t border-transparent" style={{ 
          height: '4px',
          background: 'linear-gradient(to right, darkblue, purple, black)' 
      }}>
      </div>
    </header>
  );
}
