import { Code, Database, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 82 }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Java", level: 85 },
        { name: "Python", level: 88 },
        { name: "SQL", level: 90 }
      ]
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-600 to-teal-600",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Google Cloud", level: 85 },
        { name: "MS Excel", level: 90 },
        { name: "Git", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mr-4 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Additional Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Data Structures", "Algorithms", "Effective Communication", "Database Design", "Time Management", "Version Control", "Problem Solving", "Team Collaboration"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-white rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;