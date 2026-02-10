import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  Accessibility, 
  Award,
  Cpu,
  CheckCircle2,
  Camera,
  Download,
  Printer,
  Brain,
  Sparkles,
  Globe,
  ScrollText,
  BookOpen
} from 'lucide-react';

export const Icons = {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Briefcase,
  GraduationCap,
  Accessibility,
  Award,
  Cpu,
  CheckCircle2,
  Camera,
  Download,
  Printer,
  Brain,
  Sparkles,
  Globe,
  ScrollText,
  BookOpen
};

interface IconProps {
  name: keyof typeof Icons;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 18 }) => {
  const LucideIcon = Icons[name];
  return <LucideIcon className={className} size={size} />;
};