import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

          {/* Name and Title */}
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Srinivasan Thanmaya
          </h3>
          <p className="text-gray-400 mb-8">Aspiring Full Stack Developer</p>

          {/* Quote */}
          <blockquote className="text-lg italic text-gray-300 mb-8 max-w-2xl mx-auto">
            "Building modern web experiences with clean code and creativity"
          </blockquote>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-2" /> by Srinivasan Thanmaya
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;