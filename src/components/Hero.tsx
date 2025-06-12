import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Bubble Animation Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (  // Increased bubble count
          <div
            key={i}
            className="absolute rounded-full bg-blue-300 opacity-50 blur-sm animate-bubble" // Adjusted color, opacity, and blur
            style={{
              width: `${Math.random() * 40 + 20}px`, // Increased bubble size range
              height: `${Math.random() * 40 + 20}px`, // Increased bubble size range
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 100}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`, // Adjusted animation duration
            }}
          ></div>
        ))}
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-pink-50"></div> {/* Adjusted gradient colors for subtlety */}

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full opacity-20 animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-down">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 ring-4 ring-white ring-opacity-50">
              <img
                src="/Passport.jpg"
                alt="Srinivasan Thanmaya"
                className="w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Srinivasan Thanmaya
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light animate-slide-in-down">
            Learner Today, Creator Tomorrow
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Driven by curiosity, shaped by learning, and ready to take on real-world challenges.
            Passionate about crafting efficient and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-300">
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <button>Download Resume</button>
            </a>

            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up delay-500">
            <a
              href="https://www.linkedin.com/in/thanmayas/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50 animate-float"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thanmayasrinivasan15@gmail.com&su=Let%27s%20Connect&body=Hi%20Thanmaya%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-red-50 animate-float delay-200"
            >
              <Mail className="w-6 h-6 text-red-600" />
            </a>

            <a
              href="https://github.com/sthanmaya"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50 animate-float delay-400"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("#about")}
            className="animate-bounce"
          >
            <ArrowDown className="w-8 h-8 text-gray-400 hover:text-purple-600 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
