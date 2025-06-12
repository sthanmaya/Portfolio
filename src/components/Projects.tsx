import { Github, Music, BookOpen, CreditCard, Gamepad2, Network, Puzzle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Vibify – Music Website",
      description: "A modern music streaming platform with song browsing, album discovery, and user authentication features.",
      tech: ["HTML", "CSS", "JavaScript","Bootstrap"],
      icon: <Music className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      features: ["Song browsing", "Album discovery", "User authentication"],
      github: "https://github.com/sthanmaya/WT/blob/main/Mainpage",
      
    },
    {
      title: "Library Management System",
      description: "Efficient library management using advanced data structures for optimal performance and organization.",
      tech: ["Data Structures", "Linked Lists", "Hash Tables", "Trees"],
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      features: ["Book cataloging", "Member management", "Search optimization"],
      github: "https://github.com/yourusername/library-management-system",
      
    },
    {
      title: "Bank Database Management",
      description: "Comprehensive banking system with SQL-based record management and transaction processing.",
      tech: ["SQL", "Database Design", "DBMS"],
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-green-600 to-teal-600",
      features: ["Account management", "Transaction tracking", "Report generation"],
      github: "https://github.com/sthanmaya/DBMS/blob/main/bankdatabase",
      
    },
    {
      title: "Python Memory Puzzle Game",
      description: "Interactive memory puzzle game with intuitive GUI and engaging gameplay mechanics.",
      tech: ["Python", "Tkinter", "GUI Development"],
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "from-orange-600 to-red-600",
      features: ["Interactive gameplay", "Score tracking", "Difficulty levels"],
      github: "https://github.com/sthanmaya/Python/blob/main/memorypuzzle",
      
    },
    {
      title: "Static Routing Configuration",
      description: "Network infrastructure setup with Cisco routing protocols and configuration management.",
      tech: ["Cisco", "Networking", "Routing Protocols"],
      icon: <Network className="w-8 h-8" />,
      color: "from-indigo-600 to-purple-600",
      features: ["Route configuration", "Network optimization", "Protocol setup"],
      github: "https://github.com/sthanmaya/CN/blob/main/CN%20PROJECT.docx",
      
    },
    {
      title: "Java Swing Puzzle Game",
      description: "Desktop puzzle game application with Java Swing UI and interactive problem-solving mechanics.",
      tech: ["Java", "Swing", "UI Development"],
      icon: <Puzzle className="w-8 h-8" />,
      color: "from-yellow-600 to-orange-600",
      features: ["Interactive UI", "Puzzle mechanics", "Game logic"],
      github: "https://github.com/sthanmaya/Java/blob/main/Puzzle",
      
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my technical skills and creative problem-solving through diverse development projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 hover:border-purple-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Want to see more of my work or collaborate on a project?
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
