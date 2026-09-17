export interface TechStackItem {
  name: string;
  description: string;
  colorClass: 'angular' | 'react' | 'python';
  image: string;
}

export interface HightlightBadge {
  icon: string;
  label: string;
}

export interface NavLink {
  label: string;
  active?: boolean;
}

export interface DriveCard {
  title: string;
  description: string;
  accent: 'blue' | 'red' | 'yellow';
  icon: 'rocket' | 'code' | 'book';
}

export interface TechIcon {
  name: string;
  icon:
    | 'angular'
    | 'react'
    | 'python'
    | 'nodejs'
    | 'typescript'
    | 'tailwind'
    | 'git'
    | 'docker'
    | 'javascript';
}

export interface QuickStat {
  value: string;
  label: string;
  icon: 'code' | 'clients' | 'coffee' | 'rocket';
}

type TechVariant = 'angular' | 'react' | 'python' | 'neutral';
type IconType = 'angular' | 'react' | 'python';
type StatIconType = 'briefcase' | 'calendar' | 'users';
type HighlightIconType = 'trending' | 'team' | 'rocket';
type BadgeVariant = 'present' | 'duration-blue' | 'duration-yellow';

export interface TechBadge {
  name: string;
  variant: TechVariant;
}

export interface ExperienceItem {
  id: number;
  iconType: IconType;
  role: string;
  company: string;
  dateRange: string;
  badgeLabel: string;
  badgeVariant: BadgeVariant;
  description: string;
  tech: TechBadge[];
}

export interface StatCard {
  id: number;
  iconType: StatIconType;
  value: string;
  label: string;
  colorVar: string;
}

export interface Highlight {
  id: number;
  iconType: HighlightIconType;
  title: string;
  description: string;
  colorVar: string;
}

export type ProjectCategory = 'Angular' | 'React' | 'Python' | 'Other';
export type FilterKey = 'All' | ProjectCategory;

export interface Tag {
  label: string;
  colorVar: string;
}

export interface Project {
  name: string;
  category: ProjectCategory;
  icon: 'angular' | 'react' | 'react native' | 'python';
  tags: Tag[];
  description: string;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export type IconKey =
  'chat' | 'bolt' | 'handshake' | 'mail' | 'phone' | 'whatsapp' | 'linkedin' | 'pin' | 'clock';
export type AccentKey = 'blue' | 'green' | 'yellow' | 'purple';

export interface HighlightKeyItem {
  icon: IconKey;
  accent: AccentKey;
  title: string;
  description: string;
}

export interface ConnectItem {
  icon: IconKey;
  accent: AccentKey;
  label: string;
  value: string;
  valueAccent?: AccentKey;
  note: string;
}

//resume
export interface Badge {
  icon: 'bolt' | 'shield' | 'rocket';
  label: string;
}

export interface InfoItem {
  icon: 'briefcase' | 'mail' | 'pin' | 'clock';
  label: string;
  value: string;
}

export interface SkillCard {
  name: string;
  colorVar: '--angular-color' | '--react-color' | '--python-color';
  icon: 'angular' | 'react' | 'python';
  description: string;
  items: string[];
}

export interface ExperienceKeyItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  icon: 'cart' | 'check' | 'chart' | 'paper';
  tags: { label: string; color: string }[];
}

export interface ContactItem {
  icon: 'mail' | 'phone' | 'pin';
  value: string;
}

export interface SocialLink {
  icon: 'linkedin' | 'github' | 'twitter' | 'globe';
  href: string;
  label: string;
}
