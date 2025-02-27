import { CircuitBoard, Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8" style={{ backgroundColor: 'rgb(var(--primary-color))', color: 'white' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center">
            <CircuitBoard className="mr-2 h-8 w-8" />
            <span className="text-xl font-bold">RodgerTech</span>
          </div>
          
          <div>
            <p className="text-center md:text-left">© {new Date().getFullYear()} Rodgers Chisale. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://web.facebook.com/rodgers.chisale.5688" target="_blank" rel="noopener noreferrer" className="social-icon text-white">
              <Facebook />
            </a>
            <a href="https://x.com/Fwafaxa" target="_blank" rel="noopener noreferrer" className="social-icon text-white">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/rodgerchisale/" target="_blank" rel="noopener noreferrer" className="social-icon text-white">
              <Instagram />
            </a>
            <a href="https://github.com/bed-com-05-20" target="_blank" rel="noopener noreferrer" className="social-icon text-white">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;