import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiR,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiSpringboot,
  SiPandas,
  SiNumpy,
  SiLinux,
  SiVercel,
  SiJira,
  SiSupabase,
  SiKubernetes,
  SiDocker,
  SiGit,
  SiGitlab,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { LogoItem } from '../components/ui/LogoLoop';
import type { FC } from 'react';

type IconComponent = FC<{ size?: number; color?: string }>;

function createSkill(Icon: IconComponent, name: string): LogoItem {
  return {
    node: (
      <div className="flex flex-col items-center gap-2">
        <Icon size={40} color="#FFFFFF" />
        <span className="text-xs text-gray-400">{name}</span>
      </div>
    ),
    title: name,
  };
}

export const skillsRow1: LogoItem[] = [
  // Programming Languages
  createSkill(SiTypescript, 'TypeScript'),
  createSkill(SiJavascript, 'JavaScript'),
  createSkill(SiPython, 'Python'),
  createSkill(FaJava, 'Java'),
  createSkill(SiCplusplus, 'C/C++'),
  createSkill(SiHtml5, 'HTML'),
  createSkill(SiCss3, 'CSS'),
  createSkill(SiMysql, 'MySQL'),
  createSkill(SiR, 'R'),
  // Frameworks & Libraries
  createSkill(SiNextdotjs, 'Next.js'),
  createSkill(SiReact, 'React'),
  createSkill(SiReact, 'React Native'),
];

export const skillsRow2: LogoItem[] = [
  // Frameworks & Libraries (cont.)
  createSkill(SiTailwindcss, 'Tailwind CSS'),
  createSkill(SiSpringboot, 'Spring Boot'),
  createSkill(SiPandas, 'pandas'),
  createSkill(SiNumpy, 'NumPy'),
  // Developer Tools & Platforms
  createSkill(SiLinux, 'Linux'),
  createSkill(SiVercel, 'Vercel'),
  createSkill(SiJira, 'Jira'),
  createSkill(SiSupabase, 'Supabase'),
  createSkill(SiKubernetes, 'Kubernetes'),
  createSkill(SiDocker, 'Docker'),
  createSkill(SiGit, 'Git'),
  createSkill(SiGitlab, 'GitLab'),
];

// Skills without available icons in react-icons:
// - MATLAB
// - Azure
// - Power BI
// - Resend
// - WebSpeech API
// - OpenRouter
// - CI/CD (concept, not a specific tool)
// - Microsoft Office
// - GSuite
