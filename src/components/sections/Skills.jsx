// components/sections/Skills.js
import React, { useState } from "react";

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          level: 90,
          description:
            "Advanced React development including Hooks, Context, Redux, and Next.js",
          icon: "⚛️",
        },
        {
          name: "JavaScript",
          level: 90,
          description:
            "ES6+, TypeScript, async programming, and modern JS features",
          icon: "💻",
        },
        {
          name: "CSS",
          level: 88,
          description:
            "Tailwind, Styled Components, SASS, animations, and responsive design",
          icon: "🎨",
        },
        {
          name: "HTML5",
          level: 85,
          description:
            "Semantic markup, accessibility, and modern HTML features",
          icon: "📝",
        },
      ],
    },
    ML: {
      title: "Machine Learning",
      skills: [
        {
          name: "Python",
          level: 95,
          description: "Express.js, REST APIs, and microservices architecture",
          icon: "🐍",
        },
        {
          name: "ML Libraries",
          level: 75,
          description: "Django, Flask, and data processing applications",
          icon: "🚀",
        },
        {
          name: "SQL",
          level: 85,
          description: "PostgreSQL, MySQL, database design and optimization",
          icon: "📊",
        },
        {
          name: "MongoDB",
          level: 78,
          description:
            "Document databases, aggregation pipelines, and Mongoose ODM",
          icon: "🍃",
        },
      ],
    },
    tools: {
      title: "Tools & Others",
      skills: [
        {
          name: "Git",
          level: 88,
          description:
            "Version control, branching strategies, and collaboration workflows",
          icon: "📚",
        },
        {
          name: "Docker",
          level: 70,
          description:
            "Containerization, Docker Compose, and deployment strategies",
          icon: "🐳",
        },
        {
          name: "AWS",
          level: 75,
          description: "EC2, S3, Lambda, and cloud infrastructure management",
          icon: "☁️",
        },
        {
          name: "Testing",
          level: 82,
          description: "Jest, React Testing Library, and TDD practices",
          icon: "🧪",
        },
      ],
    },
  };

  return (
    <div className="bg-gray-700 p-6 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
      <h2 className="text-2xl mb-6 text-green-400 font-bold">
        Technical Skills
      </h2>

      {/* Category Buttons */}
      <div className="flex gap-4 mb-6">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 border-2 ${
              activeCategory === category
                ? "bg-blue-600 border-blue-700 text-white"
                : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-600"
            } rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] active:translate-x-[2px] active:translate-y-[2px] transition-all capitalize`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories[activeCategory].skills.map((skill) => (
          <div
            key={skill.name}
            className="relative p-4 bg-gray-800 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:border-blue-500 transition-all cursor-help"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2">
                <span className="text-xl">{skill.icon}</span>
                <span className="font-bold">{skill.name}</span>
              </span>
              <span className="text-green-400">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-600 h-3 rounded-full overflow-hidden">
              <div
                className="bg-green-400 h-full transition-all duration-500 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            {hoveredSkill === skill.name && (
              <div className="absolute top-full left-0 mt-2 p-3 bg-black text-white rounded z-10 w-64 border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
                {skill.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
