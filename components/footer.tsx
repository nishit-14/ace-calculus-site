import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/ace-logo.png"
                alt="ACE Tutoring Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering students to aim high, challenge themselves, and excel in their academic journey through
              personalized tutoring and innovative learning methods.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#classes" className="text-gray-300 hover:text-white transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#cool-stuff" className="text-gray-300 hover:text-white transition-colors">
                  Cool Stuff
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-ace-blue" />
                <span className="text-gray-300">+1 (408) 680-6027</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-ace-green" />
                <span className="text-gray-300">gc95014@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 ACE Tutoring. All rights reserved. | Aim • Challenge • Excel</p>
        </div>
      </div>
    </footer>
  )
}
