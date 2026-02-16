export interface Project {
  name: string;
  techstack: string;
  description: string[];
  link?: string;
  time: string;
}

export const projects: Project[] = [
  {
    name: 'Peel Panthers Soccer Club',
    techstack: 'Next.js, React, TypeScript, TailwindCSS, Zod, Resend, Vercel',
    description: [
      'Built a mobile-responsive Next.js website, enhancing engagement for a 100+ member club by centralizing information and showcasing achievements.',
      'Implemented a multi-step sign-up flow with React Hook Form and Zod, and automated registration confirmations via Resend API.',
    ],
    link: 'https://peelpanthers.com',
    time: 'Jan 2026 – Present',
  },
  {
    name: 'Treasure Runner Game Engine',
    techstack: 'C, Python, Docker, CI/CD, GitLab',
    description: [
      'Built a modular C-based game engine with procedurally generated worlds, supporting room layouts, portals, treasures, and player navigation.',
      'Developed Python scripts and a curses-based UI using ctypes for automated integration testing and persistent game state.',
    ],
    time: 'Jan 2026 – Present',
  },
  {
    name: 'HeyCare – TechTO Hackathon \'25',
    techstack: 'React, TypeScript, Supabase, OpenRouter, WebSpeech',
    description: [
      'Developed a React full-stack prototype with Supabase, improving medical note capture efficiency by 40%.',
      'Integrated voice-to-text note generation using WebSpeech and OpenRouter APIs, reducing typing time by 80%.',
    ],
    link: 'https://github.com/ThanushSupra/Hey-Care',
    time: 'Oct 2025 – Nov 2025',
  },
  {
    name: 'Robotics Maze Solver',
    techstack: 'C/C++, Arduino, IR Sensors',
    description: [
      'Designed and programmed a robot using IR sensors and Arduino to navigate a maze, achieving a 90% task completion rate.',
      'Led a team of 12 students, driving the development of an efficient and responsive maze-solving robot.',
    ],
    time: 'Oct 2025 – Nov 2025',
  },
];
