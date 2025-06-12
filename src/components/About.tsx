import { GraduationCap } from 'lucide-react';

const About = () => {
  // const values = [  // Commented out the values array
  //   {
  //     icon: <Users className="w-8 h-8" />,
  //     title: "Collaboration",
  //     description: "I thrive in team environments and believe great products are built together."
  //   },
  //   {
  //     icon: <Lightbulb className="w-8 h-8" />,
  //     title: "Innovation",
  //     description: "Always exploring new technologies and creative solutions to complex problems."
  //   },
  //   {
  //     icon: <Heart className="w-8 h-8" />,
  //     title: "Passion",
  //     description: "Driven by genuine enthusiasm for creating meaningful digital experiences."
  //   }
  // ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Bio */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-600">
                <p className="text-md leading-relaxed">
                  I am Thanmaya, a BTech IT student with a strong focus on Full Stack Development,
                  driven by a passion for building efficient and innovative web applications.
                </p>
                <p className="text-md leading-relaxed">
                  My skillset includes HTML, CSS, JavaScript, React, 
                  Node.js, and other modern web technologies. 
                  As a fresher, I bring fresh ideas, strong learning ability, and a collaborative mindset to the table. 
                  I'm always exploring the latest industry trends and tools to stay ahead.
                </p>
                <p className="text-md leading-relaxed">
                  I'm currently seeking exciting opportunities where I can contribute, learn, and grow as a developer.
                   Let’s build something amazing together!
                </p>
              </div>
            </div>

            {/* Right Side - Education */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">BTech in Information Technology</h4>
                <p className="text-lg text-purple-600 font-medium">Sree Vidyanikethan Engineering College</p>
                <p className="text-gray-600">2021 – 2025</p>
                <p className="text-sm text-gray-500 mt-4">
                  CGPA - 9.13
                </p>
                <h4 className="text-xl font-semibold text-gray-800">Intermediate </h4>
                <p className="text-lg text-purple-600 font-medium">Sri Chaitanya Junior College</p>
                <p className="text-gray-600">2018 – 2020</p>
                <p className="text-sm text-gray-500 mt-4">
                  CGPA - 9.94
                </p>
                <h4 className="text-xl font-semibold text-gray-800">SSC</h4>
                <p className="text-lg text-purple-600 font-medium">Sri Chaitanya School</p>
                <p className="text-gray-600">2018</p>
                <p className="text-sm text-gray-500 mt-4">
                  CGPA - 10.0
                </p>
              </div>
              
            </div>
            
          </div>

          {/* Values Section */}
          {/* {values.map((value, index) => (   Commented out the values mapping
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-purple-50 hover:from-purple-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))} */}

        </div>
      </div>
    </section>
  );
};

export default About;
