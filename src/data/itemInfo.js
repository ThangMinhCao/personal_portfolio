import KinaxisLogo from "../assets/kinaxis_logo.png";
import CarletonLogo from "../assets/carleton_logo_inside.png";
import BlueprintLogo from "../assets/blueprint_logo.png";

export const info = {
  experiences: [
    {
      company: "Carleton University",
      logo: CarletonLogo,
      title: "Teaching Assistant",
      date: "09/2020 - Present",
      description:
        "Assisting professors to guide students through materials of Computer Science courses. Marking assignments and giving students thorough feedback.",
    },
    {
      company: "Kinaxis",
      logo: KinaxisLogo,
      title: "Software Developer Intern",
      date: "09/2021 - 12/2021",
      description:
        "Developed an interactive and responsive data visualization with D3.js library integrated with TypeScript and HTML, that improves development and onboarding procedures at the company.",
    },
    {
      company: "Kinaxis",
      logo: KinaxisLogo,
      title: "Software Engineering Intern",
      date: "05/2021 - 08/2021",
      description:
        "Investigated and implemented in C++ a specialized product structure cycle detection graph algorithm that combines variances of strongly connected components and cycles enumeration algorithms. Enhanced the running time and output reports of the product's related analytics feature.",
    },
    {
      company: "CU Blueprint",
      logo: BlueprintLogo,
      title: "Volunteer Front-end Developer",
      date: "09/2020 - 08/2021",
      description:
        "Worked with smart developers and designers at Carleton University in an Agile environment. Focuses on open-source projects to contribute to social goods.",
    },
    {
      company: "Carleton University",
      logo: CarletonLogo,
      title: "Undergraduate Researcher",
      date: "01/2021 - 04/2021",
      description:
        "Studied Finger Search, an extension that improves the average running time of search operation. Then, implemented and tested the algorithm on different data structures.",
    },
    {
      company: "Carleton University",
      logo: CarletonLogo,
      title: "Undergraduate Researcher",
      date: "05/2020 - 05/2020",
      description:
        "Worked with a senior Carleton professor to explore a randomized divide-and-conquer algorithm that calculates the closest-pair distance of points on multi-dimensional spaces without knowing their coordinates, using the doubling dimension concept.",
    },
  ],
  projects: [
    {
      title: "Gonline",
      link: "https://github.com/ThangMinhCao/gonline",
      description:
        "Realtime online Go game (Five in a row) built with Flask server + Jinja2 template and SocketIO with PostgreSQL database.",
      technologies: {
        languages: ["Python", "JavaScript", "CSS", "HTML"],
        frameworks: ["Flask", "Jinja2", "SocketIO", "SQLAlchemy", "PostgreSQL"],
      },
    },
    {
      title: "Closest Pair Doubling",
      subtitle: "Dean's Research Internship",
      date: "Summer 2020",
      link: "https://github.com/ThangMinhCao/closest-pair-doubling",
      description:
        "Implemented the closest-pair doubling algorithm from scratch, then use generated data sets to proved my professor's hypothesis about its logarithmic running time.",
      technologies: { languages: ["C++"], frameworks: ["Boost Library"] },
    },
    {
      title: "Beneficent CRM",
      subtitle: "Volunteer Front-end Developer at CU Blueprint",
      link: "https://gitlab.com/carletonblueprint/beneficent",
      description:
        "Using React, coordinated with back-end developers and designers to build an open-source CRM full-stack web app for a non-profit organization that significantly improves the processing time of their services.",
      technologies: { languages: ["TypeScript", "SCSS"], frameworks: ["React", "Jest", "Material UI"] },
    },
    {
      title: "Finger Search",
      subtitle: "Dean's Research Internship",
      date: "Spring 2021",
      link: "https://github.com/ThangMinhCao/finger-search",
      description:
        "Applied the search algorithm on Treap, SkipList ad 2-4 Tree. Then, examined and reported their differences in time complexity to decide which structure is the most suitable.",
      technologies: { languages: ["C++"], frameworks: ["Boost Library"] },
    },
    {
      title: "Connect 4",
      link: "https://github.com/ThangMinhCao/connect_4",
      description:
        "A full-stack web game that simulates the popular board game, Connect-4. It supports online real-time gameplay, JWT Authentication, room invitation and friend connection features.",
      technologies: {
        languages: ["JavaScript", "CSS", "HTML"],
        frameworks: ["React", "Node.js", "Express.js", "SocketIO", "MongoDB"],
      },
    },
    {
      title: "Study Buddy",
      subtitle: "CU Hacking",
      date: "Spring 2020",
      link: "https://github.com/ThangMinhCao/studyBuddy",
      description:
        "Built a cross-platform mobile app that improve our study periods by providing a pomodoro timer and correcting users' sitting posture.",
      technologies: {
        languages: ["JavaScript"],
        frameworks: ["React Native", "Firebase", "Google Cloud Vision"],
      },
    },
    {
      title: "Personal Website",
      link: "https://github.com/ThangMinhCao/personal_portfolio",
      description:
        "This is the web site that you are currently on, which I designed and built from scratch. Hope you enjoy!",
      technologies: { languages: ["JavaScript", "CSS"], frameworks: ["React", "Netlify", "Figma"] },
    },
  ],
};
