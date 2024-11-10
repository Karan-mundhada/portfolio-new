// import React from "react";

// export const Timeline = () => {
//   const experiences = [
//     {
//       year: "2024",
//       title: "Joint Secretary",
//       organization: "IEEE Student Branch, PISB",
//       location: "Pune, India",
//       description: [
//         "Organized and led technical events, workshops, and hackathons, engaging over 500 students",
//         "Collaborated with industry professionals to provide learning opportunities on emerging technologies",
//         "Strengthened student and alumni network, increasing engagement by 40%",
//       ],
//       skills: [
//         "Event Management",
//         "Technical Workshops",
//         "Community Engagement",
//       ],
//     },
//     {
//       year: "2023",
//       title: "President",
//       organization: "Debate Society of PICT (DEBSOC)",
//       location: "Pune, India",
//       description: [
//         "Led and managed a team of debaters, coordinating competitions and practices",
//         "Organized inter-collegiate debates and panel discussions with 200+ attendees",
//         "Enhanced communication and public speaking skills for members, increasing competition success rate",
//       ],
//       skills: ["Leadership", "Event Planning", "Communication"],
//     },
//   ];

//   const education = [
//     {
//       year: "2025",
//       degree: "B.E. in Computer Engineering",
//       institution: "Pune Institute of Computer Technology",
//       location: "Pune, Maharashtra",
//       achievements: [
//         "GPA: 8.69",
//         "Graduated with Honors in Data Science",
//         "Served as leader of the IEEE Student Branch and Debate Society",
//       ],
//     },
//     {
//       year: "2021",
//       degree: "Higher Secondary Certificate (HSC)",
//       institution: "Golden Kids Junior College",
//       location: "Amravati, Maharashtra",
//       achievements: ["Scored 96.83%", "Achieved Rank 813 in MHT-CET"],
//     },
//     {
//       year: "2019",
//       degree: "Secondary School Certificate (SSC)",
//       institution: "Golden Kids High English School",
//       location: "Amravati, Maharashtra",
//       achievements: [
//         "Scored 95%",
//         "Awarded multiple medals in academic Olympiads",
//       ],
//     },
//   ];

//   return (
//     <div className="mt-12 relative">
//       {/* Timeline Line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

//       {/* Timeline Items */}
//       <div className="space-y-12">
//         {[...experiences, ...education]
//           .sort((a, b) => b.year - a.year)
//           .map((item, index) => (
//             <div
//               key={index}
//               className={`flex items-center ${
//                 index % 2 === 0 ? "justify-start" : "justify-end"
//               }`}
//             >
//               {/* Timeline Point */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

//               {/* Content Card */}
//               <div className="w-5/12 p-6 bg-gray-700 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:border-blue-500 transition-all">
//                 <div className="text-green-400 text-lg font-bold">
//                   {item.year}
//                 </div>
//                 <div className="text-xl font-bold mt-2">
//                   {item.title || item.degree}
//                 </div>
//                 <div className="text-gray-400 mt-1">
//                   {item.company || item.school}
//                 </div>
//                 <div className="text-gray-400 text-sm">{item.location}</div>

//                 {item.description ? (
//                   <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
//                     {item.description.map((desc, i) => (
//                       <li key={i}>{desc}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
//                     {item.achievements.map((achievement, i) => (
//                       <li key={i}>{achievement}</li>
//                     ))}
//                   </ul>
//                 )}

//                 {item.technologies && (
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {item.technologies.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="px-2 py-1 bg-gray-800 text-blue-400 text-sm rounded border border-gray-600"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };
import React, { useEffect, useRef } from "react";

export const Timeline = () => {
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);

  const experiences = [
    {
      year: "2024",
      title: "Joint Secretary",
      organization: "IEEE Student Branch, PISB",
      location: "Pune, India",
      description: [
        "Organized and led technical events, workshops, and hackathons, engaging over 500 students",
        "Collaborated with industry professionals to provide learning opportunities on emerging technologies",
        "Strengthened student and alumni network, increasing engagement by 40%",
      ],
      skills: [
        "Event Management",
        "Technical Workshops",
        "Community Engagement",
      ],
    },
    {
      year: "2023",
      title: "President",
      organization: "Debate Society of PICT (DEBSOC)",
      location: "Pune, India",
      description: [
        "Led and managed a team of debaters, coordinating competitions and practices",
        "Organized inter-collegiate debates and panel discussions with 200+ attendees",
        "Enhanced communication and public speaking skills for members, increasing competition success rate",
      ],
      skills: ["Leadership", "Event Planning", "Communication"],
    },
  ];

  const education = [
    {
      year: "2025",
      degree: "B.E. in Computer Engineering",
      institution: "Pune Institute of Computer Technology",
      location: "Pune, Maharashtra",
      achievements: [
        "GPA: 8.69",
        "Graduated with Honors in Data Science",
        "Served as leader of the IEEE Student Branch and Debate Society",
      ],
    },
    {
      year: "2021",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Golden Kids Junior College",
      location: "Amravati, Maharashtra",
      achievements: ["Scored 96.83%", "Achieved Rank 813 in MHT-CET"],
    },
    {
      year: "2019",
      degree: "Secondary School Certificate (SSC)",
      institution: "Golden Kids High English School",
      location: "Amravati, Maharashtra",
      achievements: [
        "Scored 95%",
        "Awarded multiple medals in academic Olympiads",
      ],
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    // Observer for the timeline line
    const lineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-timeline");
        }
      });
    }, observerOptions);

    // Observer for timeline items
    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-item");
        }
      });
    }, observerOptions);

    // Observe timeline line
    if (timelineRef.current) {
      lineObserver.observe(timelineRef.current);
    }

    // Observe each timeline item
    itemsRef.current.forEach((item) => {
      if (item) {
        itemObserver.observe(item);
      }
    });

    return () => {
      lineObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <div className="mt-12 relative">
      {/* Timeline Line */}
      <div
        ref={timelineRef}
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] opacity-0 h-0 timeline-line"
        style={{
          height: "100%",
        }}
      ></div>

      {/* Timeline Items */}
      <div className="space-y-12">
        {[...experiences, ...education]
          .sort((a, b) => b.year - a.year)
          .map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`flex items-center opacity-0 -translate-x-24 timeline-item ${
                index % 2 === 0 ? "justify-start" : "justify-end even-item"
              }`}
            >
              {/* Timeline Point */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

              {/* Content Card */}
              <div className="w-5/12 p-6 bg-gray-700 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:border-blue-500 transition-all">
                <div className="text-green-400 text-lg font-bold">
                  {item.year}
                </div>
                <div className="text-xl font-bold mt-2">
                  {item.title || item.degree}
                </div>
                <div className="text-gray-400 mt-1">
                  {item.organization || item.institution}
                </div>
                <div className="text-gray-400 text-sm">{item.location}</div>

                {item.description ? (
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}

                {item.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 text-blue-400 text-sm rounded border border-gray-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>

      <style jsx>{`
        .timeline-line {
          transition: height 1.5s ease-out, opacity 0.5s ease-out;
        }

        .animate-timeline {
          opacity: 1 !important;
          height: 100% !important;
        }

        .timeline-item {
          transition: all 0.8s ease-out;
        }

        .even-item {
          transform: translateX(6rem);
        }

        .animate-item {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </div>
  );
};

export default Timeline;