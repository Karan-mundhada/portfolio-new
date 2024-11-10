import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Email Management System",
      description: "Efficient email organization and management.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "JWT"],
      link: "https://github.com/Karan-mundhada/Emailer",
      live: "",
    },
    {
      title: "Customer Churn Analysis",
      description:
        "Predicting and preventing customer loss through data analysis.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "TensorFlow",
        "Matplotlib",
        "Jupyter",
      ],
      link: "https://github.com/Karan-mundhada/Churn",
      live: "",
    },
    {
      title: "News Search Application",
      description: "Seamless news search and discovery.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "NewsAPI",
        "Tailwind CSS",
        "Axios",
      ],
      link: "https://github.com/Karan-mundhada/News-App",
      live: "",
    },
    {
      title: "CryptoCoin Price Tracker",
      description: "Real-time cryptocurrency price tracking and analysis.",
      technologies: [
        "React",
        "CoinGecko API",
        "Chart.js",
        "Tailwind CSS",
        "Context API",
        "Axios",
      ],
      link: "https://github.com/Karan-mundhada/coin-price",
      live: "https://cryptocoin-tracking.netlify.app/",
    },
    {
      title: "Stock Price Prediction",
      description: "Predicting future stock prices using machine learning.",
      technologies: [
        "Python",
        "TensorFlow",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Plotly",
      ],
      link: "https://github.com/Karan-mundhada/Stock-Prediction",
      live: "",
    },
  ]

  return (
    <div className="bg-gray-700 p-6 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)]">
      <h2 className="text-2xl mb-6 text-green-400 font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded border-2 border-gray-600 hover:border-blue-500 transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 text-blue-400 text-sm rounded border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
