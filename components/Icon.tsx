"use client";

import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Clock,
  ExternalLink,
  FileText,
  FolderKanban,
  GraduationCap,
  Image as ImageIcon,
  Layers,
  Link2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Trophy,
  WalletCards,
} from "lucide-react";

const icons = {
  "alert-circle": AlertCircle,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  award: Award,
  "book-open": BookOpen,
  briefcase: BriefcaseBusiness,
  building: Building2,
  calendar: CalendarDays,
  clock: Clock,
  external: ExternalLink,
  file: FileText,
  folder: FolderKanban,
  graduation: GraduationCap,
  image: ImageIcon,
  layers: Layers,
  link: Link2,
  mail: Mail,
  map: MapPin,
  phone: Phone,
  shield: ShieldCheck,
  trophy: Trophy,
  wallet: WalletCards,
};

export type IconName = keyof typeof icons;

export default function Icon({
  name,
  className,
  label,
}: {
  name: IconName;
  className?: string;
  label?: string;
}) {
  const Component = icons[name];

  return (
    <Component
      aria-hidden={label ? undefined : "true"}
      aria-label={label}
      className={className}
    />
  );
}
