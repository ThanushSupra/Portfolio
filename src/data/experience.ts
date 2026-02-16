export interface Experience {
  company: string;
  position: string;
  techstack: string;
  location: string;
  duration: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Weve',
    position: 'Software Engineering Intern',
    techstack: 'React, TypeScript, Tailwind, Supabase, Mapbox GL, Apple Maps',
    location: 'Toronto, Canada',
    duration: 'May 2025 – Aug 2025',
    description: [
      'Helped design, build, and launch a community events app with secure authentication, personalized onboarding, and interactive map-based event discovery.',
      'Developed a similarity-based matching system, improved search performance, and led development of the companion web platform.',
    ],
  },
];
