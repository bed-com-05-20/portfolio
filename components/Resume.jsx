"use client";

import { useEffect, useState } from "react";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("resume");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const experiences = [
    {
      id: 1,
      date: "2021 - Present",
      title: "Full Stack Developer",
      company: "SkyTech",
    },
    {
      id: 2,
      date: "2021 - Present",
      title: "Front-end Developer Intern",
      company: "SkyTech",
    },
  ];

  const education = [
    {
      id: 1,
      date: "2018 - 2022",
      title: "Bachelor of Education in Computer Science",
      institution: "University of Malawi",
    },
    {
      id: 2,
      date: "2016 - 2018",
      title: "Programming in Different Languages",
      institution: "UNIMA, Online Learning",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "HTML/CSS",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "SQL",
    "Git",
    "UI/UX Design",
    "Responsive Design",
  ];

  const aboutMe = (
    <div className="rounded-lg bg-gray-800 p-6 text-gray-300">
      <p className="mb-4">
        I am a passionate software developer with a strong focus on creating
        beautiful, functional websites and applications. With 4 years of
        experience, I've developed a deep understanding of modern web
        technologies and best practices.
      </p>
      <p className="mb-4">
        My approach combines technical expertise with creative problem-solving
        to deliver solutions that not only work flawlessly but also provide an
        exceptional user experience.
      </p>
      <p>
        When I'm not coding, I enjoy exploring new technologies, contributing to
        open-source projects, and sharing my knowledge with the developer
        community.
      </p>
    </div>
  );

  return (
    <section id="resume" className="min-h-screen py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Sidebar Navigation */}
          <div className="mb-12 md:mb-0 md:w-1/3">
            <h2
              className={`text-4xl font-bold mb-8 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } text-blue-400`}
            >
              WHY HIRE ME?
            </h2>
            <p
              className={`mb-12 text-xl text-gray-400 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              I'm good at creating the best websites and am proficient in
              various programming languages and technologies.
            </p>

            <div className="space-y-4">
              {["experience", "education", "skills", "about"].map((tab) => (
                <button
                  key={tab}
                  className={`w-full rounded-lg py-3 px-4 text-left text-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "experience"
                    ? "My Experience"
                    : tab === "education"
                    ? "Education"
                    : tab === "skills"
                    ? "Skills"
                    : "About Me"}
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-2/3">
            {/* Dynamic Section Title */}
            <h2
              className={`text-3xl font-bold mb-8 text-white transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {activeTab === "experience"
                ? "My Experience"
                : activeTab === "education"
                ? "Education"
                : activeTab === "skills"
                ? "My Skills"
                : "About Me"}
            </h2>

            {/* Dynamic Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {activeTab === "experience" &&
                experiences.map((exp) => (
                  <div key={exp.id} className="mb-8 p-6 rounded-lg bg-gray-800">
                    <p className="text-blue-400 mb-2">{exp.date}</p>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                ))}

              {activeTab === "education" &&
                education.map((edu) => (
                  <div key={edu.id} className="mb-8 p-6 rounded-lg bg-gray-800">
                    <p className="text-blue-400 mb-2">{edu.date}</p>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                  </div>
                ))}

              {activeTab === "skills" && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="rounded-lg bg-gray-800 p-4 text-center text-white hover:bg-blue-600 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "about" && aboutMe}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;