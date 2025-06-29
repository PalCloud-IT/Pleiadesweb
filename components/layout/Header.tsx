'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Rocket, Brain, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isAerospacePage = pathname.startsWith('/aerospace');
  const isAIPage = pathname.startsWith('/ai');

  const aerospacePages = [
    { name: 'Overview', href: '/aerospace' },
    { name: 'Development', href: '/aerospace' }, // All link to main page since subpages don't exist yet
    { name: 'Specifications', href: '/aerospace' },
  ];

  const aiPages = [
    { name: 'Overview', href: '/ai' },
    { name: 'Capabilities', href: '/ai' }, // All link to main page since subpages don't exist yet
    { name: 'Development', href: '/ai' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-[#003f88] to-[#00aaff] rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
            </div>
            <span className="text-xl font-bold text-white">Pleiades Corporation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {!isAerospacePage && !isAIPage && (
              <>
                <Link href="/about" className="text-white hover:text-[#00aaff] transition-colors">
                  About
                </Link>
                <Link href="/projects" className="text-white hover:text-[#00aaff] transition-colors">
                  Projects
                </Link>
                <Link href="/announcements" className="text-white hover:text-[#00aaff] transition-colors">
                  Announcements
                </Link>
                <Link href="/contact" className="text-white hover:text-[#00aaff] transition-colors">
                  Contact
                </Link>
              </>
            )}

            {isAerospacePage && (
              <>
                {aerospacePages.slice(0, 2).map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="text-white hover:text-[#00aaff] transition-colors"
                  >
                    {page.name}
                  </Link>
                ))}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-white hover:text-[#00aaff] transition-colors">
                    More <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black border-gray-800">
                    {aerospacePages.slice(2).map((page) => (
                      <DropdownMenuItem key={page.href} asChild>
                        <Link href={page.href} className="text-white hover:text-[#00aaff]">
                          {page.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}

            {isAIPage && (
              <>
                {aiPages.slice(0, 2).map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="text-white hover:text-[#00aaff] transition-colors"
                  >
                    {page.name}
                  </Link>
                ))}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-white hover:text-[#00aaff] transition-colors">
                    More <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black border-gray-800">
                    {aiPages.slice(2).map((page) => (
                      <DropdownMenuItem key={page.href} asChild>
                        <Link href={page.href} className="text-white hover:text-[#00aaff]">
                          {page.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}

            <div className="flex space-x-2">
              <Button
                onClick={() => router.push('/aerospace')}
                className="bg-[#003f88] hover:bg-[#00aaff] transition-colors"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Pleiades Aerospace
              </Button>
              <Button
                onClick={() => router.push('/ai')}
                className="bg-[#003f88] hover:bg-[#00aaff] transition-colors"
              >
                <Brain className="w-4 h-4 mr-2" />
                NovusAI
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-[#00aaff] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 glass-effect rounded-lg p-4">
            {!isAerospacePage && !isAIPage && (
              <>
                <Link href="/about" className="block text-white hover:text-[#00aaff] transition-colors">
                  About
                </Link>
                <Link href="/projects" className="block text-white hover:text-[#00aaff] transition-colors">
                  Projects
                </Link>
                <Link href="/announcements" className="block text-white hover:text-[#00aaff] transition-colors">
                  Announcements
                </Link>
                <Link href="/contact" className="block text-white hover:text-[#00aaff] transition-colors">
                  Contact
                </Link>
              </>
            )}

            {isAerospacePage && (
              <>
                {aerospacePages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block text-white hover:text-[#00aaff] transition-colors"
                  >
                    {page.name}
                  </Link>
                ))}
              </>
            )}

            {isAIPage && (
              <>
                {aiPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block text-white hover:text-[#00aaff] transition-colors"
                  >
                    {page.name}
                  </Link>
                ))}
              </>
            )}

            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
              <Button
                onClick={() => {
                  router.push('/aerospace');
                  setIsMenuOpen(false);
                }}
                className="bg-[#003f88] hover:bg-[#00aaff] transition-colors w-full"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Pleiades Aerospace
              </Button>
              <Button
                onClick={() => {
                  router.push('/ai');
                  setIsMenuOpen(false);
                }}
                className="bg-[#003f88] hover:bg-[#00aaff] transition-colors w-full"
              >
                <Brain className="w-4 h-4 mr-2" />
                NovusAI
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}