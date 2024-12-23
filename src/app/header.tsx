"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const LINKS = {
  Blog: '/blog',
  Products: '/products'
}

export default function Header() {
  const pathname = usePathname();

  return (
      <header className='p-4'>
        <nav>
          <ul className="flex items-center gap-20 justify-center font-bold">
            {Object.entries(LINKS).map(([key, value]) => (
                <li key={key}>
                  <Link href={value} className={`hover:text-blue-500 transition-colors ${pathname === value ? 'text-blue-900 pointer-events-none' : ''}`}>
                    {key}
                  </Link>
                </li>
            ))}
          </ul>
        </nav>
      </header>
  )
}