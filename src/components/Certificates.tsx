import {
  FileBadge,
  GraduationCap,
  BadgeCheck,
  Star,
  BarChart,
  Cloud,
  Smartphone,
  Shield,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Brain,
} from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Salesforce Developer Virtual Internship",
    issuer: "May 2023 – Jul 2023",
    icon: <FileBadge className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500",
    description:
      "Hands-on experience in Salesforce development, CRM customization, and workflows.",
    image: "/public/Salesforce.jpg",
  },
  {
    title: "J.P. Morgan Excel Skills Job Simulation",
    issuer: "Aug 2023 – Sep 2023",
    icon: <BarChart className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    description:
      "Simulated work tasks to strengthen Excel-based financial modeling and analysis.",
    image: "/public/Excel.jpg",
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "Sep 2023 – Nov 2023",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    description:
      "Created Android apps using Kotlin and Java, including UI/UX and Firebase integration.",
    image: "/public/Android.jpg",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Jan 2024 – Feb 2024",
    icon: <Shield className="w-6 h-6" />,
    color: "from-red-500 to-pink-500",
    description:
      "Simulated security threat assessments, risk mitigation strategies, and incident response.",
    image: "/public/CS.jpg",
  },
  {
    title: "Data Engineering Virtual Internship",
    issuer: "Jan 2024 – Mar 2024",
    icon: <Star className="w-6 h-6" />,
    color: "from-indigo-600 to-cyan-600",
    description:
      "Covered ETL pipelines, AWS services, and data lake architecture using AWS Academy resources.",
    image: "/public/Data.jpg",
  },
  {
    title: "Accenture Data Analytics Job Simulation",
    issuer: "Mar 2024",
    icon: <BarChart className="w-6 h-6" />,
    color: "from-purple-600 to-pink-600",
    description:
      "Analyzed data and created visual dashboards for simulated business cases using Power BI.",
    image: "/public/Accenture.jpg",
  },
  {
    title: "Cloud Virtual Internship",
    issuer: "Apr 2024 – Jun 2024",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-teal-500 to-sky-500",
    description:
      "Completed projects on AWS cloud services, serverless architecture, and deployment pipelines.",
    image: "/public/Cloud.jpg",
  },
  {
    title: "Salesforce Administrator Virtual Internship",
    issuer: "May 2024 – Jun 2024",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-rose-500 to-fuchsia-500",
    description:
      "Explored Salesforce admin capabilities including workflows, security, and reports.",
    image: "/public/Admin.jpg",
  },
  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "May 2024 – Jul 2024",
    icon: <BadgeCheck className="w-6 h-6" />,
    color: "from-lime-500 to-green-500",
    description:
      "Focused on business communication, IT basics, and career readiness skills.",
    image: "/public/Tcs.jpg",
  },
  {
    title: "Full Stack Development Internship – Venzo Technologies",
    issuer: "May 2024 – Jul 2024",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-blue-700 to-purple-700",
    description:
      "Built and deployed full-stack applications with React, Node.js, and MongoDB.",
    image: "/Venzo.jpg",
  },
  {
    title: "Google AIML Virtual Internship",
    issuer: "Jan 2025 – Mar 2025",
    icon: <Brain className="w-6 h-6" />, // You can replace with another AI/ML-related icon if needed
    color: "from-blue-700 to-purple-700",
    description:
      "Explored machine learning algorithms and developed intelligent web apps using TensorFlow, Python, and React as part of Google’s AIML program.",
    image: "/public/AIML.jpg",
  },
];

const Certificates = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index): void => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Verified credentials that demonstrate my proficiency in development
            and problem-solving.
          </p>
        </div>

        {/* Centered and narrow certificate list */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-white`}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-500">{cert.issuer}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {cert.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-gray-600 hover:text-purple-600"
                >
                  {expanded === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>
              </div>

              {expanded === index && (
                <div className="mt-4">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full max-w-xl rounded-lg border border-gray-200"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
