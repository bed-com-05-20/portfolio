import { Facebook, Twitter, Instagram, Github } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center">
            {/* Rounded logo with text */}
            <div className="flex items-center">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-400 bg-gray-800 p-1">
                <Image 
                  src="/logo.png" 
                  alt="Skytec Logo"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              {/* <span className="text-xl font-bold text-white">Skytec</span> */}
            </div>
          </div>
          
          <div>
            <p className="text-center md:text-left text-sm">
              © {new Date().getFullYear()} Rodgers Chisale. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://web.facebook.com/rodgers.chisale.5688" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://x.com/Fwafaxa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/rodgerchisale/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/bed-com-05-20" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;