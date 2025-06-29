import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Pleiades Corporation</h3>
            <p className="text-gray-400">
              Advancing the future through innovative aerospace and AI technologies.
            </p>
            <p className="text-gray-400 text-sm">
              Email: support@pleiadescorporation.co.uk
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="text-gray-400 hover:text-[#00aaff] transition-colors block">
                About Us
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-[#00aaff] transition-colors block">
                Projects
              </Link>
              <Link href="/announcements" className="text-gray-400 hover:text-[#00aaff] transition-colors block">
                Announcements
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#00aaff] transition-colors block">
                Contact
              </Link>
            </div>
          </div>

          {/* Divisions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Divisions</h4>
            <div className="space-y-2">
              <Link href="/aerospace" className="text-gray-400 hover:text-[#00aaff] transition-colors block">
                Pleiades Aerospace
              </Link>
              <Link href="/ai" className="text-gray-400 hover:text-[#00aaff] transition-colors block">
                NovusAI
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-gray-600 hover:border-[#00aaff]">
                <Mail className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 hover:border-[#00aaff]">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 hover:border-[#00aaff]">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 hover:border-[#00aaff]">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Pleiades Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}