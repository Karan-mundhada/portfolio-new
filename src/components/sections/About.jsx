import React, { useState } from "react";
import {
  TerminalSquare,
  Coffee,
  CodeSquare,
  BookOpen,
  Rocket,
  Mail,
  ExternalLink,
} from "lucide-react";

export const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = {
    story: {
      icon: <TerminalSquare className="w-4 h-4" />,
      title: "My Story",
      content: (
        <>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I'm Karan Mundhada, a ML Engineer and Frontend Dev with a strong
            drive for exploring technology and a fascination with how everything
            works. I love tackling complex problems and designing solutions that
            can make a meaningful impact. This curiosity fuels my journey in
            computer science, where I'm constantly aiming to build and innovate.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm currently pursuing a Computer Science Engineering degree with
            Honors in Data Science at Pune Institute of Computer Technology. My
            journey here has been transformative, offering me opportunities to
            deepen my knowledge in fields like web development, machine
            learning, and data analysis. From creating scalable frontend
            applications to diving into data-driven solutions, I'm motivated by
            a passion for building robust, efficient software.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Beyond coding, I'm actively engaged in community roles, having held
            leadership positions in clubs like the IEEE Student Branch and
            DEBSOC at PICT. These experiences taught me the value of teamwork,
            communication, and effective collaboration—skills I carry into every
            project. When I'm not developing, I enjoy exploring tech trends,
            contributing to open-source, and sharing knowledge with the
            community.
          </p>
        </>
      ),
    },
    interests: {
      icon: <Coffee className="w-4 h-4" />,
      title: "Interests",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: <CodeSquare className="w-5 h-5 text-blue-400" />,
              title: "Web Development",
              description:
                "Building modern, responsive web applications using cutting-edge technologies",
            },
            {
              icon: <BookOpen className="w-5 h-5 text-green-400" />,
              title: "Continuous Learning",
              description:
                "Always exploring new technologies and staying updated with industry trends",
            },
            {
              icon: <TerminalSquare className="w-5 h-5 text-yellow-400" />,
              title: "Machine Learning",
              description:
                "Building intelligent systems that learn from data and make informed decisions",
            },
            {
              icon: <Rocket className="w-5 h-5 text-purple-400" />,
              title: "Innovation",
              description:
                "Creating efficient solutions to complex technical challenges",
            },
          ].map((interest, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded border-2 border-gray-600 hover:border-blue-500 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                {interest.icon}
                <h3 className="font-bold">{interest.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    connect: {
      icon: <Mail className="w-4 h-4" />,
      title: "Connect",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 mb-4">
            I'm always open to discussing innovative ideas or collaborating on
            challenging projects. Reach out through any of the platforms below:
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              {
                icon: <CodeSquare className="w-5 h-5" />,
                label: "GitHub",
                link: "https://github.com/Karan-mundhada",
                color: "hover:text-gray-300",
              },
              {
                icon: <ExternalLink className="w-5 h-5" />,
                label: "LinkedIn",
                link: "https://www.linkedin.com/in/karan-mundhada-075b071b7/",
                color: "hover:text-blue-400",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                label: "Email",
                link: "mailto:karanmundhada@engineer.com",
                color: "hover:text-green-400",
              },
            ].map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 bg-gray-800 rounded border-2 border-gray-600 ${platform.color} hover:border-blue-500 transition-all`}
              >
                {platform.icon}
                <span>{platform.label}</span>
              </a>
            ))}
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="bg-gray-700 p-6 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
      <h2 className="text-2xl mb-6 text-green-400 font-bold">About Me</h2>

      {/* Tab Navigation - Only mobile button sizes updated */}
      <div className="flex gap-4 mb-6">
        {Object.entries(tabs).map(([key, { icon, title }]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border-2 flex items-center gap-2 ${
              activeTab === key
                ? "bg-blue-600 border-blue-700 text-white"
                : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-600"
            } rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] active:translate-x-[2px] active:translate-y-[2px] transition-all`}
          >
            {icon}
            <span>{title}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-800 p-6 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};
